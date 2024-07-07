<template>
  <div class="header-in-header w-100">
    <div class="title-header d-flex" :style="styleCss">
      <p class="title">
        Tiếng việt
        <v-icon>mdi-menu-down</v-icon>
      </p>
      <div class="darkmode-change">
        <v-switch
          label="Darkmode"
          color="red"
          v-model="resultDarkmode"
          @click="openDarkMode(resultDarkmode)"
        ></v-switch>
      </div>
      <p class="slogan">
        <v-icon>mdi-airplane</v-icon>
        Giao hàng nhanh và toàn quốc
      </p>
    </div>
    <v-divider></v-divider>
    <content-header class="mt-2" :styleCss="styleCss"></content-header>
  </div>
</template>

<script>
import contentHeader from "./content-header.vue";
import { useTheme } from "vuetify";
export default {
  setup() {
    const theme = useTheme();
    return {
      theme,
    };
  },
  data() {
    return {
      resultDarkmode: false
    };
  },
  created() {
    this.resultDarkmode =localStorage.getItem("darkmode") === "true"?true:false
    if (this.resultDarkmode === true) {
      this.theme.global.name.value = "myCustomDarkTheme";
    }
    if(this.resultDarkmode === false){
      this.theme.global.name.value = "light";
    }
  },
  methods: {
    openDarkMode(duy) {
      if (duy == true) {
        console.log(duy);
        this.theme.global.name.value = "light";
        localStorage.setItem("darkmode", false);
        this.resultDarkmode =localStorage.getItem("darkmode") === "true"?true:false
      } else {
        this.theme.global.name.value = "myCustomDarkTheme";
        localStorage.setItem("darkmode", true);
        this.resultDarkmode =localStorage.getItem("darkmode") === "true"?true:false
      }
    },
  },
  components: {
    contentHeader,
  },
  props: {
    styleCss: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.title-header {
  justify-content: space-between;
  height: 51px;
  align-items: center;
}
.title {
  margin: 0;
  display: flex;
  height: 100%;
  align-items: center;
}
.slogan {
  margin: 0;
  display: flex;
  height: 100%;
  align-items: center;
}
.darkmode-change {
  margin: auto 0;
  display: flex;
  height: 100%;
  align-items: center;
}
</style>
