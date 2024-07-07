<template>
  <v-app>
    <v-main class="duytest">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200;400&family=Poppins&display=swap');
.duytest{
font-family: 'Be Vietnam Pro', sans-serif;
}
</style>