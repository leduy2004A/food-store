<template>
  <div class="detail-food-modal d-flex">
    <div class="detail-image">
        <img src="https://res.cloudinary.com/doedovklj/image/upload/v1686843525/xyz-abc_638224655229647634image.webp" alt="" class="image-food">
    </div>
    <div class="title-food">
        <h1>Chả lá lốt</h1>
        <p class="price">45000 VND - <del style="color:black;font-size:20px">100000 VND</del></p>
        <v-icon v-for="item in 5" :key="item" class="mt-7" style="color:orange">mdi-star</v-icon>
        <p class="mt-4">dữ liệu chưa được cập nhật</p>
        <v-divider thickness="2" class="mt-8"></v-divider>
        <div class="footer-modal d-flex">
            <div class="number-food">
            <button class="dec qtybutton" @click="minus()">-</button>
            <input class="cart-plus-minus-box input-number" type="text" readonly="" :value="valueText">
            <button class="inc qtybutton" @click="pluss()">+</button>
        </div>
        <div class="btn-collect">
            <button class="btn-add"><h3>THÊM</h3></button>
            <div class="lop"></div>
        </div>
        <v-icon class="mr-4 change-color">mdi-heart-outline</v-icon>
        <v-icon class="change-color">mdi-swap-horizontal</v-icon>
        </div>
        
    </div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            valueText:1
        }
    },
    methods:{
        pluss(){
            this.valueText += 1;
        },
        minus(){
            
            if(this.valueText === 1)
            {
                this.valueText = 1
            }
            else
            {
                this.valueText -= 1;
            }
        }
    }
}
</script>

<style scoped>
.detail-food-modal{
    padding: 35px 12px;
}
.detail-image{
    width: 40%;
    padding-right:12px ;
}
.image-food{
    width: 100%;
}
.title-food{
    padding-left:12px;
}
.price{
    font-size: 30px;
    color: red;
}
.number-food{
    display: flex;
    align-items: center;
}
.input-number{
    display: flex;
    border: 1px solid grey;
    width:78px;
    height: 38px;
    justify-content: center;
    text-align: center;
    margin: 0 10px;
}
.inc,.dec{
    font-size: 30px;
}
.btn-add{
    background-color: black;
    color: white;
    width: 90px;
    height: 50px;
    margin: 0 12px;
}
.footer-modal{
    align-items: center;
    margin-top: 10px;
}
.btn-collect{
    position: relative;
    display: flex;
    justify-content: center;
}
.lop{
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 0px;
    /* background-color: orange; */
    transition: width 0.5s;
    color: black;
    
}

.btn-collect:hover .lop{
    background-color: orange;
    width: 90px;
    color: black;
}
.change-color:hover{
   color: orange;
   transition: all .5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
</style>