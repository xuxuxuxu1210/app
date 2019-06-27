<template>
  <div class="header">
      <img src="../../../static/MyAblum_img/state.png">
      <div class="bot">
        <router-link to="/home"><img :src="src1"></router-link>
        <span>{{ txt }}</span>
        <router-link to="/seek"><img :src="src2"></router-link>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  },
  props:["txt","src1","src2"]
}
</script>

<style scoped lang="less">
    .header{
        height: 1.28rem/2;
        img{
            height: .2rem;
            width: 100%;
        }
        .bot{
            display: flex;
            padding: .1rem .12rem .12rem .12rem;
            span{
                display: block;
                font-size: .36rem/2;
                color: #fff;
                flex: 1;
                height: .22rem;
                line-height: .22rem;
                text-align: center;
            }
            img{
                width: .22rem;
                height: .22rem;
            }
        }
    }
</style>
