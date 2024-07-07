<template>
  <div class="food-chat">
    <div class="btn-chat" @click="openFormchat()">Chat với chúng tôi</div>
    <div class="form-chat" v-if="decidedOpen">
      <div class="message-main">
        <div class="contain-message">
          <div v-for="data in message" :key="data" :class="isSender === true ? 'sender' : 'receiver'">{{data}}</div>
        </div>
          
      <div class="form-send">
        <input
          type="text"
          class="input-area"
          @keyup.enter="sendMessage()"
          v-model="content"
        />
        <v-btn color="orange ml-2" @click="sendMessage()">Gửi</v-btn>
      </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import socket from "../chat-food/socket";
export default {
  data() {
    return {
      decidedOpen: false,
      usernameAlreadySelected: false,
      content: "",
      selectedUser: {
        username: "651933f0f194edec34d8e099",
        messages: [],
        user_id: "",
      },
      users: [{}],
      message:[],
      messageReceiver:[],
      isSender:true
    };
  },
  created() {
    // const profile = JSON.parse(localStorage.getItem("user_storage"));
    // const user_id = profile.user_id;
    // this.usernameAlreadySelected = true;
    // socket.auth = { user_id };
    // socket.connect();
    this.connectSocket();
    console.log("Chào nè");
    socket.on("receiver private message", ({ content, from }) => {
      this.message.push(content)
      this.isSender = false
      console.log(typeof(content)), console.log(from + "fuy đây");
    });
  },

  methods: {
    sendMessage() {
      if (this.selectedUser) {
        socket.emit("private message", {
          content: this.content,
          to: this.selectedUser.user_id ,
          
        });
        this.message.push(this.content)
          this.isSender = true
      }
      
      this.content = ""
      // socket.on("receiver private message", ({ content, from }) => {
      //   console.log(content + "Duy nè"), console.log(from + "fuy đây");
      // });
    },
    openFormchat() {
      let result = this.decidedOpen == true ? false : true;
      this.decidedOpen = result;
      const profileUser = JSON.parse(localStorage.getItem("user_storage"))
      console.log(profileUser)
      if(profileUser.Role === "User")
      {
        this.selectedUser.user_id = "651004cc16b04b413bbbda1b"
      }
      if(profileUser.Role === "Admin"){
        this.selectedUser.user_id = "651933f0f194edec34d8e099"
      }
      console.log(this.selectedUser.user_id )
    },
    connectSocket(){
      //  const profile = JSON.parse(localStorage.getItem("user_storage"));
    // const user_id = profile.user_id;
    // this.usernameAlreadySelected = true;
    // socket.auth = { user_id };
    // socket.connect();
    // return ()=>{
    //   socket.disconnect();
    // }
    }
  },
};
</script>

<style scoped>
.food-chat {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.btn-chat {
  color: white;
  padding: 15px 15px;
  background-color: orange;
  border-radius: 10px;
  cursor: pointer;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-chat {
  border-radius: 10px;
  margin-top: 10px;
  height: 500px;
  width: 400px;
  box-shadow: 1px 1px 19px 5px rgba(0, 0, 0, 0.78);
  -webkit-box-shadow: 1px 1px 19px 5px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: 1px 1px 19px 5px rgba(0, 0, 0, 0.78);
}
.input-area {
  border: 1px solid;
  outline-color: orange;
  padding: 0 10px;
}
.form-send {
  display: flex;
  justify-content: center;
}
.message-main{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 20px 0;
}
.sender{
  display: inline-block;
  background-color: orange;
  color: white;
  padding: 10px 10px;
  border-radius: 10px;
  margin: 5px 0;
  text-align: right;
  margin-left: auto;
}
.receiver{
  display: inline-block;
  background-color: black;
  color: white;
  padding: 10px 10px;
  border-radius: 10px;
  margin: 5px 0;
  margin-right: auto;
}
.contain-message{
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
