<template>
  <div class="attention">
    <Head></Head>
    <div class="talk">
      <div class="title">
        <div class="left">
          <h3>热门话题</h3>
        </div>
        <div class="right">
          <span class="more">更多</span>
          <span class="direc">
            <img src="./img/attention-36.png" alt>
          </span>
        </div>
      </div>





      <div class="move wrap">
        <ul class="box" >
          <li v-for="(item,index) in list2" :key="index">
            <div>
              <v-touch @swipeleft="left" @swiperight="right">
              <img :src="item.pic" >
              </v-touch>
            </div>
            <p class="song_name">{{ item.song_name }}</p>
            <p class="singer">{{ item.singer }}</p>
          </li>
        </ul>
      </div>
    </div>





    <div class="first">
      <div class="title2">
        <img src="./img/attention-9.png">
        <h3>Asdf</h3>
      </div>
      <p>这是我唱的《千年醉》，快来听听吧。</p>
      <ul class="img">
        <li v-for="(item,index) in list3" :key="index">
          <img :src="item.url">
        </li>
      </ul>
      <div class="music">
        <img src="./img/attention-18.png" alt>
        <img src="./img/attention-27.png" alt class="play" v-if="flay3" @click="change3">
        <img src="./img/attention-19.png" alt class="play" v-else @click="change3">

        <audio id="audio4">
          <source type="audio/ogg">
          <source
            src="https://webfs.yun.kugou.com/201906271055/f4284e97f01555bb0981a2e76bc8ef80/G123/M0A/07/1D/W5QEAFpIq_-AbT94ADSDb3ZDH74596.mp3"
            type="audio/mpeg"
          >
        </audio>

        <div class="other">
          <p class="song_name">黎明前的黑暗</p>
          <p class="person_num">100人听过</p>
        </div>
      </div>
      <div class="option">
        <div class="good">
          <img src="./img/attention-20.png" alt>
          <span>6</span>
        </div>
        <div class="info">
          <img src="./img/attention-21.png" alt>
          <span>2</span>
        </div>
        <div class="replay">
          <img src="./img/attention-22.png" alt>
        </div>
        <div class="many_more">
          <img src="./img/attention-23.png" alt>
        </div>
      </div>
    </div>

    <div class="first">
      <div class="title2">
        <img src="./img/attention-24.png" alt>
        <h3>Asdf</h3>
      </div>
      <p>这是我唱的《站着等你三千年》，快来听听吧。</p>
      <ul class="img">
        <li>
          <img src="./img/attention-25.png">
        </li>
      </ul>
      <div class="music">
        <img src="./img/attention-26.png" alt>
        <img src="./img/attention-27.png" alt class="play" v-if="flay4" @click="change4">
        <img src="./img/attention-19.png" alt class="play" v-else @click="change4">

        <audio id="audio5">
          <source type="audio/ogg">
          <source
            src="https://webfs.yun.kugou.com/201906271038/9489caf5a50be41917613edc37779ebf/G094/M00/16/19/ng0DAFwbWVeAQF09AF06Sx4NGUw565.mp3"
            type="audio/mpeg"
          >
        </audio>
        <div class="other">
          <p class="song_name">站着等你三千年</p>
          <p class="person_num">100人听过</p>
        </div>
      </div>
      <div class="option">
        <div class="good">
          <img src="./img/attention-20.png" alt>
          <span>6</span>
        </div>
        <div class="info">
          <img src="./img/attention-35.png" alt>
          <span>2</span>
        </div>
        <div class="replay">
          <img src="./img/attention-22.png" alt>
        </div>
        <div class="many_more">
          <img src="./img/attention-23.png" alt>
        </div>
      </div>
    </div>

    <div class="first">
      <div class="title2">
        <img src="./img/attention-28.png" alt>
        <h3>Asdf</h3>
      </div>
      <p>这是我唱的《千年醉》，快来听听吧。</p>
      <div class="music">
        <img src="./img/attention-29.png" alt>
        <img src="./img/attention-27.png" alt class="play" v-if="flay5" @click="change5">
        <img src="./img/attention-19.png" alt class="play" v-else @click="change5">
        <audio id="audio6">
          <source type="audio/ogg">
          <source
            src="https://webfs.yun.kugou.com/201906270854/1e7d8abab0c99254891d7b38e96c7fe6/G016/M0A/08/09/8JMEAFV1oVWAXprXAFGMvLkPF8A044.mp3"
            type="audio/mpeg"
          >
        </audio>
        <div class="other">
          <p class="song_name">千年醉</p>
          <p class="person_num">100人听过</p>
        </div>
      </div>
      <div class="option">
        <div class="good">
          <img src="./img/attention-30.png" alt>
          <span>6</span>
        </div>
        <div class="info">
          <img src="./img/attention-35.png" alt>
          <span>2</span>
        </div>
        <div class="replay">
          <img src="./img/attention-22.png" alt>
        </div>
        <div class="many_more">
          <img src="./img/attention-23.png" alt>
        </div>
      </div>
    </div>
    <Group></Group>
  </div>
