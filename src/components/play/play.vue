<template>
<!-- <div> -->

  <div class="zh-play" >
    <img src="./../ranking/img/ranking-9.png" >
    <div class="zh-play-top" >
      <router-link to="/home">
        <span class="zh-back"></span>
      </router-link>
      <p>{{currentSong.songname}}</p>
      <span class="zh-share">
     </span>



    </div>
    <div class="zh-info">
      <div class="zh-line"></div>
      <p>{{currentSong.aouther}}</p>
      <div class="zh-line"></div>
    </div>
    <div class="zh-title">
      <span>HQ</span>
      <span>音频</span>
      <span>视频</span>
    </div>
    <div class="zh-img">
      <div>
        <img src="./img/play-16.png" ref="imgscoll">
      </div>
    </div>
    <ul class="zh-icon">
      <li @click="zhflag=!zhflag" ref="anmi" class="scale">
        <img src="./img/play-7.png" v-if="zhflag" >
        <img src="./img/play-hot-star.png" v-else >
      </li>
      <li @click='load'>
        <img src="./img/play-8.png">
        <img src="./img/16@2x.png" v-show="isload" ref='load' class="posimg" :class="{anmition:'isload'}">
      </li>
      <li>
        <img src="./img/play-9.png">
      </li>
      <li>
        <img src="./img/play-10.png">
      </li>
    </ul>
    <div class="zh-contral">
      <div class="zh-line">
        <span>{{currentTime|farmeTime}}</span>
        <div class="play-line" ref="line" @click="drawline">
          <span :style="{width:currentwidth}">
            <i></i>
          </span>
        </div>
        <span class="total-time">{{ totaltime | farmeTime }}</span>
      </div>
      <ul class="play-con">
        <li>
          <img src="./img/play-11.png">
        </li>
        <li @click="prev">
          <img src="./img/play-12.png">
        </li>
        <li class="zh-star scale" @click="changeplay" >
          <img src="./img/play-13.png" v-if="isplay">
          <img src="./img/play-14.png" v-else>
        </li>
        <li @click="next">
          <img src="./img/play-14.png" >
        </li>
        <li @click="senda">
          <img src="./img/play-15.png">
        </li>
      </ul>
      <audio :src="currentSong.src" ref="audio" id="audio"></audio>
    </div>

       <slot name='play'></slot>
  </div>
<!-- </div> -->

</template>

<script>


export default {
  data() {
    return {
     
      //  控制加入收藏
      zhflag: true,
      //  控制 下载动画
      isload:false,
      //  控制播放
      isplay: false,
      //  当前宽度
      currentwidth: 0,
      // 当前时间
      currentTime: 0,
      //  总时间
      totaltime: 0,
      rotage: 0,
      anmtimer:null,
      id:0,
      currentSong:  {aouther:'G.E.M.邓紫棋',src:'https://webfs.yun.kugou.com/201906271404/f931016a82120b5ab4fe1bf25df95f43/G133/M01/09/11/ZZQEAFswaOeIBBQOAA5zw3g3vukAAATSAAt3YkADnPb011.mp3',songname:'我们的秘密'},
      playlist:[
        {aouther:'G.E.M.邓紫棋',src:'https://webfs.yun.kugou.com/201906271404/f931016a82120b5ab4fe1bf25df95f43/G133/M01/09/11/ZZQEAFswaOeIBBQOAA5zw3g3vukAAATSAAt3YkADnPb011.mp3',songname:'我们的秘密'},
        {aouther:'王力宏 ',src:'https://webfs.yun.kugou.com/201906261632/35c5c5ea05112952f5b8950a7f866c46/G117/M07/11/07/tQ0DAFot-mqAYrykADwdPNgvKjM064.mp3',songname:'缘分一道桥'},
        {aouther:'Ayasa ',src:'https://webfs.yun.kugou.com/201906271404/175ea36c956d711c9058fb9c906bc962/G126/M0B/1E/07/HocBAFq-IfOAe6C9AEbIOYlc1Dg591.mp3',songname:'告白之夜'},
        {aouther:'李克勤 ',src:'https://webfs.yun.kugou.com/201906271403/d0bb47f8ba8548b44dc4b85b13e059a6/G012/M05/1A/09/TA0DAFUOAaiAD4dMAEccEw4b070166.mp3',songname:'月半小夜曲'}
      ]
    };
  },
  methods: {
    changeplay() {


      //  播放暂停
      let timer = null;


      this.isplay = !this.isplay;
      this.totaltime = this.$refs.audio.duration;
      if (this.isplay) {
        this.$refs.audio.play();
        //  动画计时器
        clearInterval(this.anmtimer);
        this.anmtimer = setInterval(function() {

          _this.rotage += 1 / 2;
          img.style.transform = `rotate(${_this.rotage}deg)`;
          if(this.rotage>=360){
            this.rotage=0;
          }
        }, 30);

      } else {
        this.$refs.audio.pause();

            clearInterval(this.anmtimer);
            // console.log(1);
      }
      let width = this.$refs.line.offsetWidth;
      let img = this.$refs.imgscoll;

       let _this = this;
      //  时间计时器
      timer = setInterval(function() {
        _this.currentTime = _this.$refs.audio.currentTime;
        _this.currentwidth =
          ((_this.currentTime / _this.totaltime) * width) / 100 + "rem";


        if (_this.currentTime == _this.totaltime) {
          clearInterval(timer);

          _this.currentTime = _this.currentwidth = 0;
        } else if (_this.isplay === false) {
          clearInterval(timer);
          timer = null;
        }
      }, 1000);
    },
    drawline(e) {
      e = e || event;

       let ex = e.offsetX;
      this.currentwidth = ex / 100 + "rem";
      console.log(this.currentwidth);
      this.currentTime = (ex / this.$refs.line.offsetWidth) * this.totaltime;
      console.log(this.currentTime, this.$refs.line.offsetWidth);



    },
    senda(){
      console.log(1);
    },
    load(){
       this.isload=true;
       setTimeout(()=>{
         this.isload=false;
       },500);


    },
    next(){
     this.id<this.playlist.length-1?this.id+=1:this.id=0;
       this.currentSong=this.playlist[this.id];
       //  监听 canplay  有数据不能播放的问题
       let audio=document.getElementById('audio');
       audio.addEventListener('canplay',()=>{
         audio.play();
       })

    },
    prev(){
    this.id>=1?this.id-=1:this.id=this.playlist.length-1;
       this.currentSong=this.playlist[this.id];
        let audio=document.getElementById('audio');
         audio.addEventListener('canplay',()=>{
         audio.play();
       })
    }
  },
  components: {},
  filters: {
    farmeTime(val) {
      let m = parseInt(val / 60);
      let s = parseInt(val % 60);
      m < 10 ? (m = "0" + m) : m;
      s < 10 ? (s = "0" + s) : s;
      return `${m}:${s}`;
    }
  },
  computed: {
    // currentwidth(){
    // }
  }


};
</script>

