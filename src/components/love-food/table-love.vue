<template>
  <div class="table-love">
    <h3 class="title-love">{{title}}</h3>
    <v-table>
    <thead>
      <tr>
        <th class="text-center" v-for="item in headerTable" :key="item">
          {{item}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in contentTable" :key="i">
        <td class="text-center"><img :src="i.hinhanh" alt="" class="image-food"></td>
        <td class="text-center">{{i.ten}}</td>
        <td class="text-center">{{i.gia}}</td>
        <td class="text-center">{{i.muahang}}</td>
        <td class="text-center"><v-icon>{{i.hanhdong}}</v-icon></td>
      </tr>
    </tbody>
  </v-table>
  <div class="continue-product">
    <router-link to="/mainShop"><p class="continue frame">Tiếp tục mua hàng</p></router-link>
    
    <p class="remove frame">Xóa hết</p>
  </div>
  </div>
</template>

<script>
export default {
  props:{
    headerTable:{
      type:Array
    },
    contentTable:{
      type:Array
    },
    title:{
      type:String
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&family=Poppins&display=swap');
  .title-love{
    font-family: 'Be Vietnam Pro', sans-serif;
    color: #000000;
    font-weight: 400;
  }
.image-food{
    width: 150px;
    margin-top: 5px;
}
.table-love{
    width: 80%;
    margin: 0 auto;
}
.continue-product{
    padding:30px 0;
    display: flex;
    justify-content: space-between;
}
.frame{
    width: 200px;
    color: #363F4D;
    background-color: #F2F2F2;
    text-align: center;
    border-radius: 20px;
    padding: 10px 0;
    cursor: pointer;
}
.frame:hover{
    background-color: orange;
    color: white;
   transition: all .5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
</style>