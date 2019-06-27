<template>
  <div class="zh-group">
      <router-link to="/play">
        <div class="main">
        <div class="fl-l">
         <img src="./group-img/group-1.png" ref="img">
           <div class="play-info">
          <p>{{currentSong.songname}}</p>
          <p>{{currentSong.aouther}}</p>
           </div>
        </div>
        <ul class="fl-r">
          <li class="play-list" @click="changeplay"><img src="./group-img/play-13.png" v-if='isplay'><img src="./group-img/group-2.png" alt="" v-else></li>
          <li class="play-list" @click="next"><img src="./group-img/group-3.png" ></li>
          <li class="play-list"><img src="./group-img/group-4.png" ></li>
        </ul>
         <audio :src="currentSong.src" id="audio" ></audio>

      </div>
        </router-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
       isplay:false,
         id:0,
         anmtimer:null,
         rotage: 0,
      currentSong:  {aouther:'G.E.M.邓紫棋',src:'https://webfs.yun.kugou.com/201906271404/f931016a82120b5ab4fe1bf25df95f43/G133/M01/09/11/ZZQEAFswaOeIBBQOAA5zw3g3vukAAATSAAt3YkADnPb011.mp3',songname:'我们的秘密'},
      playlist:[
        {aouther:'G.E.M.邓紫棋',src:'https://webfs.yun.kugou.com/201906271404/f931016a82120b5ab4fe1bf25df95f43/G133/M01/09/11/ZZQEAFswaOeIBBQOAA5zw3g3vukAAATSAAt3YkADnPb011.mp3',songname:'我们的秘密'},
        {aouther:'王力宏 ',src:'https://webfs.yun.kugou.com/201906261632/35c5c5ea05112952f5b8950a7f866c46/G117/M07/11/07/tQ0DAFot-mqAYrykADwdPNgvKjM064.mp3',songname:'缘分一道桥'},
        {aouther:'Ayasa ',src:'https://webfs.yun.kugou.com/201906271404/175ea36c956d711c9058fb9c906bc962/G126/M0B/1E/07/HocBAFq-IfOAe6C9AEbIOYlc1Dg591.mp3',songname:'告白之夜'},
        {aouther:'李克勤 ',src:'https://webfs.yun.kugou.com/201906271403/d0bb47f8ba8548b44dc4b85b13e059a6/G012/M05/1A/09/TA0DAFUOAaiAD4dMAEccEw4b070166.mp3',songname:'月半小夜曲'}
      ]
    }
  },
  methods: {
      changeplay(){
         this.isplay=!this.isplay;
         let img=this.$refs.img
       if(this.isplay){

           document.getElementById('audio').play();
            clearInterval(this.anmtimer);
        this.anmtimer = setInterval(()=> {

          this.rotage += 1 / 2;
          img.style.transform = `rotate(${this.rotage}deg)`;
          if(this.rotage>=360){
            this.rotage=0;
          }
        }, 30);
         }else{
            document.getElementById('audio').pause();
            clearInterval(this.anmtimer);
         }
      },
      next(){
         this.id<this.playlist.length-1?this.id+=1:this.id=0;
       this.currentSong=this.playlist[this.id];
       //  监听 canplay  有数据不能播放的问题
       let audio=document.getElementById('audio');
       audio.addEventListener('canplay',()=>{
         audio.play();
       })
      }
  },
  components: {

  }

}
</script>

<style scoped lang='less'>

.zh-group{
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: .55rem;
  background: url('./group-img/play-1.png') no-repeat;
  background-size:cover;
  .main{
    padding:0 .16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
     height: 100%;
    .fl-l{
       display: flex;
       width: 1.8rem;
       height: 100%;
       justify-content: space-between;
       align-items: center;
       img{
           width: .34rem;
           height: .34rem;
           margin-right: .1rem;
         }
         .play-info{
           flex: 1;
           font-size: .14rem;
           p{
             text-align: left;
             font-size: .12rem;
             color: #FFF;
             &:last-child{
               margin-top: .03rem;
             }
           }

         }
    }
    .fl-r{
      display: flex;
      width: 1.2rem;
      height: 100%;
       justify-content: space-between;

      //  align-items: center;
      li{
        display: flex;
          margin-right: .16rem;
           height: 100%;
             align-items: center;
          img{
            width: .22rem;
            height: .22rem;
          }
          &:last-child{
             margin-right: 0;
          }
      }
    }

  }

}
</style>
