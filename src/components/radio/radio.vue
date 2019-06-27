<template>
  <div class="redio">
    <div class="zhuang"><img src="./img/Signal Circle copy@2x.png" alt=""></div>
    <div class="top">
    <router-link to="/home">  <span></span> </router-link>
      电台
     <router-link to="/seek"> <span></span> </router-link>
    </div>
    <div class="main">
      <p class="myredio">
        <span>
          音乐电台
          <i></i>
        </span>
        <span>我的电台</span>
      </p>
      <p class="music-redio">音乐电台</p>
      <ul>
        <li>
          热门
          <i></i>
        </li>
        <li>凌晨</li>
        <li>主题</li>
        <li>场景</li>
        <li>语种</li>
        <li>人群</li>
        <li>曲风</li>
        <li>FM</li>
      </ul>
    <div class="main-img" :class="{move:show}" @touchend="fn()">
      <div id="left">
        <ol>
        <router-link to="/play">
          <li>
          <p>
              <span></span>
              <span>2.1万</span>
              <span>放松</span>
            </p>
          </li>
          <li>
            <p>
              <span></span>
              <span>3.4万</span>
              <span>私人</span>
            </p>
          </li>
        </router-link>
        </ol>
      </div>
      <div class="center">
          <ol>
            <router-link to="/play">
          <li>
            <p>
              <span></span>
              <span>1.3万</span>
              <span>安静</span>
            </p>
          </li>
          <li>
            <p>
              <span></span>
              <span>1.6万</span>
              <span>工作</span>
            </p>
          </li>
          <li>
            <p>
              <span></span>
              <span>1.7万</span>
              <span>路上</span>
            </p>
          </li>
        </router-link>
        </ol>
      </div>
   
   <div class="run"  >
        <div class="right">
            <ol>
              <router-link to="/play">
            <li>
              <p>
                <span></span>
                <span>1.3万</span>
                <span>安静</span>
              </p>
            </li>
            <li>
              <p>
                <span></span>
                <span>1.6万</span>
                <span>工作</span>
              </p>
            </li>
            <li>
              <p>
                <span></span>
                <span>1.7万</span>
                <span>路上</span>
              </p>
            </li>
            </router-link>
          </ol>
        </div>
        <div class="right2">
            <ol>
                <router-link to="/play">
            <li>
              <p>
                <span></span>
                <span>1.3万</span>
                <span>安静</span>
              </p>
            </li>
            <li>
              <p>
                <span></span>
                <span>1.6万</span>
                <span>工作</span>
              </p>
            </li>
            <li>
              <p>
                <span></span>
                <span>1.7万</span>
                <span>路上</span>
              </p>
            </li>
            </router-link>
          </ol>
      
        </div>
    </div>
    </div>
      <!-- 我的电台 -->
      <div class="my-readio">
          <p>我的电台</p>
          <div>
              <div class="mr-img">
                  <p>
                      <span>HEY!MISS</span>
                  </p>
                  <p>
                      <span>原生派</span>
                  </p>
              </div>
          </div>
      </div>
      <div class="my-readio_">
          <p>音乐电台</p>
          <div>
              <div class="mr-img_">
                  <p>
                      <span>HEY!MISS</span>
                  </p>
                  <p>
                      <span>原生派</span>
                  </p>
              </div>
          </div>
      </div>
    </div>
    <Group></Group>
  </div>
</template>

<script>
import Group from './../group-img/group-img'
export default {
  data() {
    return {
      el:'',
      show:false
    };
  },
  components:{
    Group,
  },
  methods: {
    fn(event){
      if(this.show==false){
        this.show =true
      }else{
        this.show =false
      }
   }
  }
};
</script >

