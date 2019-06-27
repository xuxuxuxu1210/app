<template>
  <div class="latest">
    <h1>
      <span>精选歌单</span>
      <div>
        <router-link to='/home/lastes'>最新</router-link>
        <router-link to="/home/recommend" class="rec">推荐</router-link>
      </div>
    </h1>
    <router-View/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.latest {
  font-size: 0.14rem;
  color: rgb(51, 51, 51);
  margin-top: 0.21rem;
  h1 {
    padding: 0 0.32rem 0 0.16rem;
    overflow: hidden;
    margin-bottom:.08rem;
    span {
      font-size: 0.18rem;
      font-weight: bold;
    }
    div {
      float: right;
      a {
        color: rgb(51, 51, 51);
        float: left;
        padding-bottom:.04rem;
      }
      a:nth-of-type(1) {
        margin-right: 0.32rem;
      }
      .rec {
        color: rgb(263, 50, 165);
        border-bottom: 2px solid rgb(263, 50, 165);
      }
    }
  }
}
</style>


