<template>
  <div id="myModal" class="modal" @click.self="overlayOff()">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="header-modal">
        <v-icon @click="closeModal()" class="close">mdi-close</v-icon>
    </div>
    <v-divider :thickness="2"></v-divider>
    <div class="main-modal">
        <detailFoodModal></detailFoodModal>
    </div>
  </div>
  </div>
</template>

<script>
import detailFoodModal from './detail-food-modal.vue'
export default {
  props:{
    openModal:{
      type:Boolean
    }
  },
  data(){
    return {
      isCloseModal:false,
      
    }
  },
    components:{
        detailFoodModal
    },
    methods:{
     closeModal(){
      this.$emit("offModal")
     },
     overlayOff(){
      
      this.$emit("offModal")
     }

    }
}
</script>

<style scoped>
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 10000; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.close:hover{
  color: orange;
}
/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  min-height: 70%;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 60%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}
.header-modal{
    width: 100%;
    display: flex;
    height: 56px;
    justify-content: flex-end;
    align-items: center;
    padding: 0 12px;
}
</style>