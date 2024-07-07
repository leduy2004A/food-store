<template>
  <div class="receiver">
    <h3>Thông tin khách hàng</h3>
    <v-row class="input-infor">
      <v-col cols="12">
        <div class="name-input">
          <label for="">Họ và Tên</label>
          <br />
          <input
            type="text"
            class="input-name-area input"
            required
            v-model="dataInput.RecipientsName"
          />
        </div>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <div class="tinhthanh">
              <label for="">Tỉnh - Thành</label>
              <br />
              <select
                name="chontinhthanh"
                id=""
                class="input"
                v-model="codeProvince"
                @change="changeTinhThanh(codeProvince)"
                required
              >
                <option value="duy">Chọn tỉnh thành</option>
                <option
                  :value="item"
                  v-for="(item, index) in dataProvince"
                  :key="index"
                >
                  {{ item.province_name }}
                </option>
              </select>
            </div>
          </v-col>
          <v-col>
            <div class="tinhthanh">
              <label for="">Quận - Huyện</label>
              <br />
              <select
                name="chon-quan-huyen"
                id=""
                class="input"
                v-model="codeDistrict"
                @change="changeQuanHuyen(codeDistrict)"
                required
              >
                <option value="duyhuyen">Chọn quận huyện</option>
                <option
                  :value="item"
                  v-for="(item, index) in dataDistrict"
                  :key="index"
                >
                  {{ item.district_name }}
                </option>
              </select>
            </div>
          </v-col>
          <v-col>
            <label for="">Phường - Xã</label>
            <br />
            <select
              name="chon-phuong-xa"
              id=""
              class="input"
              required
              v-model="dataInput.Ward"
            >
              <option value="1">Chọn phường xã</option>
              <option
                :value="item.ward_name"
                v-for="(item, index) in dataWard"
                :key="index"
              >
                {{ item.ward_name }}
              </option>
            </select>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <div class="address">
          <label for="">Địa chỉ</label>
          <br />
          <input
            type="text"
            class="address-input input"
            required
            v-model="dataInput.ReceiverAddress"
          />
        </div>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <div class="phone-number">
              <label for="">Điện thoại</label>
              <br />
              <input
                type="text"
                class="phone-input input"
                v-model="dataInput.Phone"
                required
              />
            </div>
          </v-col>
          <v-col cols="6">
            <div class="phone-number">
              <label for="">Email</label>
              <br />
              <input
                type="text"
                class="phone-input input"
                v-model="dataInput.Email"
                required
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <label for="">Ghi chú</label>
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="text-area"
          v-model="dataInput.Note"
        ></textarea>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { createOrder } from "../../apis/OrderFood";
import { ref } from "vue";
import { getProvince, getDistrict, getWard } from "../../apis/Province";
import validator from "validator";
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      // dataProvince:[],
      codeProvince: "duy",
      dataDistrict: [],
      dataWard: [],
      codeDistrict: "duyhuyen",
      dataInput: {
        RecipientsName: "",
        District: "",
        Ward: "",
        ReceiverAddress: "",
        Phone: "",
        Email: "",
        Province: "",
        Note: "Không có ghi chú",
      },
    };
  },
  setup() {
    const dataProvince = ref([]);
    getProvince().then((response) => {
      dataProvince.value = response.data.results;
    });

    return {
      dataProvince,
    };
  },
  watch: {
    async codeProvince(newValue) {
      console.log(newValue)
      const response = await getDistrict(newValue.province_id);
      this.dataDistrict = response.data.results;
    },
    async codeDistrict(newValue) {
      const response = await getWard(newValue.district_id);
      this.dataWard = response.data.results;
    },
  },
  methods: {
    validatorInfor() {
      return validator.isEmail("leduy@gmail.com");
    },
    changeTinhThanh(duy) {
      console.log(duy)
      this.dataInput.Province = duy.province_name;
    },
    changeQuanHuyen(duy) {
      this.dataInput.District = duy.district_name;
    },
    truyenThongTin() {
      this.$emit("getThongTin", this.dataInput);
    },
    getInfor() {
      let result;
      for (let i in this.dataInput) {
        if (validator.isEmpty(this.dataInput[i])) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });

            Toast.fire({
              background:"#FFC0CB",
              icon: "error",
              title: "Không được bỏ trống các trường",
            });
          result = false;
          return;
        }
      }
      if (
        !validator.isLength(this.dataInput.ReceiverAddress, {
          min: 4,
          max: 100,
        })
      ) {
        result = false;
          const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });

            Toast.fire({
              background:"#FFC0CB",
              icon: "error",
              title: "Địa chỉ cần chi tiết hơn",
            });
        return;
      }

      // let resultCheckMobile = validator.isMobilePhone(this.dataInput.Phone,["vi-VN"])
      if (
        validator.isMobilePhone(this.dataInput.Phone, ["vi-VN"]) &&
        validator.isEmail(this.dataInput.Email)
      ) {
        result = true;
      } else {
          const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });

            Toast.fire({
              background:"#FFC0CB",
              icon: "error",
              title: "Kiểm tra lại Email và số điện thoại",
            });
        result = false;
      }
      if (result) {
        let objectMethods = { PaymentMethods: 0 };
        let objectFinal = { ...objectMethods, ...this.dataInput };
        createOrder(objectFinal).then((item) => {
          if (item.response === undefined) {
            console.log(item);
              const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
            Toast.fire({
              background:"orange",
              icon: "success",
              title: "Mua thành công",
            });
            window.location.href="/complete"
          } else {
            console.log(item);
            const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });

            Toast.fire({
              background:"#FFC0CB",
              icon: "error",
              title: `${item.response.data.message}`,
            });
          }
        });
      } else {
          const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });

            Toast.fire({
              background:"#FFC0CB",
              icon: "error",
              title: "Kiểm tra lại các trường",
            });
      }
    },
  },
};
</script>

<style scoped>
.input {
  margin-top:15px;
  width: 100%;
  height: 45px;
  border: 1px solid grey;
  background: transparent none repeat scroll 0 0;
  padding-left: 20px;
  padding-right: 10px;
  outline-color: orange;
}
.text-area {
  margin-top:15px ;
  width: 100%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 10px;
  border: 1px solid grey;
}
label {
  margin-bottom: 10px;
}
.input-infor {
  margin-top: 10px;
}
</style>
