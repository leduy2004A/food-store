<template>
  <div class="love-food-detail">
    <table-love-vue
      :headerTable="headerTable"
      :contentTable="contentTable"
      :title="title"
    ></table-love-vue>
  </div>
</template>

<script>
import tableLoveVue from "./table-love.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("LoveFood");
export default {
  components: {
    tableLoveVue,
  },
  data() {
    return {
      title: "Sản phẩm yêu thích của bạn",
      headerTable: ["Hình ảnh", "Tên", "Giá", "Mua hàng", "Hành Động"],
      contentTable: [],
    };
  },
  created() {
    this.$store.dispatch("LoveFood/getDataFoodLoveActions").then(() => {
      this.contentTable = this.food;
    });
  },
  computed: {
    ...mapState({
      food: (state) => state.food,
    }),
  },
};
</script>

<style></style>
