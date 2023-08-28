<template>
  <div class="product-main">
                        <div class="image">
                            <img src="https://res.cloudinary.com/doedovklj/image/upload/v1686061449/xyz-abc_638216834449492689image.webp" alt="" class="image-product">
                            <div class="list-option d-flex">
                                <div class="heart">
                                    <v-icon>mdi-heart-outline</v-icon>
                                </div>
                                <div class="add-cart">
                                    <v-icon>mdi-cart-outline</v-icon>
                                </div>
                                <div class="eye" @click="openModal()">
                                    <v-icon >mdi-eye-outline</v-icon>
                                </div>
                            
                            </div>
                            
                        </div>
                        <div class="text-product">
                             <h3 class="text-center cach">GIÒ NẤM</h3>
                        <p class="text-center cach">90,250 VND - <del>100,000 VND</del></p>
                        <v-icon v-for="item in 5" :key="item" class="text-center" style="color:orange">mdi-star</v-icon>
                        </div>
                    </div>
                    
                    
</template>

<script>
export default {
components:{
},
methods:{
    openModal(){
        this.$emit("clickOpen");
    }
}
}
</script>

<style scoped>
.product-main{
    width: 100%;
}
.image-product{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.image{
    position: relative;
    width: 100%;
    height: 200px;
}
.text-product{
    text-align: center;
}
.cach{
    margin: 0 20px;
}
.heart{
    height: 10%;
}
.list-option{
    
    position: absolute;
    bottom: 0;
    height: 20%;
    width: 100%;
    
}
.heart{
    display: flex;
    width: 20%;
    height: 100%;
    background-color: orange;
    justify-content: center;
    align-items: center;
    color: white;
    transition: all .5s ease;
    display: none;
}
.add-cart{
    display: flex;
    width: 60%;
    height: 100%;
    background-color: orange;
    justify-content: center;
    align-items: center;
    color: white;
    border-right: 1px solid white;
    border-left: 1px solid white; 
    transition: all .5s ease;
    display: none;
}
.eye{
    display: flex;
    width: 20%;
    height: 100%;
    background-color: orange;
    justify-content: center;
    align-items: center;
    color: white;
     transition: 1s;
     transform: rotateX(-60deg);
    display: none;
}
.product-main:hover .add-cart{
    display: flex;
}
.product-main:hover .eye{
    display: flex;
    transform: none;
}
.product-main:hover .heart{
    display: flex;
}
.eye:hover{
    background-color: black;
    width: 200px;
}
.heart:hover{
    background-color: black;
   width: 200px;
}
.add-cart:hover{
    background-color: black;
    width: 200px;
}
</style>