<template >
  <div class="seneral">
    <div class="logo">
      <img src="./listen-img/Signal Circle copy@2x.png" alt>
    </div>
    <div class="head">
      <router-link to="/home"><span></span></router-link>
      
      听歌识曲
      <span></span>
    </div>
    <div class="listen">
      <p>听歌识曲</p>
      <p>哼唱识曲</p>
    </div>
    <div class="ani" :class={Ani:bol} >
      <div class="four"></div>
      <div class="three" ></div>
      <div class="two"  ></div>
      <div class="one" @touchstart="fn()"></div>
    </div>
    <div class="chose">
      <p>人声哼唱请用哼唱识别({{num}}s)</p>
    </div>
    <div class="click" @touchstart="f1()">点击停止</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 20,
      timer: "",
      element: "",
      bol: ""
    };
  },
  components:{
    
  },

  methods: {
    fn() {
      this.that = this;
      if (this.timer == "") {
        this.timer = setInterval(() => {
          this.bol = "Ani";
          this.num--;
          this.num = this.num;
          if (this.num == 0) {
            clearInterval(this.timer);
             this.bol = "";
            this.num = 20;
            this.timer="";
          }
        }, 1000);
      }
    },

    f1() {
      this.that = this;
      clearInterval(this.timer);
      this.bol="";
      this.timer=""
    }
  }
};
</script >
<style scoped lang='less'>
.seneral {
  overflow: hidden;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-size: 0.18rem;
  color: #ffffff;
  background: url("./listen-img/bcd-color@2x.png") 0 0 repeat;
  background-size: 100%;
  .logo{
    margin-top: .04rem;
    img{
      width:100%;
    }
  }
  .head {
    box-sizing: border-box;
    margin-top:.19rem;
    width:100%;
    padding:0 .12rem 0 .11rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
      span:nth-child(1) {
    display: inline-block;
    height: 0.22rem;
    width: 0.22rem;
    background: url("./listen-img/icon-1@2x.png") center center no-repeat;
    background-size: cover;
  }
  span:nth-child(2) {
    display: inline-block;
    height: 0.22rem;
    width: 0.22rem;
    background: url("./listen-img/icon-2@2x.png") center center no-repeat;
    background-size: cover;
  }
  }
  .listen {
    margin-top: .21rem;
    padding: 0 0.68rem;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 0.13rem;
      font-weight: 800;
    }
    p:nth-child(1) {
      color: #ff3399;
      padding-bottom: 0.23rem;
      border-bottom: 0.02rem solid #ff3399;
    }
  }
   .Ani{
      .two{
        animation: cartoon 1s  ease-out  ;
         animation-iteration-count: infinite;
      }
      .three{
         animation: cartoon 1s  ease-out  ;  
         animation-iteration-count: infinite;
        //  animation-delay:1s;
      }
      .four{
         animation: cartoon 1s  ease-out  ;  
         animation-iteration-count: infinite;
        //  animation-delay:1s;
      }
     
    }
  .ani {
    position: relative;
    margin-top:.44rem;
    margin-left:.55rem;
    width: 2.5rem;
    height: 2.5rem;
    // background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    padding: 0.45rem;
    box-sizing: border-box;

    // *-***************添加动画********************
   .four{
      position: absolute;;
      left: -0.25rem;
      top:-0.25rem;
      height:3rem;
      width:3rem;
     background: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
       
    }
    .three{
      position: absolute;;
      left: -0.01rem;
      top:-0.01rem;
      height:2.5rem;
      width:2.5rem;
       background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
       
    }
    .two {
      position: absolute;;
      left: 0.25rem;
      top:0.25rem;
      height:2rem;
      width:2rem;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
     }
     @keyframes cartoon{
         0% {
            transform: scale(0);
            -webkit-transform: scale(0);
            opacity: 0.0;
          }
          25% {
            transform: scale(0.5);
            -webkit-transform: scale(0.5);
            opacity: 0.3;
          }
          50% {
            transform: scale(0.9);
            -webkit-transform: scale(0.9);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            -webkit-transform: scale(1);
            opacity: 0;
          }

     }
    .one {
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      height:0.89rem;
      width:0.89rem;
      border-radius: 50%;
      background: url("./listen-img/LOGO@2x.png") center center no-repeat;
      background-size: 100%;
      z-index: 2;
    }
    
  }
  .chose {
    margin-top:.5rem;
    padding: 0  0rem 0 0.84rem;
    font-size: 0.17rem;
    font-family: PingFang-SC-Heavy;
    font-weight: 800;
    color: rgba(255, 255, 255, 1);
    p{
        margin:0;
    }
  }
  .click{
      margin-top:.15rem;
    text-align: center;
  }
}

</style>
