<template>
  <div class="table-love">
    <h3 class="title-love">{{ title }}</h3>
    <v-table>
      <thead>
        <tr>
          <th class="text-center" v-for="item in headerTable" :key="item">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in contentTable" :key="i">
          <td class="text-center">
            <img :src="i.image" alt="" class="image-food" />
          </td>
          <td class="text-center">{{ i.food_name }}</td>
          <td class="text-center">{{ i.price }}</td>
          <td class="text-center"><v-btn variant="tonal"> Mua Hàng </v-btn></td>
          <td class="text-center">
            <v-icon class="delete-love" @click="deleteLoveFood(i._id)"
              >mdi-alpha-x</v-icon
            >
          </td>
        </tr>
      </tbody>
    </v-table>
    <div class="continue-product">
      <router-link to="/mainShop"
        ><p class="continue frame">Tiếp tục mua hàng</p></router-link
      >

      <p class="remove frame">Xóa hết</p>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  props: {
    headerTable: {
      type: Array,
    },
    contentTable: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
  methods: {
    async deleteLoveFood(food_id) {
      const data = await this.$store.dispatch(
        "LoveFood/deleteFoodLoveActions",
        food_id
      );
      if (data.status === 200) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          iconColor: "red",
          background: "#FADADD",
          title: "Xoá khỏi danh sách yêu thích thành công",
        });
      }
      else{
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "error",
          iconColor: "orange",
          background: "#FADADD",
          title: "Xoá khỏi danh sách yêu thích thất bại",
        });
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&family=Poppins&display=swap");
.title-love {
  font-family: "Be Vietnam Pro", sans-serif;
  color: #000000;
  font-weight: 400;
}
.image-food {
  width: 150px;
  margin: 5px 0;
  height: 90px;
}
.table-love {
  width: 80%;
  margin: 0 auto;
}
.continue-product {
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
}
.frame {
  width: 200px;
  color: #363f4d;
  background-color: #f2f2f2;
  text-align: center;
  border-radius: 20px;
  padding: 10px 0;
  cursor: pointer;
}
.frame:hover {
  background-color: orange;
  color: white;
  transition: all 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.delete-love {
  font-size: 35px;
}
.delete-love:hover {
  background-color: orange;
  transition: all 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
</style>