<style scoped lang='less'>
.redio {
 
  overflow-x: hidden;
  font-size: 0.09rem;
  height: 100%;
  background: url("./img/bcd-color@2x.png") repeat;
  background-size: 100%;
  text-align: center;
  .zhuang {
    height:.2rem;
    img{
      height: .2rem;
      width:100%;
    }
  }
  .top {
    font-size: 0.18rem;
    color: rgb(255, 255, 255);
    padding: .05rem .16rem .1rem .16rem ;
    overflow: hidden;
    a:nth-child(1){

      span:nth-child(1) {
        display: inline-block;
        width: 0.22rem;
        height: 0.22rem;
        float: left;
        background: url("./img/radio-1.png") no-repeat;
        background-size: 100%;
      }
    }
     a:nth-child(2){
      span:nth-child(1) {
      display: inline-block;
      width: 0.18rem;
      height: 0.22rem;
      float: right;
      background: url("./img/radio-2.png") no-repeat;
      background-size: 100%;
    }
      }
  }
  .main {
    p{
      margin:0;
    }
    background: white;
    .myredio {
      // margin-top: 0.32rem;
      // padding: .045rem 0.14rem 0.22rem 0.15rem;
      padding: .12rem 0.14rem 0rem 0.15rem;
      display: flex;
      justify-content: space-between;
      span:nth-child(1) {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgb(236, 50, 165);
        font-size: 0.16rem;
        margin-bottom: 0.15rem;
        i {
          background: url("./img/radio-4.png") no-repeat;
          background-size: 100%;
          display: inline-block;
          margin-top:.05rem;
          width: 0.4rem;
          height: 0.02rem;
        }
      }
      span:nth-child(2) {
        color: rgb(0, 0, 0);
        font-size: 0.16rem;
      }
    }
    .music-redio {
      text-align: left;
      font-size: 0.16rem;
      padding-left: 0.16rem;
      color: rgb(0, 0, 0);
      margin-bottom: 0.16rem;
    }
    ul {
      list-style: none;
      font-size: 0;
      padding-left: 0;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.27rem;
      li {
        font-size: 0.12rem;
        color: rgb(102, 102, 102);
      }
      li:nth-child(1) {
        color: rgb(236, 50, 165);
        padding-left: 0.16rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        i {
          margin-top: 0.06rem;
          display: inline-block;
          width: 0.16rem;
          height: 0.02rem;
          background: url("./img/radio-4.png") no-repeat;
          background-size: 100%;
        }
      }
      li:last-child {
        margin-right: 0.16rem;
      }
    }
     .move{
          position:relative;
          animation: sport 1s linear forwards;     
      }
        @keyframes sport {
        0%{
          transform: translateX(0rem);
        }
        100%{
          transform: translateX(-2rem);
          }
        }
    .main-img {
        height:3.5rem;     
        display:flex;
        ol{
              list-style: none;
              font-size: 0;
              padding-left: .16rem;
          li {
            width: 100%;
            position: relative;
            margin-right: 0;
            padding-left: 0;
            p {
              margin: 0;
              padding: 0;
              width: 100%;
              position: absolute;
              bottom: 0;
              display: flex;
              align-items: center;
              justify-content: space-between;
              background: rgba(250, 203, 245, 0.5);
              padding: 0.06rem 0.15rem;
              box-sizing: border-box;
              border-radius: 0.1rem;
              color:rgb(51,51,51);
              span:nth-child(1) {
                width: 0.13rem;
                height: 0.13rem;
                background: url("./img/radio-16.png") 0 0 no-repeat;
                background-size: 100%;
              }
              span:nth-child(2){
                  font-size: .1rem;
              }
              span:nth-child(3){
                  color:rgb(51,51,51);
                  font-size: .14rem;
              }
            
            }
          }  
        
        }
      #left {
        ol {
          li:nth-child(1) {
            padding-bottom:.01rem;
            width: 1.2rem;
            height: 2.19rem;
            background: url("./img/radio-5.png") no-repeat;
            background-size: 100%;
            margin-bottom:.09rem;
            p{
              position:absolute;
              bottom:.05rem;
              left:0rem;
            }
          }
          li:nth-child(2) {
            width: 1.2rem;
            height: 1rem;
            background: url("./img/radio-10.png") no-repeat;
            background-size: 100%;
          }
        }
      }
      .center{
          margin-right:.2rem;
          li:nth-child(1){
            width: 1.2rem;
            height: 1rem;
            background: url("./img/radio-6.png") no-repeat;
            background-size: 100%;
            margin-bottom:.16rem;
          }
          li:nth-child(2){
            width: 1.2rem;
            height: 1rem;
            background: url("./img/radio-8.png") no-repeat;
            background-size: 100%;
            margin-bottom:.16rem;
          }
          li:nth-child(3){
            width: 1.2rem;
            height: 1rem;
            background: url("./img/radio-11.png") no-repeat;
            background-size: 100%;
            margin-bottom:.16rem;
          }
      }
    
      }
     
      .run{
            display:flex;
          .right{
            ol{
              padding-left:.025 rem;
            }
              li:nth-child(1){
                width: 1.2rem;
                height: 1rem;
                background: url("./img/radio-7.png") no-repeat;
                background-size: 100%;
                margin-bottom:.16rem;
              }
              li:nth-child(2){
                width: 1.2rem;
                height: 1rem;
                background: url("./img/radio-9.png") no-repeat;
                background-size: 100%;
                margin-bottom:.16rem;
              }
              li:nth-child(3){
                width: 1.2rem;
                height: 1rem;
                background: url("./img/radio-12.png") no-repeat;
                background-size: 100%;
                margin-bottom:.16rem;
              }
          }
          .right2{
              li:nth-child(1){
                width: 1.2rem;
                height: 1rem;
                background: url("./img/radio-6.png") no-repeat;
                background-size: 100%;
                margin-bottom:.16rem;
              }
              li:nth-child(2){
                width: 1.2rem;
                height: 1rem;
                background: url("./img/radio-8.png") no-repeat;
                background-size: 100%;
                margin-bottom:.16rem;
              }
              li:nth-child(3){
                width: 1.2rem;
                height: 1rem;
                background: url("./img/radio-11.png") no-repeat;
                background-size: 100%;
                margin-bottom:.16rem;
              }
          }
    }
    }
    .my-readio{
        text-align:left;
        padding-left:.16rem;
        p{ margin-top: 0;
            margin-bottom: .16rem;
            font-size: .18rem;
            color:rgb(0, 0, 0);
        }
        div{
            div{
                display:flex;
                p:nth-child(1){
                    position: relative;
                    width:1.6rem;
                    height:1.2rem;
                    background:url("./img/radio-13.png")no-repeat;
                    background-size: 100%;
                    margin-right: .25rem;
                    margin-bottom: 0;
                    span{
                         height:.26rem;
                         line-height:.26rem;
                         background:rgba(250,203,245,.5);
                         border-radius: .03rem;
                        text-align:center;
                        display:block;
                        position: absolute;
                        width:100%;
                        bottom:0;
                        font-size: .15rem;
                        color:rgb(51,51,51);
                    }
                }
                p:nth-child(2){
                     position: relative;
                    width:1.6rem;
                    height:1.2rem;
                    background:url("./img/radio-14.png")no-repeat;
                    background-size: 100%;
                     span{
                         height:.26rem;
                         line-height:.26rem;
                         background:rgba(250,203,245,.5);
                         border-radius: .03rem;
                        text-align:center;
                        display:block;
                        position: absolute;
                        width:100%;
                        bottom:0;
                        font-size: .15rem;
                        color:rgb(51,51,51);
                    }
                }
            }
        }
    }
    .my-readio_{
        text-align:left;
        padding-left:.16rem;
        p{ margin-top: 0;
            margin-bottom: .16rem;
            font-size: .18rem;
            color:rgb(0, 0, 0);
        }
        div{
            div{
                display:flex;
                p:nth-child(1){
                    position: relative;
                    width:1.6rem;
                    height:1.2rem;
                    background:url("./img/radio-7.png")no-repeat;
                    background-size: 100%;
                    margin-right: .25rem;
                    margin-bottom: 0;
                    span{
                         height:.26rem;
                         line-height:.26rem;
                         background:rgba(250,203,245,.5);
                         border-radius: .03rem;
                        text-align:center;
                        display:block;
                        position: absolute;
                        width:100%;
                        bottom:0;
                        font-size: .15rem;
                        color:rgb(51,51,51);
                    }
                }
                p:nth-child(2){
                     position: relative;
                    width:1.6rem;
                    height:1.2rem;
                    background:url("./img/radio-6.png")no-repeat;
                    background-size: 100%;
                     span{
                         height:.26rem;
                         line-height:.26rem;
                         background:rgba(250,203,245,.5);
                         border-radius: .03rem;
                        text-align:center;
                        display:block;
                        position: absolute;
                        width:100%;
                        bottom:0;
                        font-size: .15rem;
                        color:rgb(51,51,51);
                    }
                }
            }
        }
    }




  }

</style>
