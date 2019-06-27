<template>
  <div id="H_head">
    <img src="./img/Signal Circle copy@2x.png" alt="">
    <div class="head">    
      <span class="icon" @click="s_show"></span>
      <p>
        <!-- 要改的路径 -->
        <router-link to="/my">我的</router-link>
        <router-link to="/home">音乐馆</router-link>
        <router-link to="/nearby">发现</router-link>
      </p>
  <router-link to="/seek" class='seek'><img src="./img/3@2x.png" alt=""></router-link>
      
    </div>
    <!--侧边栏  -->
    <div class="sideber" v-show="show">
      <div class="s_bg" @click="s_none"></div>
      <div class="s_side">
        <h1>
          <img src="./../sideber/img/photo@2x.png" alt="头像">
          <p>Beauty文1811</p>
          <ul>
            <li>
              <span>39</span>
              <span>粉丝</span>
            </li>
            <li>
              <span>14</span>
              <span>关注</span>
            </li>
            <li>
              <span>137</span>
              <span>动态</span>
            </li>
          </ul>
        </h1>
        <div class="dao">
          <ul>
            <li>
              <span></span>签到
              <span>已签到5天</span>
            </li>
            <li>
              <span></span>会员中心
            </li>
            <li>
               <router-link to="/nearby" class="nearby" style="color:#333;"> 
               <span></span>附近的人
               </router-link>
             
            </li>
            <li>
              <span></span>我的皮肤
            </li>
            <li>
              <span></span>扫一扫
            </li>
          </ul>
        </div>
        <div class="mess">
          <ul>
            <li>
              <span></span>我的消息
            </li>
            <li id='li2'>
              <span></span>定时开关
              <span :class="{'open':isopen}" @click="s_open"></span>
            </li>
            <li>
              <span></span>听歌识曲
            </li>
            <li>
              <span></span>音乐闹钟
            </li>
            <li>
              <span></span>桌面歌词
            </li>
            <li>
              <span></span>音乐云盘
            </li>
          </ul>
        </div>
        <div class='s_foot'>
          <ul>
            <li><span></span>夜间模式</li>
            <li><span></span>设置</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      isopen: false
    };
  },
  methods: {
    s_show() {
      this.show = true;
    },
    s_none() {
      this.show = false;
    },
    s_open() {
      this.isopen = !this.isopen;
    }
  }
};
</script>

