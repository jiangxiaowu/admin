<template>
  <b-row style="background-color:#ccc">
    <b-col>
        <waterfall
          :line-gap="300"
          :watch="items"
          :min-line-gap="200"
          :max-line-gap="220"
          :single-max-width="300"
          ref="waterfall"
        >
          <!-- each component is wrapped by a waterfall slot -->
          <waterfall-slot
            v-for="(item, index) in items"
            :width="item.width"
            :height="item.height"
            :order="index"
            :key="item.id"
          >
            <b-card
              :title="items.name"
              :img-src="item.image.attributes.url"
              :img-alt="item.image_format"
              :camera="item.camera"
              img-top
              tag="article"
              class="ml-2 mt-2"
            >
            </b-card>
          </waterfall-slot>
        </waterfall>
   
    </b-col>
    <!-- <b-col cols="3" style="background-color: #ccc">Right</b-col> -->
  </b-row>
</template>

<script>
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";

export default {
  data() {
    return {
      items: [],
    };
  },
  components: {
    Waterfall,
    WaterfallSlot,
  },
  mounted() {
    const query = new this.$AV.Query("Document");
    query
      .skip(20)
      .find()
      .then((data) => {
        // const name = todo.get('name');
        var items=[];
        for(var row of data){
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
h4{
  font-size: 1rem;
}
</style>
