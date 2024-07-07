<template>
  <div class="main-web">
    <header>
      <headerStore v-if="quyetdinh" :key="quyetdinh"></headerStore>
    </header>
    <headerInHeader />
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
import contentFood from "./content-food.vue";
import feedBack from "./feed-back.vue";
import footerWeb from "./footer-web.vue";
import headerInHeader from "./header-in-header.vue";
import imageContent from "./image-content.vue";
import registerNotice from "./register-notice.vue";
import timeFood from "./time-food.vue";
import headerStore from "./header-store.vue";
import jwt_decode from "jwt-decode";
export default {
  data() {
    return {
      quyetdinh: false,
    };
  },
  components: {
    headerInHeader,
    imageContent,
    contentFood,
    timeFood,
    feedBack,
    registerNotice,
    footerWeb,
    headerStore,
  },
  created() {
const token = this.$route.query
  if(Object.keys(token).length !== 0){
    localStorage.setItem('access_token',token.access_token)
    localStorage.setItem('refresh_token',token.refresh_token)
    const verify = jwt_decode(token.access_token)
      if (verify && verify.Role === "User") {
          const jsonType = JSON.stringify(verify);
          localStorage.setItem("user_storage", jsonType);
          this.$router.push('/mainWeb')
        }
  }
  else{
    return false
  }
  },
}

</script>

<style scoped>
.main-web {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;
}
.dangki {
  margin-top: 100px;
}
.fb {
  margin-top: 90px;
}
footer {
  margin-top: 100px;
}
</style>
