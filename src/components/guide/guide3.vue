<template>
  <div class="guide3">
    <div>
      <router-link to="/guide2" class="btn_l">
        <img src="../guide-img/guide-left.png" alt>
      </router-link>
      <div>
        <p>走在路上，若有音乐相伴，</p>
        <p>感动与惊喜随之而来。</p>
        <router-link to="/register" class="now">立即开启</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {}
};
</script>

<style scoped lang="less">
.guide3 {
  width: 100%;
  height: 100%;
  background: url("../guide-img/guide-three.png") 0 0 repeat;
  background-size: 100% 100%;
  div {
    .btn_l {
      display: block;
      position: absolute;
      left: 0rem;
      top: 3.11rem;
      width: 0.44rem;
      height: 0.44rem;
    }
    div {
      font-size: 0.2rem;
      position: absolute;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #f6f6f6;
      p {
        text-align: center;
        white-space: nowrap;
        padding-bottom: 0.04rem;
      }
      .now {
        display: block;
        color: white;
        margin-top: 0.3rem;
        font-size: 0.18rem;
        padding: 0.08rem 0.74rem;
        border-radius: 0.05rem;
        background: url("./../guide-img/guide-four.png");
        background-size: 100%;
      }
    }
  }
}
</style>
