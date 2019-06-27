<template>
  <div class="zh-search">
          <div class="sear-top">
            <img src="./img/ranking-9.png" >
            <div class="sear-nav">

            
             <router-link to="/home"><span class="zh-back"></span> </router-link >
             <div>
                <i></i>  <input type="text" placeholder="林俊杰 吉克隽逸" v-focus @keyup="sear_star(keyword)" v-model="keyword">
             </div>

             <span @click='del_inp'>取消</span>
             </div>
          </div>
          <ul class="sear-list">
            <li v-for='(item,index) in searchlist' :key="index" @click="seekplay(index)"><p v-html='item.songname_hilight'></p ></li>
             </ul>
          <div class="sear-hot">
                 <p>热门搜索</p>
                 <ul class="hot-list">
                   <li><span>Taylor Swift</span><span>张杰</span><span>孙燕姿</span></li>
                   <li><span>最美的时刻</span><span>孙楠</span></li>
                   <li><span>周震楠</span><span>赵政豪</span></li>
                 </ul>
                 <div class="history-tit">
                  <p>搜索历史</p> <p @click="del_all"><i></i>清空历史</p>
                 </div>
               <ul class="history-list">
              <li v-for="(item,index) in historylist" :key="index"><p v-text='item.song'></p><div @click="sear_del"><span></span></div></li>
                </ul>
                <div class="linsong">
                  <router-link to='/General'> <span class="iconlin"></span> <span>听歌识曲,小唱两句试试吧</span></router-link>
                </div>

          </div>


<Group></Group>

  </div>
</template>

<script>
import Group from '../group-img/group-img.vue'
import Axios from '../../../node_modules/axios/dist/axios.js'
export default {
  data() {
    return {
      keyword:'',
      searchlist:[],
      historylist:[
        // {song:'邓紫棋'}
      ]

    }
  },
  mounted () {

  },
  methods: {
         sear_star(val){
           this.searchlist=[];
           if(val!=''){
             this.historylist.unshift({song:val});
                Axios.get('https://v1.itooi.cn/tencent/search',{
         params: {
           keyword:val,
           type:'song',
           pageSize:13,
            page:0
      }
      }).then((res)=>{
           if(this.searchlist==''){
             this.searchlist=res.data.data.list;
           }

      console.log(this.searchlist);


  }).catch((err)=>{
    console.log(err);
  })


           }

         },
         sear_del(ind){
           console.log(ind)
           this.historylist.splice(ind,1);

         },
         del_all(){
           this.historylist=[];
         },
         del_inp(){
           this.keyword='';
           this.searchlist=[];
         },
         seekplay(ind){
           this.searchlist[ind]
         }
  },
  components: {
Group
  },
  directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
 }
}
</script>

<style scoped lang='less'>
.zh-search{
  
    font-size: 0;

   .sear-top{
     
     background:url('./img/ranking-1.png') 100% 100%;
     justify-content: space-between;
     height: .7rem;
      color: #FFF;
      .sear-nav{
           display:flex;
           justify-content: space-between;
           align-items: center;
     
      a{
       width: .5rem;
      height: .5rem;
      display: block;
     .zh-back{
       display: inline-block;
       margin: .14rem;
        width: .22rem;
        height: .22rem;
        background: url('./img/seek-1.png')center center no-repeat;
        background-size: 100% 100%;
       }
    }
    div{
      width: 2.25rem;
      height: .32rem;
      position: relative;

      border-radius: .16rem;
      background: #FFF;
      display: flex;
      align-items: center;
      i{
        position: absolute;
        left: .08rem;
        // top:.13rem;
        width: .22rem;
        height: .22rem;

        background: url('./img/seek-2.png')center center no-repeat;
        background-size: 100% 100%;
      }
      input{
        padding-left: .35rem;
       font-size: .16rem;
       color: rgb(204,204,204);
         border-radius: .16rem;
        height: 100%;
      }
    }
    span{
      width: .5rem;
      height: .5rem;
      line-height: .5rem;
      display: block;
      font-size: .16rem;
      text-align: left;

    }
     }

   }
   .sear-list{
     position: absolute;
     top: .8rem;

     width: 100%;

     z-index: 999;
     background: #FFF;
     li{
       border-bottom: .01rem solid #CCC;
       line-height: .4rem;
       font-size: .14rem;



     }
   }
   .sear-hot{
     padding:.16rem;
     height: 5.97rem;
     background: #FFF;
     p{
       text-align: left;
       font-size: .16rem;
       color: rgb(204,204,204);
     }
     .hot-list{
       overflow: hidden;

       margin-top: .16rem;
       li{

         margin-bottom: .16rem;
        display: flex;
        justify-content: left;

         span{
           padding: .05rem .12rem;
           margin-right: .15rem;
           display: inline-block;
           border-radius: .2rem;
           font-size: .14rem;
           color: rgb(51, 51, 51);
           border:.01rem solid #F58CB7;
         }
       }
     }
      .history-tit{
       display: flex;
       justify-content: space-between;
       align-items: center;
       p{
          line-height: .3rem;
         &:nth-child(1){
             color: rgb(204, 204, 204);
         }
         &:nth-child(2){
             color: rgb(51, 51, 51);
         }
         i{
           display: inline-block;
           vertical-align: middle;
           width: .22rem;
           height: .22rem;
           background: url('./img/seek-7.png') no-repeat;
           background-size: 100% 100%;
         }
       }
    }
    .history-list{
       li{
         display: flex;
         justify-content: space-between;
         align-items: center;
           border-bottom: .01rem solid #CCC;
         line-height: .4rem;
         p{
         color: rgb(51, 51, 51);
          font-size:.14rem;
         }
         div{
           width: .5rem;
           height: .4rem;
           padding: .09rem .1rem;
               span{
                 width: .22rem;
                height: .22rem;
                background: url('./img/seek-8.png')center center no-repeat;
                background-size: 100% 100%;
                display: inline-block;
             }
         }




       }
    }
    .linsong{
      margin-top: .2rem;
      a{
        display: block;
        padding-left: .7rem;
        

        
      .iconlin{
        width: .22rem;
        height: .22rem;
        background: url('./img/seek-9.png') no-repeat;
        background-size: 100% 100%;
        display: inline-block;
        vertical-align: top;
        margin-right: .1rem;
      }
      span{
        font-size: .14rem;
        color: rgb(51, 51, 51);
      }
      }

    }

   }

}
</style>
