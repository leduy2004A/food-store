<template>
  <div class="cart">
    <table-love-vue :headerTable="headerTable" :contentTable="contentTable" :title="title"></table-love-vue>
  </div>
</template>

<script>
import tableLoveVue from '../love-food/table-love.vue'
export default {
  components:{
    tableLoveVue
  },
  data(){
    return {
       title:"Giỏ hàng của bạn",
        headerTable:[
            "Hình ảnh","Tên","Giá","Số lượng","Hành Động"
        ],
        contentTable:[
            {
                hinhanh:"https://res.cloudinary.com/doedovklj/image/upload/v1686843525/xyz-abc_638224655229647634image.webp",
                ten:"Chả lá lốt",
                gia:"100,000 VND",
                muahang:"1",
                hanhdong:"mdi-close"
            }
        ]
    }
    }
  }
</script>

<style>

</style>