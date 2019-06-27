<template>
  <div class="login">
    <div class="top">
      <router-link to="/register" class="top_l">
        <img src="../login-img/login-one.png">
      </router-link>
      <span class="top_r">帮助</span>
    </div>
    <div class="logo">
      <img src="../login-img/logo.png" alt>
    </div>
    <div class="tex">
      <input type="text" placeholder="请输入账号">
      <img src="../login-img/login-two.png" class="bott">
      <input type="passward" placeholder="请输入密码">
      <router-link to="/home">
        <img src="../login-img/login-three.png">
      </router-link>
    </div>
    <div class="login_fo">
      <p>
        <a href="#">忘记密码</a>
        <span>｜</span>
        <a href="#">用户注册</a>
      </p>
      <p>
        登录即代表阅读并同意
        <span>服务协议</span>
      </p>
      <ul>
        <li>
          <img src="../login-img/login-microblog.png" alt>
        </li>
        <li>
          <img src="./../login-img/login-qq.png" alt>
        </li>
        <li>
          <img src="./../login-img/login-WeChat.png" alt>
        </li>
      </ul>
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
.login {
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
      width: 0.22rem;
      height: 0.22rem;
      position: absolute;
      right: 0.2rem;
      top: 0.12rem;
    }
    a {
      img {
        width: 0.52rem;
        height: 0.51rem;
        margin: 0.18rem auto;
      }
    }
  }
  .login_fo {
    position: absolute;
    bottom: .26rem;
    left:.74rem;
    // width: 60%;
    // margin: 0 auto;
    p {
      a {
        color: #000;
        margin: 0 0.12rem;
        font-size: 0.13rem;
      }
    }
    ul{
      margin: .2rem auto;
      li{
        display: inline-block;
        width: .45rem;
        height: .45rem;
        margin: .02rem .12rem;
      }
    }
  }
}
</style>
