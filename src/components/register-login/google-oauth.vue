<template>
  <div class="google-oauth">
    <div class="login-google d-flex">
      <a href="http://localhost:3000/auth/google" class="btn-login">Đăng nhập
      <v-icon class="ml-5" color="red">mdi-google</v-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-login{
  background-color: rgb(190, 190, 97);

  padding: 0 10px;
  font-size: 17px;
  font-weight: bold;
}
.google-oauth .btn {
  padding: 12px 20px;
}
</style>