<style lang="less" scoped>
#H_head {
  height: 0.65rem;
  font-size: 0.18rem; 
  background: url("./img/General-1.png") no-repeat 0 0;
  background-size: cover;
  overflow: hidden;
  img{
      width:3.75rem;
    }
  .head {
    padding: 0 0.14rem;
    .icon {
      display: inline-block;
      width: 0.22rem;
      height: 0.22rem;
    }
    .icon:nth-of-type(1) {
      background: url("./img/home-6.png") no-repeat center center;
      background-size: cover;
      float: left;
    }
    .seek {
      img{
      width:.22rem;
      float: right;}
    }
    p {
      display: inline-block;
      margin: 0 0.32rem;
      float: left;
      a {
        color: rgb(255, 255, 255);
        display: inline-block;
        margin-right: 0.51rem;
        padding-bottom: 0.03rem;
      }
      a:last-child {
        margin-right: 0;
      }
      .router-link-active {
        color: rgb(263, 50, 165);
        border-bottom: 2px solid rgb(263, 50, 165);
      }
    }
  }
  // 侧边栏
  .sideber {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    // 模态框
    .s_bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }
    // 内容
    .s_side {
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height:100%;
      background: white;
      // 头部
      h1 {
        margin: 0.31rem 0 0.16rem 0;
        img {
          width: 0.72rem;
          height: 0.72rem;
          margin: 0 auto;
        }
        p {
          margin: 0.18rem 0 0.22rem;
          text-indent: 0.8rem;
          font-size: 0.15rem;
          color: #333333;
          background: url("./../sideber/img/button-1@2x.png") no-repeat 1.89rem 0;
          background-size: 0.35rem 0.17rem;
        }
        ul {
          display: flex;
          li {
            text-align: center;
            flex: 1;
            display: flex;
            flex-direction: column;
            span:nth-of-type(1) {
              font-size: 0.23rem;
            }
            span:nth-of-type(2) {
              font-size: 0.12rem;
              color: #666666;
            }
          }
        }
      }
      // 第一大块
      .dao {
        border-top: 0.01rem solid #e8e8e8;
        ul {
          font-size: 0.13rem;
          li {
            color: #333333;
            padding: 0.16rem 0 0 0.16rem;
            display: flex;
            span:nth-of-type(1) {
              display: inline-block;
              width: 0.17rem;
              height: 0.17rem;
              margin-right: 0.12rem;
            }
          }
          li:nth-of-type(1) {
            span:nth-of-type(1) {
              background: url("./../sideber/img/icon-1@2x.png") no-repeat center
                center;
              background-size: cover;
            }
            span:nth-of-type(2) {
              font-size: 0.12rem;
              color: #666666;
              margin-left: 0.1rem;
            }
          }
          li:nth-of-type(2) {
            span {
              background: url("./../sideber/img/icon-2@2x.png") no-repeat center
                center;
              background-size: cover;
            }
          }
          li:nth-of-type(3) {
            span {
              background: url("./../sideber/img/icon-3@2x.png") no-repeat center
                center;
              background-size: cover;
            }
          }
          li:nth-of-type(4) {
            span {
              background: url("./../sideber/img/icon-4@2x.png") no-repeat center
                center;
              background-size: cover;
            }
          }
          li:nth-of-type(5) {
            padding: 0.17rem 0 0.17rem 0.16rem;
            span {
              background: url("./../sideber/img/icon-5@2x.png") no-repeat center
                center;
              background-size: cover;
            }
          }
        }
      }
      // 第二大块
      .mess {
        border-top: 0.01rem solid #e8e8e8;
        ul {
          font-size: 0.13rem;
          li {
            color: #333333;
            padding: 0.16rem 0 0 0.16rem;
            display: flex;
            span:nth-of-type(1) {
              display: inline-block;
              width: 0.17rem;
              height: 0.17rem;
              margin-right: 0.12rem;
            }
          }
          li:nth-of-type(1) {
            span:nth-of-type(1) {
              background: url("./../sideber/img/icon-6@2x.png") no-repeat center
                center;
              background-size: cover;
            }
          }
          li:nth-of-type(2) {
            position: relative;
            span:nth-of-type(1) {
              background: url("./../sideber/img/icon-7@2x.png") no-repeat center
                center;
              background-size: cover;
            }
            span:nth-of-type(2) {
              position: absolute;
              width: 0.35rem;
              height: 0.17rem;
              top: 0.17rem;
              left: 2.51rem;
              background: url("./../sideber/img/button@2x.png") no-repeat 0 0;
              background-size: cover;
            }
          }
          // 按钮开关
          #li2{
            .open {
              background: url("./../sideber/img/button2.png") no-repeat 0 0;
              background-size: cover;
            }
          }

          li:nth-of-type(3) {
            span {
              background: url("./../sideber/img/icon-8@2x.png") no-repeat center
                center;
              background-size: cover;
            }
          }
          li:nth-of-type(4) {
            span {
              background: url("./../sideber/img/icon-9@2x.png") no-repeat center
                center;
              background-size: cover;
            }
          }
          li:nth-of-type(5) {
            span {
              background: url("./../sideber/img/icon-10@2x.png") no-repeat
                center center;
              background-size: cover;
            }
          }
          li:nth-of-type(6) {
            span {
              background: url("./../sideber/img/icon-11@2x.png") no-repeat
                center center;
              background-size: cover;
            }
          }
        }
      }
      // 尾部
      .s_foot{
        margin-top:.17rem;
        ul{
          display:flex;
          font-size: 0.13rem;
          li{
            flex:1;
            text-align:center;
            display:flex;
            justify-content: center;
            span{
              display: inline-block;
              width:.17rem;
              height:.17rem;
            }
          }
          li:nth-of-type(1){
            span{
              background:url('./../sideber/img/icon-12@2x.png') no-repeat 0 0;
              background-size:cover;
            }
          }
          li:nth-of-type(2){
            span{
              background:url('./../sideber/img/icon-13@2x.png') no-repeat 0 0;
              background-size:cover;
            }
          }
        }
      }
    }
  }
}
</style>


