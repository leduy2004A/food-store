<template>
  <div class="header-store">
    <v-app-bar height="68" class="py-2 header" :elevation="1">
        <contentHeader/>
        
    </v-app-bar>
  </div>
</template>

<script>
import logo from '../../images/GSlogo.png'
import contentHeader from './content-header.vue'
export default {
    components:{
        contentHeader
    },
    data(){
        return {
            logo
        }
    }
}
</script>

<style>
.logo{
    width: 200px;
}
ul{
    list-style: none;
    align-items: center;
}
li{
    margin-right: 30px;
}
a{
text-decoration: none;
color: black;
}
.content-header{
    width: 100%;
    justify-content: space-around;
}
.icon-header{
    margin-right: 20px;
}
.header{
    position: unset;
}
</style>