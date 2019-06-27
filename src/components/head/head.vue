<template>
  <div class="head">
    <div class="slice">
      <img src="./head/Signal Circle copy@2x.png">
    </div>
    <span class="back">
      <router-link to="/home">
        <img src="./../nearby/img/nearby-1.png" alt>
      </router-link>
      
    </span>
    <router-link to="/attention">
      <span class="attention">关注</span>
    </router-link>
    <router-link  to="/nearby">
      <span class="nearby">附近</span>
    </router-link>
    <span class="info">
      <img src="./../nearby/img/nearby-2.png" alt>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style lang = 'less'>
/* body,html{
  width: 100%;
  height: 100%;
} */

  .head {
    height: .9rem;
    display: flex;
    flex-direction: row;
     background: url(./../attention/img/General-1.png);
    background-size: 100% 10%; 
    justify-content: space-between;
    padding: .16rem;
    align-items: center;
    font-family: '苹方';
    /* padding-top: .4rem; */
    position: relative;
    .slice{
      position: absolute;
      top: 0rem;
    }
    .back {
      display: block;
      width: 0.22rem;
      height: 0.22rem;
      margin-top: .23rem;
    }
    .attention {
      display: block;
      width: 0.28rem;
      height: 0.28rem;
      font-size: 0.14rem;
      color: white;
      box-sizing: border-box;
      line-height: .28rem;
      margin-top: .23rem;
    }
    .nearby {
      display: block;
      width: 0.28rem;
      height: 0.28rem;
      font-size: 0.14rem;
      color: white;
      line-height: .28rem;
      box-sizing: border-box;
      margin-top: .23rem;
      
    }
    .info {
      display: block;
      width: 0.22rem;
      height: 0.22rem;
      margin-top: .23rem;
    }
    .router-link-active{
      color: rgb(236, 50, 165)!important;
      border-bottom: .02rem solid rgb(236, 50, 165);
    }
  }

</style>
