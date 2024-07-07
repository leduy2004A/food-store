<template>
  <div class="order-complete">
    <v-icon class="icon">mdi-cart-outline</v-icon>
    <h2>Đã hoàn tất đơn hàng</h2>
    <p>Chúng tôi sẽ gửi thông tin về đơn hàng sớm nhất cho bạn</p>
    <router-link to="order-history"><v-btn color="orange">Kiểm tra đơn</v-btn></router-link>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.icon{
    font-size: 200px;
}
.order-complete{
   text-align: center;
}
</style>