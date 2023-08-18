<template>
  <div class="main-web">
    <headerInHeader/>
    <main class="mt-2">
        <imageContent></imageContent>
        <content-food></content-food>
        <timeFood class="my-10"></timeFood>
        <feedBack></feedBack>
    </main>
  </div>
</template>

<script>
import contentFood from './content-food.vue'
import feedBack from './feed-back.vue'
import headerInHeader from './header-in-header.vue'
import imageContent from './image-content.vue'
import timeFood from './time-food.vue'
export default {
    components:{
        headerInHeader,
        imageContent,
        contentFood,
        timeFood,
        feedBack
    }
}
</script>

<style scoped>
.main-web{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
</style>