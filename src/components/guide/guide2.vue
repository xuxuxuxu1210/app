<template>
  <div class="guide2">
    <router-link to="/guide">
      <img src="../guide-img/guide-left.png" alt>
    </router-link>
    <router-link to="/guide3">
      <img src="../guide-img/guide-right.png" alt>
    </router-link>
    <div>
        <p>这里有无数音乐故事被说起，</p>
        <p>也许有一个在等着你。</p>
    </div>
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

<style scoped lang="less">
.guide2 {
  width: 100%;
  height: 100%;
  background: url("../guide-img/guide-two.png") 0 0 repeat;
  background-size: 100% 100%;
  a {
    display: block;
    position: absolute;
    top: 3.11rem;
    width: 0.44rem;
    height: 0.44rem;
  }
  a:nth-of-type(1){
      left: 0;
      }
  a:nth-of-type(2){
      right: 0;
  }
  div {
    font-size: 0.2rem;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f6f6f6;
    p {
      text-align: center;
      white-space: nowrap;
      padding-bottom: 0.04rem;
    }
  }
}
</style>
