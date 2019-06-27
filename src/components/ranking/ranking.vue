<template>
  <div id="box">
      <img src="./img/ranking-9.png" >
    <span class="img">
        <router-link to="/home" class="ranking">
         <img src="./img/ranking-2.png">
      </router-link>
     
    </span>
    <span class="sp">排行榜</span>
    <ul>
        <p>迷音音乐巅峰榜单</p>
        <li class="tb">
            <div>
            <img src="./img/ranking-3.png">
            <span class="sp1">1.生命流-HyperGryph</span>
            <span>2.Birds-Imagine Dragons/Elisa</span>
            <span>3.我的名字-焦迈奇</span>
            </div>
        </li>
        <li>
            <div>
            <img src="./img/ranking-4.png">
            <span class="sp1">1.You Need To Caim Down-Ta...</span>
            <span>2.祝你爱我到天荒地老-颜人中/...</span>
            <span>3.孤身-徐秉龙</span>
            </div>
        </li>
        <li>
            <div>
            <img src="./img/ranking-5.png">
            <span class="sp1">1.来自天堂的魔鬼-G.E.M.邓紫棋</span>
            <span>2.Birds-Imagine Dragons/Elisa</span>
            <span>3.我的名字-焦迈奇</span>
            </div>
        </li>
        <li>
            <div>
            <img src="./img/ranking-6.png">
            <span class="sp1">1.暖一杯茶-解忧少帅h</span>
            <span>2.你们俩-陈鸿宇</span>
            <span>3.庸人-刘莱斯</span>
            </div>
        </li>
        <li>
            <div>
            <img src="./img/ranking-7.png">
            <span class="sp1">1.Dip Out-范丞丞</span>
            <span>2.生活该有的样子-A-Lin/王晰</span>
            <span>3.那就这样吧-蔡程昱</span>
            </div>
        </li>
    </ul>
    <Group></Group>
  </div>
</template>

<script>
import Group from './../group-img/group-img'
 export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
Group,
  }
}
</script>

<style lang='less' scoped>
body {
  width: 100%;
  height: 100%;
  
  #box {
       width: 100%;
  height: 100%;
    overflow: hidden;
    background: url("./img/ranking-1.png") 100% 100%;
    span {
      float: left;
      font-size: 0.18rem;
      font-family: "PingFang-5C-Heavy";
      color: rgb(255, 255, 255);
    }
    .img {
      margin-left: 0.16rem;
      .ranking {
        img {
          width: 0.22rem;
          height: 0.22rem;
        }
      }
    }
    .sp {
      margin-left: 1.29rem;
    }

    ul {
      background: white;
      width: 100%;
      margin-top: 0.3rem;
      overflow: hidden;
      p {
        width: 100%;
        height: 0.2rem;
        text-align: center;
        font-size: 0.18rem;
        font-family: "PingFang-5C-Heavy";
        color: rgb(102, 102, 102);
        margin-top: 0.12rem;
      }
      li {
        width: 100%;
        overflow: hidden;
        div {
          img {
            float: left;
            width: 1.12rem;
            margin-left: 0.16rem;
            margin-top: 0.14rem;
            border: none;
          }
          span {
            font-size: 0.14rem;
            font-family: "PingFang-5C-Medium";
            color: rgb(102, 102, 102);
            float: left;
            text-align: left;
            margin-left: 0.16rem;
            margin-top: 0.12rem;
          }
          .sp1 {
            margin-top: 0.3rem;
          }
        }
      }
    }
  }
}
</style>
