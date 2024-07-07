<template>
  <div class="content-header">
    <div class="content-header d-flex align-center" :style="styleCss">
      <img :src="logo" alt="" class="logo" />
      <ul class="title-header d-flex">
        <li class="list-text">
          <router-link to="/mainWeb" class="text-header text-cwhite" active-class="red"
            >Trang chủ</router-link
          >
          <!-- <a href="/mainWeb" class="text-header">Trang chủ</a> -->
        </li>
        <li class="list-text"><a href="" class="text-header text-cwhite">Giới thiệu</a></li>
        <li class="list-text">
          <router-link to="/mainShop" class="text-header text-cwhite">Sản phẩm</router-link>
          <!-- <a href="/mainShop" class="text-header">Sản phẩm</a> -->
        </li>
        <li class="list-text"><a href="" class="text-header text-cwhite">Tin tức</a></li>
        <li class="list-text"><a href="" class="text-header text-cwhite">Liên hệ</a></li>
      </ul>
      <div class="option-header d-flex">
        <v-icon class="icon-header" color="cwhite"
          >mdi-magnify</v-icon
        >

        <a-dropdown :placement="bottomRight" arrow trigger="click">
          <v-icon class="icon-header" color="cwhite">mdi-account-circle-outline</v-icon>
          <template #overlay>
            <a-menu>
              <div class="requireLogin" v-if="checkLocalUser()">
                <a-menu-item>
                  <router-link to="/login-register">Đăng Nhập</router-link>
                </a-menu-item>
              </div>
              <div class="loginSuccess" v-else>
                <a-menu-item>
                  <a href="javascript:;">Tài khoản của tôi</a>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="order-history">Lịch sử đơn hàng</router-link>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;" @click="logout()">Đăng xuất</a>
                </a-menu-item>
              </div>
            </a-menu>
          </template>
        </a-dropdown>

        <!-- <v-icon class="icon-header">mdi-account-circle-outline</v-icon> -->

        <v-badge class="icon-header" :content="numberLove">
          <router-link to="/love-food"
            ><v-icon class="icon-color text-cwhite text-black">mdi-heart-outline</v-icon></router-link
          >
        </v-badge>
        <v-badge class="icon-header" :content="numberCart">
          <router-link to="/cart">
            <v-icon class="icon-color text-cwhite text-black"
              >mdi-bag-personal-outline</v-icon
            ></router-link
          >
        </v-badge>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../images/GSlogo.png";
import { createNamespacedHelpers } from "vuex";
const { mapState: mapStateLoveFood } = createNamespacedHelpers("LoveFood");
const { mapState: mapStateCartFood } = createNamespacedHelpers("CartFood");
import { logout } from "../../apis/login";
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
      logo,
      checkUser: ""
    };
  },
  props: {
    styleCss: {
      type: Object,
    },
  },
  created() {
    this.$store.dispatch("LoveFood/getDataFoodLoveActions").then();
    this.$store.dispatch("CartFood/showCartActions").then();
    this.colorIcon = localStorage.getItem("darkmode") === "true"?"cwhite":"black"
  },
  computed: {
    ...mapStateLoveFood({
      numberLove: (state) => state.numberLove,
    }),
    ...mapStateCartFood({
      numberCart: (state) => state.numberCart,
    }),
  },
  methods: {
    checkLocalUser() {
      const dataUser = localStorage.getItem("user_storage");
      if (dataUser) {
        return false;
      }
      return true;
    },
    async logout() {
      const refresh_token = localStorage.getItem("refresh_token");
      await logout(refresh_token);
      localStorage.clear();
      location.reload();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100&family=Poppins&display=swap");

.logo {
  width: 200px;
}
ul {
  list-style: none;
  align-items: center;
}
li {
  margin-right: 30px;
}
.text-header {
  text-decoration: none;
  color: black;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 400;
}
.content-header {
  width: 100%;
  justify-content: space-between;
  font-weight: bold;
  font-size: 15px;
}
.icon-header {
  margin-right: 20px;
}
.header {
  position: unset;
}
.text-header:hover {
  color: #ffa500 !important
}
.text-cwhite:hover{
  color: orange !important;
}

</style>
