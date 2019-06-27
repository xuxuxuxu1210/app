<template>
  <div class="register">
    <div class="top">
      <router-link to="/guide3" class="top_l">
        <img src="../register-img/register-one.png">
      </router-link>
      <span class="top_r">帮助</span>
    </div>
    <div class="logo">
      <img src="../register-img/logo.png" alt>
    </div>
    <div class="tex">
      <input type="text" placeholder="请输入手机号">
      <input type="passward" placeholder="请输入验证码">
      <img src="../register-img/register-two.png" class="bott">
      <input type="passward" placeholder="请输入密码">
      <router-link to="/login">
        <img src="../register-img/login-three.png">
      </router-link>
    </div>
    <div class="regis_fo">
      <span>注册即代表同意「迷音」服务条款和隐私条款</span>
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
.register {
  padding: 0.31rem 0.17rem 0 0.11rem;
  font-size: 0.14rem;
  .top {
    overflow: hidden;
    .top_l {
      float: left;
      width: 0.22rem;
      height: 0.22rem;
      img {
        width: 100%;
      }
    }
    .top_r {
      font-size: 0.15rem;
      float: right;
    }
  }
  .logo {
    width: 1.25rem;
    height: 1.37rem;
    margin: 0.11rem auto;
  }
  .tex {
    margin-top: 0.45rem;
    position: relative;
    input {
      display: block;
      font-size: 0.14rem;
      // padding: 0.12rem auto;
      margin: 0.2rem auto;
      width: 3rem;
      height: 0.4rem;
      outline: none;
      border-bottom: 0.02rem solid #e8e8e8;
      &::-webkit-input-placeholder {
        text-align: center;
        // color: blue;
      }
    }
    .bott {
      width: 0.59rem;
      height: 0.12rem;
      position: absolute;
      right: 0.22rem;
      top: 0.72rem;
    }
     a {
      img {
        width: 0.52rem;
        height: 0.51rem;
        margin: 0.18rem auto;
      }
    }
  }
  .regis_fo{
    position: absolute;
    left:.46rem;
    bottom: .46rem;
    text-align: center;
    color: #999999;
  }
}
</style>
