<template>
  <div class="nav-shop">
    <p>Tìm Kiếm Sản Phẩm</p>
    <div class="input mt-7">
      <input type="text" class="text-input" placeholder="Tìm kiếm" v-model="textSearch" @keyup.enter="findData(textSearch)"/>
      <!-- <font-awesome-icon :icon="['fass', 'circle-xmark']" spin size="2xl" style="color: #c1c3c8;" class="pb-4"/> -->
    </div>
   
    <div class="danhmuc mt-10">
      <p>Theo Danh Mục</p>
      <v-checkbox
        label="Tất cả danh mục"
        color="orange"
        class="cach"
      ></v-checkbox>
      <v-checkbox label="Món chay mặn" color="orange" class="cach" value="duy"></v-checkbox>
      <v-checkbox
        label="Hàng chay cấp đông"
        color="orange"
        class="cach"
      ></v-checkbox>
      <v-checkbox label="Món nộm" color="orange" class="cach" value="duy"></v-checkbox>
      <v-checkbox label="Món cơm" color="orange" class="cach"></v-checkbox>
    </div>
    <div class="nhan mt-10">
      <p class="mb-5">Nhãn</p>
      <p
        :class="['nhan-text', 'pointer', {maucam:item.choose}]"
        v-for="item in label"
        :key="item"
        @click="chooseItem"
      >
        {{ item.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: [
        { text: "Món chay mặn", choose: false },
        { text: "Hàng chay cấp đông", choose: false },
        { text: "Món Nộm", choose: false },
        { text: "Món Cơm", choose:false },
      ],
      click: false,
      activeColor:false,
      active:false,
      textSearch:""
    };
  },
  methods: {
    findData(textSearch){
      this.emitter.emit("dataSearch",textSearch)
    },
    // chooseItem(item) {
    //   item.choose =true
    // },
    chooseItem(event)
    {

        // if(event.target.className.includes(" maucam"))
        // {
        //     this.activeColor = true
        // }
        // if(this.activeColor === true)
        // {
            
        // }
       event.target.className+= " maucam"
      if(event.target.className.includes(" maucam"))
      {
        event.target.classList.remove(" maucam")
      }
      // 
    }
  },
};
</script>

<style scoped>
.text-input {
  border: 1px solid #e6e6e6;
  padding: 0 10px;
  height: 100%;
  outline-color: orange;
}
.input {
  height: 41px;
}
.nav-shop {
  width: 20%;
}
.cach {
  margin-bottom: -30px;
}
.v-input__details {
  display: none;
}
.nhan-text {
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: inline-block; */
  height: 30px;
  background-color: #e6e6e6;
  border-radius: 10px;
  padding: 0 10px;
  color: black;
  margin-bottom: 10px;
  margin-right: 10px;
}
.nhan-text:hover {
  background-color: orange;
  color: white;
  transition: all 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.pointer {
  cursor: pointer;
}
.maucam {
  background-color: orange;
}
</style>
