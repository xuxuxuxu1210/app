<template>
  <div class="album">
      <!-- 头部 -->
      <AlbumHead txt="专辑" src1="../../../static/MyAblum_img/album-1.png" src2="../../../static/MyAblum_img/album-2.png">
      </AlbumHead>
      <!-- 专辑信息 -->
      <div class="album_info">
          <div class="info">
              <div class="img">
                  <img src="../../../static/MyAblum_img/album.png">
                  <p>201.3万</p>
                  <span></span>
              </div>
              <div class="txt">
                  <h3>你好 纽约 （电影《唐人街探案2》主题曲）</h3>
                  <p class="sing">歌手：Taylor Swift</p>
                  <p class="time">发行时间：2018.6.26</p>
                  <p>这里每个人都渴望更多 寻觅他们未曾聆听过的声音……</p>
              </div>
              <a href="#"></a>
          </div>
          <div class="Box_share">
              <a href="#" @click="heartBg"><span class="like" :class="{heart:bol}"></span>喜欢</a>
              <a href="#"><span class="write"></span>评论</a>
              <a href="#"><span class="share"></span>分享</a>
          </div>
          <div class="new">
              <p>最新专辑正在销售中</p>
              <a href="#">已售30万张<span></span></a>
          </div>
      </div>
      <!-- 播放全部 -->
      <PlayAll></PlayAll>
      <!-- 引入播放器 -->
      <!-- <PlayMusic></PlayMusic> -->

      <Group></Group>
  </div>
</template>

<script>
// 引入头部
import AlbumHead from './header'
import Group from './../group-img/group-img'
// 引入播放全部
import PlayAll from "./playAll"

// 引入播放器
// import PlayMusic from "../group-img/group-img"

export default {
  data() {
    return {
        bol:false
    }
  },
  methods: {
    //   改变红心的背景
    heartBg(){
        this.bol = !this.bol;
    }
  },
  components: {
    // 注册头部
    AlbumHead,
    PlayAll,
    Group,
    // PlayMusic
  }
}
</script>

<style scoped lang="less">
    .album{
        background: url(../../../static/myImg/bg-color.png);
        background-size: 100% 100%;
        .album_info{
            padding: .34rem/2 .07rem .12rem .15rem;
            box-sizing: border-box;
            span{
                display: block;
                width: .22rem;
                height: .22rem;
            }
            .info{
                overflow: hidden;
                color: #fff;
                position: relative;
                .img{
                    width: 1rem;
                    height: 1.11rem;
                    border-radius: .05rem;
                    position: relative;
                    margin-right: .12rem;
                    float: left;
                    margin-top: .02rem;
                    img{
                        width: 100%;
                    }
                    span{
                        background: url(../../../static/MyAblum_img/album-3.png) no-repeat;
                        background-size: 100% 100%;
                        position: absolute;
                        bottom: .01rem;
                        right: .05rem/2;
                    }
                    p{
                        font-size: .08rem;
                        text-indent: .22rem;
                        background: url(../../../static/MyAblum_img/album-4.png) no-repeat left center;
                        background-size: .22rem .22rem;
                        
                        position: absolute;
                        bottom: .05rem;
                        left: .02rem;
                    }
                }
                .txt{
                    float: left;
                    width: 4.43rem/2;
                    h3{
                        font-size: .15rem;
                        color: #fefefe;
                        font-weight: bold;
                        margin-bottom: .06rem;
                    }
                    .sing{
                        font-size: .14rem;
                    }
                    p{
                        font-size: .1rem;
                    }
                    .time{
                        margin: .08rem 0 .04rem 0;
                    }
                }
                a{
                    display: block;
                    width: .22rem;
                    height: .22rem;
                    background: url(../../../static/MyAblum_img/album-9.png) no-repeat left center;
                    background-size: cover;

                    position: absolute;
                    right: 0;
                    bottom: 0;
                }
            }
            .Box_share{
                display: flex;
                margin: .15rem 0 .12rem .08rem;
                position: relative;
                a{
                    display: flex;
                    color: #fff;
                    font-size: .12rem;
                    margin-right: .31rem/2;
                    height: .22rem;
                    line-height: .22rem;
                    .like{
                        background: url(../../../static/MyAblum_img/album-5.png) no-repeat;
                        background-size: .22rem .22rem;
                        vertical-align: middle;
                    }
                    .write{
                        background: url(../../../static/MyAblum_img/album-6.png) no-repeat;
                        background-size: .22rem .22rem;
                        vertical-align: middle;
                    }
                    .share{
                        background: url(../../../static/MyAblum_img/album-8.png) no-repeat;
                        background-size: .22rem .22rem;
                        vertical-align: middle;
                    }
                    .heart{
                        background: url(../../../static/MyAblum_img/heart.png) no-repeat;
                        background-size: .22rem .22rem;
                    }
                    &:hover{
                        -webkit-animation-name: heartBeat;
                        animation-name: heartBeat;
                        -webkit-animation-duration: 1.3s;
                        animation-duration: 1.3s;
                        -webkit-animation-timing-function: ease-in-out;
                        animation-timing-function: ease-in-out;
                    }
                }
                .toshare{
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
            .new{
                color: #fdfdfd;
                overflow: hidden;
                margin-left: .37rem/2;
                p{
                    font-size: .14rem;
                    float: left;
                }
                a{
                    display: flex;
                    color: #fdfdfd;
                    font-size: .09rem;
                    float: right;
                    height: .22rem;
                    line-height: .22rem;
                    span{
                        background: url(../../../static/MyAblum_img/album-9.png) no-repeat;
                        background-size: 100% 100%;
                    }
                }
            }       
        }
    }
    @keyframes heartBeat {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        14% {
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
        }

        28% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        42% {
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
        }

        70% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }       
</style>
