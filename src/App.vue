<template>
  <v-app>
   
      
    
    <v-main>
      <mainWeb/>
    </v-main>
  </v-app>
</template>

<script>
import mainWeb from './components/main-web/main-web.vue'
export default {
  name: 'App',

  components: {
    mainWeb
  },

  data: () => ({
    //
  }),
}
</script>