</template>

<script>
import Head from './../head/header.vue';
import Group from './../group-img/group-img'
// var  touch  = require ("touch");
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
  data() {
    return {
      flay3: true,
      flay4:true,
      flay5:true,
      list2: [
        {
          pic: require("./img/attention-4.png"),
          song_name: "余情未了",
          singer: "魏新雨"
        },
        {
          pic: require("./img/attention-5.png"),
          song_name: "醉千年",
          singer: "李袁杰"
        },
        {
          pic: require("./img/attention-6.png"),
          song_name: "渡我不渡她",
          singer: "孤独诗人"
        },
        {
          pic: require("./img/attention-5.png"),
          song_name: "一剪梅",
          singer: "费玉清"
        },
        {
          pic: require("./img/attention-6.png"),
          song_name: "余情未了",
          singer: "魏新雨"
        },
        {
          pic: require("./img/attention-5.png"),
          song_name: "醉千年",
          singer: "李袁杰"
        },
        {
          pic: require("./img/attention-6.png"),
          song_name: "渡我不渡她",
          singer: "孤独诗人"
        },
        {
          pic: require("./img/attention-5.png"),
          song_name: "一剪梅",
          singer: "费玉清"
        }
      ],
      list3: [
        { url: require("./img/attention-8.png") },
        { url: require("./img/attention-15.png") },
        { url: require("./img/attention-11.png") },
        { url: require("./img/attention-13.png") },
        { url: require("./img/attention-14.png") },
        { url: require("./img/attention-15.png") },
        { url: require("./img/attention-16.png") },
        { url: require("./img/attention-17.png") },
        { url: require("./img/attention-5.png") }
      ],
      flay1: true,
      margin:0,
      num:0,
    };
  },
  methods: {
    change3() {
      this.flay3 = !this.flay3;
      console.log(1);
      if(this.flay3){
           document.getElementById('audio4').pause();
         }else{
            document.getElementById('audio4').play();
         }
    },
     change4() {
      this.flay4 = !this.flay4;
      console.log(1);
      if(this.flay4){
           document.getElementById('audio5').pause();
         }else{
            document.getElementById('audio5').play();
         }
    },
     change5() {
      this.flay5 = !this.flay5;
      console.log(1);
      if(this.flay5){
           document.getElementById('audio6').pause();
         }else{
            document.getElementById('audio6').play();
         }
    },
    // mounted(){
    //   var box = document.getElementsByClassName('box')[0];
    //   console.log(box);
    // }
    left(){
      console.log(1);
      var box=document.getElementsByClassName('box')[0];
      console.log(box);

      var timer=setInterval(()=>{
        this.num++;
        this.margin-=.2;
        if(this.num>=6){
          this.num=0;
          clearInterval(timer);
        }
        box.style.marginLeft=(this.margin)+"rem";
      },200);

    },
    right(){
      var box=document.getElementsByClassName('box')[0];
      console.log(box);
      var timer=setInterval(()=>{
        this.num++;
        this.margin+=.2;
        if(this.num>=6){
          this.num=0;
          clearInterval(timer);
        }
        box.style.marginLeft=(this.margin)+"rem";
      },200);
      
    }
    
  },
  components:{
    Head,
    Group,
  },
  mounted(){
 }
  
};
</script>

