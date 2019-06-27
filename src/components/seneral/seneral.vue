<template >
  <div class="seneral">
    <div class="logo"><img src="./listen-img/Signal Circle copy@2x.png" alt=""></div>
    <div class="head">
      <span></span>
      听歌识曲
      <span></span>
    </div>
    <div class="listen">
      <p>听歌识曲</p>
      <p>哼唱识曲</p>
    </div>
    <div class="ani">
      <div class="two">
        <div class="one" @touchstart="fn()"></div>
      </div>
    </div>
    <div class="chose">
      <p>人声哼唱请用哼唱识别({{num}}s)</p>
    </div>
    <div class="click"  @touchstart="f1()">
        点击停止
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num:20,
      timer:'',
      element:'',
    };
  },

  methods: { 
fn(){
  
  this.that=this
  // 动画
  this.element=this.$el.children[3].children[0];
  
if(this.timer==''){
    this.timer= setInterval(()=>{
    this.num--;
    this.num=this.num;
    if(this.num == 0){
      clearInterval(this.timer)
      this.num=20;
    }
  },1000)
}},

f1(){
  this.that=this;
  clearInterval(this.timer);
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
  font-size: 0.36rem;
  color: #ffffff;
  background: url("./listen-img/bcd-color@2x.png") 0 0 repeat;
  background-size: 100%;
  .logo{
    margin-top: .08rem;
    img{
      width:100%;
    }
  }
  .head {
    box-sizing: border-box;
    margin-top:.38rem;
    width:100%;
    padding:0 .24rem 0 .23rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
      span:nth-child(1) {
    display: inline-block;
    height: 0.44rem;
    width: 0.44rem;
    background: url("./listen-img/icon-1@2x.png") center center no-repeat;
    background-size: cover;
  }
  span:nth-child(2) {
    display: inline-block;
    height: 0.44rem;
    width: 0.44rem;
    background: url("./listen-img/icon-2@2x.png") center center no-repeat;
    background-size: cover;
  }
  }
  .listen {
    margin-top: .42rem;
    padding: 0 1.36rem;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 0.27rem;
      font-weight: 800;
    }
    p:nth-child(1) {
      color: #ff3399;
      padding-bottom: 0.46rem;
      border-bottom: 0.04rem solid #ff3399;
    }
  }
  .ani {
      margin-top:.88rem;
     margin-left:1rem;
    width: 5rem;
    height: 5rem;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    padding: 0.9rem;
    box-sizing: border-box;
    z-index: 0;
    .one,
    .two {
      border-radius: 50%;
    }
    .two {
      height: 100%;
      background: rgba(255, 255, 255, 0.7);
      z-index: 1;
      padding: 0.68rem;
      box-sizing: border-box;
    }
   
    .one {
      height: 100%;
       border-radius: 50%;
      background: url("./listen-img/LOGO@2x.png") center center no-repeat;
      z-index: 2;
    }
  }
  .chose {
    margin-top:1rem;
    padding: 0  0rem 0 1.69rem;
    font-size: 0.34rem;
    font-family: PingFang-SC-Heavy;
    font-weight: 800;
    color: rgba(255, 255, 255, 1);
    p{
        margin:0;
    }
  }
  .click{
      margin-top:.3rem;
      text-indent: 2.91rem;
  }
}
</style>
