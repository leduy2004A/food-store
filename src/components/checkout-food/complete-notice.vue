<template>
  <div class="complete-notice">
    <headerInHeaderVue :styleCss="styleCss"></headerInHeaderVue>
    <breadCumVue :items="items"></breadCumVue>
    <div class="order-notice">
      <orderCompleteVue></orderCompleteVue>
    </div>
    <footerWebVue></footerWebVue>
  </div>
</template>

<script>
import footerWebVue from "../main-web/footer-web.vue";
import headerInHeaderVue from "../main-web/header-in-header.vue";
import breadCumVue from "../shop-web/bread-cum.vue";
import orderCompleteVue from "./order-complete.vue";
export default {
  created(){
  },
  data() {
    return {
      styleCss: {
        padding: "0px 160px",
      },
      items: [
        {
          title: "Trang chủ",
          disabled: false,
          href: "/mainWeb",
        },
        {
          title: "Hoàn tất đơn hàng",
          disabled: false,
          href: "/mainShop",
        },
      ],
    };
  },
  components: {
    headerInHeaderVue,
    breadCumVue,
    footerWebVue,
    orderCompleteVue,
  },
};
</script>

<style scoped>
.complete-notice .order-notice {
  display: flex;
  justify-content: center;
  padding: 50px 0;
}
</style>
