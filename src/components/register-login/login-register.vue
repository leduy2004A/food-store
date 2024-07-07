<template>
  <div class="login-register">
    <a-tabs size="large" centered class="custom-color" tabBarStyle="color:red;">
      <a-tab-pane key="1" tab="Login">
        <div class="form-login">
          <a-form
            :model="formState"
            name="basic"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 14 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-form-item
              label="Email"
              name="email"
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input v-model:value="formState.email" class="input-size" />
            </a-form-item>

            <a-form-item
              label="Password"
              name="password"
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password
                v-model:value="formState.password"
                class="input-size"
              />
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 5, span: 10 }">
              <a-button
                type="primary"
                html-type="submit"
                @click="Login(formState)"
                >Submit</a-button
              >
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 5, span: 10 }">
              <googleOauthVue></googleOauthVue>
            </a-form-item>
          </a-form>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Register">
        <div class="form-login">
          <a-form
            :model="formRegister"
            name="basic"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 14 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-form-item
              label="Họ Tên"
              name="name"
              :rules="[{ required: true, message: 'Vui lòng điền tên' }]"
            >
              <a-input v-model:value="formRegister.name" class="input-size" />
            </a-form-item>
            <a-form-item
              label="Email"
              name="email"
              :rules="[{ required: true, message: 'Vui lòng điền email' }]"
            >
              <a-input v-model:value="formRegister.email" class="input-size" />
            </a-form-item>

            <a-form-item
              label="Password"
              name="password"
              :rules="[
                {
                  required: true,
                  message:
                    'Mật khẩu phải chứa ít nhất một kí tự in hoa và một kí tự đặc biệt',
                },
              ]"
            >
              <a-input-password
                v-model:value="formRegister.password"
                class="input-size"
              />
            </a-form-item>
            <a-form-item
              label="Confirm Password"
              name="confirm_password"
              :rules="[
                { required: true, message: 'Vui lòng điền lại mật khẩu' },
              ]"
            >
              <a-input-password
                v-model:value="formRegister.confirm_password"
                class="input-size"
              />
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 5, span: 14 }">
              <a-button
                type="primary"
                html-type="submit"
                @click="Register(formRegister)"
                >Đăng kí</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { reactive } from "vue";
import { register, login } from "../../apis/login";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";
import googleOauthVue from "./google-oauth.vue";
export default {
  components: {
    googleOauthVue,
  },
  data() {
    return {
      formState: reactive({
        email: "",
        password: "",
        remember: true,
      }),
      formRegister: reactive({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      }),
    };
  },
  methods: {
    onFinish(values) {
      console.log("Success:", values);
    },
    onFinishFailed(errorInfo) {
      console.log("Failed:", errorInfo);
    },
    async Login(payload) {
      const data = await login(payload);
      console.log(data);
      const { status } = data;
      if (status !== 200) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          background: "#FF9999 ",
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "error",
          title: "Đăng nhập thất bại",
        });
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          background: "#CCFF99  ",
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          title: "Đăng nhập thành công",
        });
        const { access_token, refresh_token } = data.data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        const verify = jwt_decode(access_token);
        if (verify && verify.Role === "User") {
          const jsonType = JSON.stringify(verify);
          localStorage.setItem("user_storage", jsonType);

          let loader = this.$loading.show({
            // Optional parameters
            container: this.fullPage ? null : this.$refs.formContainer,
            lockScroll: true,
            canCancel: true,
            loader: "dots",
            color: "blue",
            onCancel: this.onCancel,
          });
          // simulate AJAX
          setTimeout(() => {
            this.$router.push("/mainWeb");
            loader.hide();
          }, 2000);
        }
      }
    },
    async Register(payload) {
      const data = await register(payload);
      const { status } = data;
      if (status !== 200) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          background: "#FF9999 ",
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "error",
          title: "Đăng kí thất bại",
        });
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          background: "#CCFF99  ",
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          title: "Đăng kí thành công",
        });
        const { access_token, refresh_token } = data.data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        const verify = jwt_decode(access_token);
        if (verify && verify.Role === "User") {
          const jsonType = JSON.stringify(verify);
          localStorage.setItem("user_storage", jsonType);

          let loader = this.$loading.show({
            // Optional parameters
            container: this.fullPage ? null : this.$refs.formContainer,
            lockScroll: true,
            canCancel: true,
            loader: "dots",
            color: "blue",
            onCancel: this.onCancel,
          });
          // simulate AJAX
          setTimeout(() => {
            this.$router.push("/mainWeb");
            loader.hide();
          }, 2000);
        }
      }
    },
  },
};
</script>

<style scoped>
.input-size {
  width: 300px;
}
.form-login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  width: 600px;
  padding: 20px 0;
  border-radius: 10px;
  box-shadow: 2px 0px 10px 5px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: 2px 0px 10px 5px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 2px 0px 10px 5px rgba(0, 0, 0, 0.29);
}
</style>
