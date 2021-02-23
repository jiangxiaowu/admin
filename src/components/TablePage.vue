<template>
  <div>
    <b-row>
      <b-table
        outlined
        hover
        :items="items"
        :fields="fields"
        id="my-table"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template #cell(index)="data">
          <!-- {{ data.index * (currentPage - 1) }} -->
          {{perPage * (currentPage - 1) + 1 + data.index }}        
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

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        class="pagination"
        align="right"
      ></b-pagination>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 7,
      currentPage: 1,
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
  computed: {
    rows() {
      return this.items.length;
    },
  },
  mounted() {
    const query = new this.$AV.Query("Document");
    query
      .limit(100)

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
#my-table,
.pagination {
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
