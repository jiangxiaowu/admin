<template>
  <div>
    <b-row>
      <b-table outlined hover :items="items" :fields="fields" class="table">
        <template #cell(index)="data">
          {{ data.index + 1 }}
        </template>
        <template #cell(picture)="data">
          <div class="picture">
            <b-img :src="data.item.image.attributes.url" class="img"></b-img>
          </div>
        </template>
        <template #cell(category)="data">
          {{ data.item.category }}
        </template>
      </b-table>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: "index", label: "ID" },
        { key: "picture", label: "Image" },
        { key: "name", label: "Name" },
        { key: "camera", label: "Camera" },
        { key: "category", label: "Category" },
      ],
      items: [],
    };
  },
  mounted() {
    const query = new this.$AV.Query("Document");
    query
      .skip(20)
      .find()
      .then((data) => {
        var items = [];
        for (var row of data) {
          items.push(row._serverData);
        }
        this.items = items;
      })
      .catch((e) => {
        console.error(e);
      });
  },
};
</script>

<style scoped>
.table {
  margin: 20px;
}
.picture {
  text-align: center;
  width: 120px;
  line-height: 80px;
}
.img {
  height: 60px;
}
</style>
