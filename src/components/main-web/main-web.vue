<template>
  <div class="main-web">
    <header>
      <headerStore v-if="quyetdinh" :key="quyetdinh"></headerStore>
    </header>
    <headerInHeader/>
    <main class="mt-2">

        <imageContent></imageContent>
        <content-food></content-food>
        <timeFood class="my-10"></timeFood>
        <feedBack class="fb"></feedBack>
        <registerNotice class="dangki"></registerNotice>
    </main>
  </div>
  <footer>
          <footerWeb></footerWeb>
      </footer>
</template>

<script>
import contentFood from './content-food.vue'
import feedBack from './feed-back.vue'
import footerWeb from './footer-web.vue'
import headerInHeader from './header-in-header.vue'
import imageContent from './image-content.vue'
import registerNotice from './register-notice.vue'
import timeFood from './time-food.vue'
import headerStore from './header-store.vue'
export default {
  data(){
    return {
      quyetdinh : false
    }
  },
    components:{
        headerInHeader,
        imageContent,
        contentFood,
        timeFood,
        feedBack,
        registerNotice,
        footerWeb,
        headerStore
    },
    created(){
      window.addEventListener('scroll',function(){
        const cuontrang = Math.round(window.scrollY);
        if(cuontrang >= 300)
        {
          this.quyetdinh = true;
          console.log(this.quyetdinh);
        }
        
      })
    }
}
</script>

<style scoped>
.main-web{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
}
.dangki{
  margin-top: 100px;
}
.fb{
  margin-top: 90px;
}
footer{
  margin-top: 100px;
}
</style>