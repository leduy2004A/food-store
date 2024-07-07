<template v-slot:top>
  <v-dialog width="80%" v-model="dialog" persistent transition="dialog-top-transition">
    <!-- <template v-slot:activator="{ props }">
    <v-btn v-bind="props" text="Open Dialog"> </v-btn>
  </template> -->


      <v-card title="Hóa đơn bán hàng">
        <v-card-text>
            <slot>
                duy
            </slot>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close Dialog" @click="closeModal()"></v-btn>
        </v-card-actions>
      </v-card>
  
  </v-dialog>
</template>

<script>
export default {
    data() {
       return {
        dialog:true
       } 
    },
    methods:{
      closeModal(){
        this.dialog = false
        this.emitter.emit("toggle-modal",this.dialog)
      }
    }
}
</script>

<style></style>
