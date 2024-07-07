<template>
  <div class="content-shop">
    <v-container>
      <v-row>
        <v-col cols="4" v-for="item in food.result" :key="item">
          <v-sheet>
            <productShop @clickOpen="openModal" :food="item"></productShop>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-pagination
      :length="food.totalPage"
      rounded="circle"
      color="orange"
      v-model="pageNumber"
    ></v-pagination>
    <!-- <foodChatVue class="food-chat"></foodChatVue> -->
  </div>

</template>

<script>
import productShop from "./product-shop.vue";
import { createNamespacedHelpers } from "vuex";
// import foodChatVue from "../chat-food/food-chat.vue";
const { mapState } = createNamespacedHelpers("FoodShop");
export default {
  async created() {
    await this.$store.dispatch("FoodShop/getFoodShop", this.pageNumber);
  },

  computed: {
    ...mapState({
      food: (state) => state.food,
    }),
  },
  data() {
    return {
      pageNumber: 1,
      search: false,
      dataText: "",
    };
  },
  watch: {
    async pageNumber(newVal) {
      if (this.search === false) {
        this.pageNumber = newVal;
        await this.$store.dispatch("FoodShop/getFoodShop", this.pageNumber);
      } else {
        this.pageNumber = newVal;
        const payload = {
          pageNumber: this.pageNumber,
          dataText: this.dataText,
        };
        this.$store.dispatch("FoodShop/getDataSearchFoodShop", payload);
      }
    },
  },
  components: {
    productShop,
    // foodChatVue,
  },
  methods: {
    openModal(food) {
      this.$emit("clickOpenModal", food);
    },
  },
  mounted() {
    this.emitter.on("dataSearch",  async (dataText) => {
      this.search = true;
      this.pageNumber = 1;
      if (dataText === "") {
        await this.$store.dispatch("FoodShop/getFoodShop", this.pageNumber);
        // return;
        console.log("Rất là ok");
      } else {
        this.dataText = dataText;

        const payload = { pageNumber: this.pageNumber, dataText };
        this.$store.dispatch("FoodShop/getDataSearchFoodShop", payload);
      }
    });
  },
};
</script>

<style scoped></style>