<style scoped lang = 'less'>
.attention {
  font-size: 0.13rem;
  font-family: "苹方";
  .talk {
    background: white;
    padding: 0.16rem 0rem 0rem 0.16rem;
    /* margin-bottom: .12rem; */
    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 0.09rem;
      .left {
        h3 {
          font-size: 0.14rem;
          color: rgb(51, 51, 51);
          font-weight: 600;
          /* font-family: '苹方'; */
        }
      }
      .right {
        width: 0.6rem;
        display: flex;
        flex-direction: row;
        .more {
          font-size: 0.14rem;
          color: rgb(102, 102, 102);
        }
        .direc {
          display: block;
          width: 0.22rem;
          height: 0.22rem;
          color: rgb(102, 102, 102);
          text-align: center;
          line-height: 0.22rem;
          font-family: "宋体";
          font-weight: 400;
        }
      }
    }
    .move{
      position: relative;

      ul {
        display: flex;
        flex-direction: row;
        width:10.08rem;
        li{
          margin-left: 0.12rem;
          div {
            width: 1rem;
            height: 0.75rem;
            /* transform: translateX(-.2rem);  */
          }
          .song_name {
            margin-top: 0.08rem;
            font-size: 0.14rem;
            color: rgb(51, 51, 51);
          }
          .singer {
            font-size: 0.11rem;
            /* margin-top: .04rem; */
            color: rgb(102, 102, 102, 0.5);
          }
        }
        li:nth-child(1) {
          margin-left: 0rem;
          div {
            width: 1rem;
            height: 0.75rem;
          }
          .song_name {
            margin-top: 0.08rem;
            font-size: 0.14rem;
            color: rgb(51, 51, 51);
          }
          .singer {
            font-size: 0.11rem;
            /* margin-top: .04rem; */
            color: rgb(102, 102, 102, 0.5);
          }
        }
        li:nth-child(4) {
          margin-left: 0.12rem;
          div {
            width: 1rem;
            height: 0.75rem;
          }
          .song_name {
            margin-top: 0.08rem;
            font-size: 0.14rem;
            color: rgb(51, 51, 51);
          }
          .singer {
            font-size: 0.11rem;
            /* margin-top: .04rem; */
            color: rgb(102, 102, 102, 0.5);
          }
        }
        li:nth-child(1) {
          div {
            width: 1rem;
            height: 0.75rem;
          }
          .song_name {
            margin-top: 0.08rem;
            font-size: 0.14rem;
            color: rgb(51, 51, 51);
          }
          .singer {
            font-size: 0.11rem;
            /* margin-top: .04rem; */
            color: rgb(102, 102, 102, 0.5);
          }
        }
      }
    }
  }
  .first {
    padding: 0rem 0.16rem;
    background: white;
    margin-top: 0.12rem;
    padding-bottom: 0.11rem;
    p {
      margin-top: 0.08rem;
      margin-bottom: 0.16rem;
      font-size: 0.14rem;
      color: rgb(51, 51, 51);
    }
    .title2 {
      display: flex;
      flex-direction: row;
      img {
        width: 0.39rem;
        height: 0.39rem;
        margin-top: 0.08rem;
      }
      h3 {
        margin-top: 0.21rem;
        margin-left: 0.075rem;
        font-size: 0.13rem;
        color: rgb(51, 51, 51);
        font-weight: 600;
      }
    }
  }
  .img {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      width: 1.09rem;
      height: 0.82rem;
      margin-left: 0.08rem;
      margin-bottom: 0.08rem;
    }
    li:nth-child(1) {
      margin-left: 0rem;
    }
    li:nth-child(4) {
      margin-left: 0rem;
    }
    li:nth-child(7) {
      margin-left: 0rem;
    }
  }
  .music {
    display: flex;
    flex-direction: row;
    position: relative;
    background: rgb(243, 243, 243);
    .other {
      .song_name {
        margin: 0;
        margin-top: 0.13rem;
        margin-left: 0.15rem;
      }
      .person_num {
        margin: 0;
        margin-top: 0.13rem;
        margin-left: 0.15rem;
      }
    }
    .play {
      width: 0.22rem;
      height: 0.22rem;
      position: absolute;
      bottom: 0.035rem;
      left: 0.9rem;
    }
    img {
      width: 1.15rem;
      height: 0.86rem;
    }
  }
  .option {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.27rem;
    .good {
      display: flex;
      flex-direction: row;
      img {
        width: 0.22rem;
        height: 0.22rem;
      }
      span {
        margin-left: 0.1rem;
      }
    }
    .info {
      display: flex;
      flex-direction: row;
      img {
        width: 0.22rem;
        height: 0.22rem;
      }
      span {
        margin-left: 0.1rem;
      }
    }
    .replay {
      img {
        width: 0.22rem;
        height: 0.22rem;
      }
    }
    .many_more {
      img {
        width: 0.22rem;
        height: 0.22rem;
      }
    }
  }
}
</style>
