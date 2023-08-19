<template>
  <div class="register-notice text-center d-flex">
    <h1>Đăng ký</h1>
    <p>Đăng ký để nhận những thông báo mới nhất của chúng tôi</p>
    <input type="text" placeholder="Địa chỉ email của bạn" class="input-email">
    <button class="btn-dangki">Đăng ký</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100&family=Poppins&display=swap');
h1{
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 48px;
    font-weight: 400;
}
p{
    color: #696969;
}
.register-notice{
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.input-email{
    outline: none;
    border-bottom: 2px solid #696969;
    width: 500px;
    text-align: center;
    margin-top: 60px;
}
.btn-dangki{
    width: 181px;
    background-color: #6EAB49;
    height: 50px;
    color: white;
    margin-top: 40px;
    border-radius: 10px;
}
.btn-dangki:hover{
     background-color: orange;
     transition: all .5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
</style>