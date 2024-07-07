<template>
  <div class="cart">
    <cartTableVue @getprice="Duyne(duy)"></cartTableVue>
    <div class="bill">
      <billPayVue></billPayVue>
    </div>
    
  </div>
</template>

<script>
import billPayVue from './bill-pay.vue'
import cartTableVue from './cart-table.vue'
export default {
  methods:{
    Duyne(duy)
    {
      console.log(duy)
    }
  },
  components:{
    cartTableVue,
    billPayVue
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

<style scoped>
.bill{
  width:80% ;
  margin: 50px auto;
  display: flex;
  justify-content: flex-end;
}
</style>