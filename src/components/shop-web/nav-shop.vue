<template>
  <div class="nav-shop">
   <p>Tìm Kiếm Sản Phẩm</p>
   <div class="input d-flex mt-7">
    <input type="text" class="text-input" placeholder="Tìm kiếm">
   </div>
   <div class="danhmuc mt-10">
    <p>Theo Danh Mục</p>
    <v-checkbox label="Tất cả danh mục" color="orange" class="cach"></v-checkbox>
    <v-checkbox label="Món chay mặn" color="orange" class="cach"></v-checkbox>
    <v-checkbox label="Hàng chay cấp đông" color="orange" class="cach"></v-checkbox>
    <v-checkbox label="Món nộm" color="orange" class="cach"></v-checkbox>
    <v-checkbox label="Món cơm" color="orange" class="cach"></v-checkbox>
   </div>
   <div class="nhan mt-10">
    <p class="mb-5">Nhãn</p>
    <p class="nhan-text">Món chay mặn</p>
    <p class="nhan-text">Hàng chay cấp đông</p>
    <p class="nhan-text">Món Nộm</p>
    <p class="nhan-text">Món Cơm</p>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .text-input{
        border: 1px solid #E6E6E6;
        padding: 0 10px;
        height: 100%;
        outline-color: orange;
    }
    .input{
        height: 41px;
        
    }
    .nav-shop{
        width: 20%;
    }
    .cach{
        margin-bottom: -30px;
    }
    .v-input__details{
        display: none;
    }
    .nhan-text{
        display: inline-block;
        height: 30px;
        background-color: #E6E6E6;
        border-radius: 10px;
        padding: 0 10px;
        color: black;
        margin-bottom: 10px;
        margin-right: 10px;
    }
    .nhan-text:hover{
        background-color: orange;
        color: white;
        transition: all .5s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
</style>