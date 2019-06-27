<template>
    <div class="mine">
        <!-- 头部 -->
        <MyHwader></MyHwader>
        <!-- 个人资料 -->
        <div class="header">
            <div class="topHead">
                <img src="../../../static/myImg/my-10.png">
                <div class="info">
                    <p>Asdf</p>
                    <a href="#">完善个人资料<span></span></a>
                </div>
                <a href="#"><img src="../../../static/myImg/my-9.png"></a>
            </div>
            <ul class="botHead">
                <li v-for="(item,index) in list" :key="index">
                  <a href="#">
                    <img :src="item.imgSrc">
                    <h2>{{item.title}}</h2>
                    <p>{{item.num}}</p>
                  </a>
                </li>
            </ul>
        </div>
        <!-- 更多(我的精品集等) -->
        <MyMore></MyMore>
        <Group></Group>
        <!-- 引入播放器 -->
        <!-- <PlayMusic></PlayMusic> -->
    </div>
</template>
<script>
// 引入头部
import MyHwader from '../home/head'

// 引入更多(我的精品集等)
import MyMore from './more'
import Group from './../group-img/group-img'
// 引入播放器
// import PlayMusic from "../group-img/group-img"

export default {
    data() {
        return {
            //全部歌曲 我喜欢 下载 最近播放的数据
            list:[
                {imgSrc:"../../../static/myImg/my-8.png",title:"全部歌曲",num:"60"},
                {imgSrc:"../../../static/myImg/my-7.png",title:"我喜欢",num:"60"},
                {imgSrc:"../../../static/myImg/my-6.png",title:"下载",num:"60"},
                {imgSrc:"../../../static/myImg/my-19.png",title:"最近播放",num:"60"}
            ]
        }
    },
    methods: {},
    components: {
        MyHwader,
        MyMore,
        Group,
        // PlayMusic
    }
}
</script>

<style scoped lang="less">
.mine {
    width: 100%;
    height: 100%;
    background: url(../../../static/myImg/bg-color.png);
    background-size: 100% 100%;
  .header { 
    background: #fff;
    .topHead {
        display: flex;
        width: 100%;
        padding: .25rem/2 .32rem/2 .14rem/2 .31rem/2;
        border-bottom: .01rem/2 solid #eee6fd; 
      img {
        width: .97rem/2;
        height: .97rem/2;
      }
      .info {
        font-size: 0;
        margin-left: .16rem/2;
        p {
          font-size: .32rem/2;
          font-weight: bold;
          margin-bottom: .22rem/2;
        }
        a {
          font-size: .23rem/2;
          color: #666;
          span {
            display: inline-block;
            width: .22rem;
            height: .22rem;
            background: url(../../../static/myImg/my-1.png) no-repeat;
            background-size: .22rem .22rem;
            vertical-align: middle;
            margin-top: -.03rem;
          }
        }
      }
      a {
        flex: 1;
        overflow: hidden;
        img {
          width: .22rem;
          height: .22rem;
          float: right;
          text-align: right;
        }
      }
    }
    .botHead{
        display: flex;
        padding: .19rem/2 .29rem/2 .16rem/2 .31rem/2;
        li{
            flex: 1;
            
            a{
              display: flex;
              flex-direction: column;
              align-items: center;
              &:hover img{
                  animation: scale ease-in infinite 1.2s both;
            
              }
              img{
                  width: .24rem;
                  height: .24rem;
                  margin-bottom: .06rem;

                
              }
              h2{
                  font-size: .24rem/2;
                  font-weight: bold;
                  margin-bottom: .06rem;
              }
              p{
                  color: #666;
                  font-size: .2rem/2;
                  font-weight: bold;
              }
            }
        }
    }
  }
}
@keyframes scale {
    0% {
        transform: scale(1,1);
    }
    50%{
        transform: scale(1.3,1.3);
    }
    100% {
        transform: scale(1,1);
    }
}
</style>
