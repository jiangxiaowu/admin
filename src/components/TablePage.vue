<template>
  <b-container fluid>
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
          {{ perPage * (currentPage - 1) + 1 + data.index + skip }}
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
    <b-pagination
      @page-click="onPageClick"
      :total-rows="totalRows"
      :per-page="perPage"
      aria-controls="my-table"
      class="pagination"
      align="left"
    ></b-pagination>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      perPage: 6,
      currentPage: 1,
      totalRows: 0,
      skip: 0,
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
  methods: {
    onPageClick(bvEvent, page) {
      const skip = this.perPage * (page - 1);
      this.getTableData(skip);
      this.skip = skip;
    },

    getTotalRows() {
      new this.$AV.Query("Document").count().then((count) => {
        this.totalRows = count;
      });
    },
    getTableData(skip) {
      skip = skip || 0;

      new this.$AV.Query("Document")
        .skip(skip)
        .limit(this.perPage)
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
  },
  mounted() {
    this.getTotalRows();
    this.getTableData();
  },
};
</script>

<style scoped>
#my-table {
  margin: 20px;
}
.pagination {
  padding-left: 20px;
  position: relative;
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
