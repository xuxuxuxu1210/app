<template>
  <div class="nearby">
    <Head></Head>
    <div class="toper">
      <div class="user">
        <div class="top">
          <img src="./img/nearby-4.png">
          <span>Asdf</span>
          <div class="location">
            <span class="img_span">
              <img src="./img/nearby-3.png">
            </span>
            <span class="space">0.1km</span>
          </div>
        </div>
        <p>这是我唱的《千年醉》，快来听听吧。</p>
      </div>
      <div class="music">
        <div class="left">
          <img src="./img/nearby-5.png" class="person">
          <img src="./img/nearby-6.png" class="play" @click="change" v-if="flay">
          <img src="./img/attention-19.png" class="play" @click="change" v-else>
          <!-- <Star></Star> -->
          <!-- <Audio></Audio> -->
          <audio id="audio1">
            <source type="audio/ogg">
            <source
              src="https://webfs.yun.kugou.com/201906270854/1e7d8abab0c99254891d7b38e96c7fe6/G016/M0A/08/09/8JMEAFV1oVWAXprXAFGMvLkPF8A044.mp3"
              type="audio/mpeg"
            >
          </audio>
        </div>
        <div class="right">
          <p class="name">千年醉</p>
          <p>100人听过</p>
        </div>
      </div>
      <div class="option">
        <span>
          <img src="./img/nearby-7.png">
          <i>6</i>
        </span>
        <span>
          <img src="./img/nearby-8.png">
          <i>2</i>
        </span>
        <span>
          <img src="./img/nearby-9.png">
        </span>
        <span>
          <img src="./img/nearby-10.png">
        </span>
      </div>
    </div>


      <div class="toper">
      <div class="user">
        <div class="top">
          <img src="./img/nearby-4.png">
          <span>Asdf</span>
          <div class="location">
            <span class="img_span">
              <img src="./img/nearby-3.png">
            </span>
            <span class="space">0.1km</span>
          </div>
        </div>
        <p>这是我唱的《余情未了》，快来听听吧。</p>
      </div>
      <div class="music">
        <div class="left">
          <img src="./img/nearby-12.png" class="person">
          <img src="./img/nearby-6.png" class="play" @click="change1" v-if="flay1">
          <img src="./img/attention-19.png" class="play" @click="change1" v-else>
          <!-- <Star></Star> -->
          <!-- <Audio></Audio> -->
          <audio id="audio2">
            <source type="audio/ogg">
            <source
              src="https://webfs.yun.kugou.com/201906271037/ae2a6b2859fabfad7621b4050c4fc2c7/G160/M0B/11/07/gJQEAFzbfVCAAUHHADTJ02KSDuQ335.mp3"
              type="audio/mpeg"
            >
          </audio>
        </div>
        <div class="right">
          <p class="name">余情未了</p>
          <p>100人听过</p>
        </div>
      </div>
      <div class="option">
        <span>
          <img src="./img/nearby-7.png">
          <i>6</i>
        </span>
        <span>
          <img src="./img/nearby-8.png">
          <i>2</i>
        </span>
        <span>
          <img src="./img/nearby-9.png">
        </span>
        <span>
          <img src="./img/nearby-10.png">
        </span>
      </div>
    </div>



    <div class="toper">
      <div class="user">
        <div class="top">
          <img src="./img/nearby-4.png">
          <span>Asdf</span>
          <div class="location">
            <span class="img_span">
              <img src="./img/nearby-3.png">
            </span>
            <span class="space">0.1km</span>
          </div>
        </div>
        <p>这是我唱的《千年醉》，快来听听吧。</p>
      </div>
      <div class="music">
        <div class="left">
          <img src="./img/nearby-5.png" class="person">
          <img src="./img/nearby-6.png" class="play" @click="change2" v-if="flay2">
          <img src="./img/attention-19.png" class="play" @click="change2" v-else>
          <!-- <Star></Star> -->
          <!-- <Audio></Audio> -->
          <audio id="audio3">
            <source type="audio/ogg">
            <source
              src="https://webfs.yun.kugou.com/201906270854/1e7d8abab0c99254891d7b38e96c7fe6/G016/M0A/08/09/8JMEAFV1oVWAXprXAFGMvLkPF8A044.mp3"
              type="audio/mpeg"
            >
          </audio>
        </div>
        <div class="right">
          <p class="name">千年醉</p>
          <p>100人听过</p>
        </div>
      </div>
      <div class="option">
        <span>
          <img src="./img/nearby-7.png">
          <i>6</i>
        </span>
        <span>
          <img src="./img/nearby-8.png">
          <i>2</i>
        </span>
        <span>
          <img src="./img/nearby-9.png">
        </span>
        <span>
          <img src="./img/nearby-10.png">
        </span>
      </div>
    </div>
