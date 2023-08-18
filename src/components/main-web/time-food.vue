<template>
  <div class="time-food d-flex">
    <div class="time">
        <h1 class="text-center">ĐỒNG HỒ SINH HỌC</h1>
        <div class="time-update d-flex">
            <div class="day">
            <p class="number-time">{{days}}</p>
            <p>DAYS</p>
        </div>
        <div class="day">
            <p class="number-time">{{hours}}</p>
            <p>HOURS</p>
        </div>
        <div class="day">
            <p class="number-time">{{minutes}}</p>
            <p>MINUTES</p>
        </div>
        <div class="day">
            <p class="number-time">{{seconds}}</p>
            <p>SECS</p>
        </div>
        </div>
        <div class="btn">
            <v-btn text="Xem thêm" class="bg-green btn-time" flat="true" min-width="181" min-height="48" color="red"></v-btn>
        </div>
    </div>
    <div class="image-time">
    <img :src="dongho" alt="" class="image-time-main">
    </div>
  </div>
</template>

<script>
import dongho from '../../images/dongho.jpg'
export default {
    data(){
        return {
            dongho,
             hours: 0,
            minutes: 0,
            seconds: 0,
            days: 0
        }
    },
    methods:{
         setTime () {
      setInterval(() => {
        const date = new Date()
        this.hours = date.getHours()
        this.minutes = this.checkSingleDigit(date.getMinutes())
        this.seconds = this.checkSingleDigit(date.getSeconds())
      }, 1000)
      if(this.hours == 24)
      {
        this.days += 1;
      }
    },
    checkSingleDigit (digit) {
      return ('0' + digit).slice(-2)
    },
    },
    
      mounted () {
    this.setTime()
  }
}
</script>

<style scoped>
.time-food{
    justify-content: center;
    align-items: center;
}
p{
    font-size: 20px;
}
.number-time{
    font-size: 50px;
}
h1{
    font-size: 40px;
}
.day{
   margin: 40px 0;
}
.time{
    display: flex;
    flex-direction: column;
  text-align: center;
  flex: 1;
}
.time-update{
    justify-content: space-evenly;
}
.image-time-main{
    width: 70%;
}
.image-time{
    flex: 1;
    display: flex;
    justify-content: center;
}
/* .btn-time:hover{
    background-color: red;
} */
</style>