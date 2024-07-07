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

</style>