<Group></Group>
  </div>
</template>

<script>
// import Star from './../group-img/audio.vue'
// import Audio from './audios.vue'
// import axios from "axios";
import Head from './../head/header.vue';
import Group from './../group-img/group-img'
export default {
  data() {
    return {
      lst: [],
      flay: true,
      flay1:true,
      flay2:true,
    };
  },
  methods: {
    change() {
      this.flay = !this.flay;
      console.log(1);
      if(this.flay){
           document.getElementById('audio1').pause();
         }else{
            document.getElementById('audio1').play();
         }
    },
     change1() {
      this.flay1 = !this.flay1;
      console.log(1);
      if(this.flay1){
           document.getElementById('audio2').pause();
         }else{
            document.getElementById('audio2').play();
         }
    },
     change2() {
      this.flay2 = !this.flay2;
      console.log(1);
      if(this.flay2){
           document.getElementById('audio3').pause();
         }else{
            document.getElementById('audio3').play();
         }
    }
  },
  mounted() {
    
  },
  components: {
    Head,
    Group,
  }
};
</script>

<style scoped lang = 'less'>
.nearby {
  font-family: "苹方";
  font-size: 0.13rem;
  .toper {
    padding-bottom: 0.12rem;
    margin-bottom: 0.12rem;
    background: white;
  }
  .toper:nth-child(3) {
    margin-bottom: 0;
  }
  .user {
    padding: 0 0.16rem;
    p {
      margin-top: 0.1rem;
      margin-bottom: 0.24rem;
    }
    .top {
      position: relative;
      display: flex;
      flex-direction: row;
      .location {
        position: absolute;
        right: 0;
        display: flex;
        flex-direction: row;
        span {
          margin: 0;
        }
        .img_span {
          width: 0.22rem;
          height: 0.22rem;
          /* height:.38rem; */
          margin-top: 0.04rem;
          img {
            width: 100%;
            height: auto;
            margin-top: 0rem;
          }
        }
        .space {
          margin-top: 0.08rem;
          font-size: 0.12rem;
        }
      }
      img {
        width: 0.38rem;
        height: 0.38rem;
        margin-top: 0.1rem;
      }
      span {
        font-size: 0.13rem;
        color: rgb(51, 51, 51);
        margin-top: 0.2rem;
        margin-left: 0.1rem;
      }
    }
  }
  .music {
    width: 100%;
    height: 0.86rem;
    background: rgb(243, 243, 243);
    display: flex;
    flex-direction: row;
    position: relative;
    .left {
      margin-left: 0.16rem;
      .person {
        width: 1.13rem;
        height: 100%;
      }
      .play {
        width: 0.22rem;
        height: 0.22rem;
        position: absolute;
        bottom: 0.06rem;
        left: 1rem;
      }
    }
    .right {
      margin-top: 0.08rem;
      margin-left: 0.13rem;
      .name {
        margin-bottom: 0.16rem;
      }
    }
  }
  .option {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0.16rem;
    margin-top: 0.27rem;
    span {
      width: 0.22rem;
      height: 0.22rem;
      display: flex;
      i {
        line-height: 0.22rem;
        margin-left: 0.08rem;
      }
    }
  }
}
</style>
