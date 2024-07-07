<template>
  <div class="bread-cum mt-2">
     <v-breadcrumbs
     color="corange"
      :items="items"
      divider="/"
    ></v-breadcrumbs>
  </div>
</template>

<script>
export default {
    props:{
        items:{
            type:Array
        }
    }
}
</script>

<style scoped>
.bread-cum{
    width: 100%;
    height: 94px;
    background-color: #F7F7F7;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>