<style scoped lang='less'>
@import './animate.css';


.zh-play {
  height: 100%;
  background: url('../../components/play/img/play-1.png')center top;
  background-size:contain;
  


      .bshare-custom{
        width:60%;
       z-index: 999;
       position: absolute;
       right: .3rem;
       top: .55rem;
       height: 1.5rem;
        background: #FFF;

        transition: all .6s ease;
        display: flex;
        flex-flow: row wrap-reverse;
        justify-content: space-around;
        align-content: space-around;
        li{
          width: 33.3%;
        //  flex: 1;
        }




      }


  .zh-play-top {
    height: 0.5rem;
    color: #fff;
    font-size: 0.18rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      width: 0.5rem;
      height: 0.5rem;
      display: block;

      .zh-back {
        display: inline-block;
        margin: 0.14rem;
        width: 0.22rem;
        height: 0.22rem;
        background: url("./img/play-5.png") center center no-repeat;
        background-size: 100% 100%;
      }
    }
    .zh-share {
      display: inline-block;
      margin: 0.12rem 0.14rem;
      width: 0.24rem;
      height: 0.24rem;
      background: url("./img/play-6.png") center center no-repeat;
      background-size: 100% 100%;
    }

  }
  .zh-info {
    width: 1.9rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .zh-line {
      width: 0.4rem;
      height: 0.01rem;
      background: #fff;
    }
    p {
      font-size: 0.14rem;
    }
  }
  .zh-title {
    width: 1.3rem;
    padding: 0.15rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      width: 0.38rem;
      height: 0.22rem;
      line-height: 0.18rem;
      text-align: center;
      border: 0.01rem solid #fff;
      border-radius: 10px;
      font-size: 0.12rem;

      color: #fff;
    }
  }
  .zh-img {
    width: 2.7rem;
    height: 2.7rem;
    margin: 0.2rem auto 0.8rem;
    div {
      width: 2.7rem;
      height: 2.7rem;
      margin: 0 auto;
      border: 0.18rem solid rgba(255, 255, 255, 0.7);
      border-radius: 50%;

      img {
        transition: all .1s ease;
        z-index: -1;
      }
    }
  }
  .zh-icon {
    padding: 0.1rem 0.16rem;
    display: flex;

    justify-content: space-between;
    align-items: center;
    li {
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
      .posimg{
        position: absolute;
        top:20%;
        left: 30%;
      }



    }
  }
  .zh-contral {
    padding: 0.1rem 0.17rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-size: 0.12rem;
    .zh-line,
    .play-con {
      display: flex;

      justify-content: space-between;
      align-items: center;
    }
    .zh-line {
      .play-line {
        width: 2.61rem;
        height: 0.02rem;
        background: #fff;
        border-radius: 5px;
        position: relative;
        font-size: 0;
        span {
          position: relative;

          width: 0.5rem;
          height: 0.02rem;
          display: block;
          background: #ff3399;
          border-radius: 5px;
        }
        i {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(50%, -50%);
          width: 0.12rem;
          height: 0.12rem;
          background: #ff3399;
          border-radius: 50%;
        }
      }
    }
  }
  .play-con {
    padding: 0.1rem 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li {
    img {
      width: 0.31rem;
      height: 0.31rem;
    }
  }
  .zh-star {
    img {
      width: 0.48rem;
      height: 0.48rem;
    }
  }
}
</style>
