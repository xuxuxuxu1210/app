<template>
  <div class="bottom">
      <ul>
          <li v-for="(item,index) in MoreInfo" :key="index">
            <img :src="item.imgSrc">
            <div class="info">
                <p>{{item.title}}</p>
                <p>{{item.info}}</p>
            </div>
            <a href="#">{{item.more}}<span></span></a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        MoreInfo:[
            {imgSrc:"../../../static/myImg/my-18.png",title:"我的精品集",info:"50首，已下载40首",more:"更多"},
            {imgSrc:"../../../static/myImg/my-17.png",title:"我的电台",info:"50个",more:"更多"},
            {imgSrc:"../../../static/myImg/my-16.png",title:"收藏的歌单",info:"5个",more:"更多"},
            {imgSrc:"../../../static/myImg/my-15.png",title:"收藏的歌手",info:"50人",more:"更多"},
        ]
    }
  },
  methods: {},
  components: {}
}
</script>

<style scoped lang="less">
    .bottom{
        margin-top: .32rem/2;
        ul{
            background: #fff;
            padding: .23rem/2 .13rem/2 .02rem .33rem/2;
            li{
                display: flex;
                font-size: .14rem;
                margin-bottom: .24rem;
                img{
                    width: 1rem;
                    height: 1.5rem/2;
                }
                .info{
                    margin-left: .34rem/2;
                    p:nth-child(1){
                        color: #333;
                        margin: .05rem 0 .02rem 0;
                    }
                    p:nth-child(2){
                        color: #666;
                    }
                }
               
                a{
                    flex: 1;
                    color: #999;
                    text-align: right;
                    margin-top: .45rem/2;
                    span{
                        display: inline-block;
                        width: .22rem;
                        height: .22rem;
                        background: url(../../../static/myImg/my-2.png) no-repeat;
                        background-size: .22rem .22rem;
                        vertical-align: middle;
                        margin-top: -.03rem;
                    }
                }
            }
        }
    }
</style>
