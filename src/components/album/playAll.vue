<template>
  <div class="all">
      <div class="playAll">
          <a href="#">播放全部</a><span>(共4首)</span>
      </div>
      <ul>
          <li v-for="(item,index) in imgList" :key="index">
              <router-link to="/play">
                  <img :src="item.img">
                  <div class="info">
                      <p class="name">{{item.name}}</p>
                      <p>{{item.singer}}</p>
                  </div>
                  <div class="more">
                      <a href="#" class="mv">
                          <img :src="item.mv">
                      </a>
                      <a href="#" class="dian">
                          <img :src="item.more">
                      </a>
                    </div>
              </router-link>
            </li>
      </ul>
      <div class="save" @click="add">
          <span class="num">{{msg}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        // songList:[],
        imgList:[
            {
                img:"../../../static/MyAblum_img/album-10.png",
                name:"You Need To Calm Down",
                singer:"歌手：Taylor Swift",
                mv:"../../../static/MyAblum_img/album-11.png",
                more:"../../../static/MyAblum_img/album-12.png"
            },
            {
                img:"../../../static/MyAblum_img/album-13.png",
                name:"You Need To Calm Down",
                singer:"歌手：Taylor Swift",
                mv:"../../../static/MyAblum_img/album-11.png",
                more:"../../../static/MyAblum_img/album-12.png"
            },
            {
                img:"../../../static/MyAblum_img/album-14.png",
                name:"You Need To Calm Down",
                singer:"歌手：Taylor Swift",
                mv:"../../../static/MyAblum_img/album-11.png",
                more:"../../../static/MyAblum_img/album-12.png"
            },
            {
                img:"../../../static/MyAblum_img/album-15.png",
                name:"You Need To Calm Down",
                singer:"歌手：Taylor Swift",
                mv:"../../../static/MyAblum_img/album-11.png",
                more:"../../../static/MyAblum_img/album-12.png"
            },
        ],
        msg:"+收藏(25.5万)"
    }
  },
    methods:{
        add(){
            this.msg = "已收藏";
            document.getElementsByClassName("save")[0].style.background = "#ccc";
            console.log(this.msg);
        }
    },
  components: {

  }
}
</script>

<style scoped lang="less">
    .all{
        background: #fff;
        border-top-left-radius: .06rem;
        border-top-right-radius: .06rem;
        font-size: 0;
        padding: .12rem .32rem/2 0 .12rem;
        position: relative;
        .playAll{
            margin-bottom: .32rem/2;
            a{
                display: inline-block;
                color: #333;
                font-size: .25rem/2;
                background: url(../../../static/MyAblum_img/album-7.png) no-repeat;
                background-size: .22rem .22rem;
                text-indent: .24rem;
            }
            span{
                color: #a8a8a8;
                font-size: .17rem/2;
            }
        }
        ul{
            li{
                margin-bottom: .12rem;
                a{
                    display: block;
                    overflow: hidden;
                    position: relative;
                    img{
                        float: left;
                        width: 1rem;
                        height: .8rem;
                        margin-right: .12rem;
                    }
                    .info{
                        float: left;
                        font-size: .14rem;
                        color: #666;
                        .name{
                            color: #333;
                            margin: .21rem 0 .06rem 0;
                        }
                    }
                    .more{
                        display: flex;
                        position: absolute;
                        bottom: .2rem;
                        right: 0;
                        a{
                            img{
                                width: .22rem;
                                height: .22rem;
                            }
                        }
                    }
                }
            }
        }
        .save{
            width:1rem;
            height: .25rem;
            line-height: .25rem;
            text-align: center;
            border-radius: .25rem/2;
            color: #fff;
            background: #ec32a5;
            font-size: .12rem;
            // padding: .05rem;
            overflow: hidden;

            position: absolute;
            right:.16rem;
            top:.1rem;
        }
    }
</style>
