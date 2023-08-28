<template>
  <div class="content-shop">
    <v-container>
        <v-row>
            <v-col cols="4" v-for="item in 9" :key="item">
                <v-sheet>
                    <productShop @clickOpen="openModal()"></productShop>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import productShop from './product-shop.vue'
export default {
    components:{
        productShop
    },
    methods:{
        openModal(){
            this.$emit("clickOpenModal");
        }
    }
}
</script>

<style scoped>

</style>