<template>
  <div class="list">
    <ul>
      <li>
        <router-link to='/home'>
          <img src='./img/4@2x.png' alt>
          <span>歌手</span>
        </router-link>
      </li>
      <li>
        <router-link to='/album'>
          <img src='./img/5@2x.png' alt>
          <span>专辑</span>
        </router-link>
      </li>
      <li>
        <router-link to='/ranking'>
          <img src='./img/6@2x.png' alt>
          <span>排行</span>
        </router-link>
      </li>
      <li>
        <router-link to='/radio'>
          <img src='./img/7@2x.png' alt>
          <span>电台</span>
        </router-link>
      </li>
      <li>
        <router-link to='/home'>
          <img src='./img/8@2x.png' alt>
          <span>歌单</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.list {
  font-size: 0.14rem;
  ul{
      display:flex;
      padding:.21rem 0;
      border-bottom:.01rem solid rgb(232,232,232);
      li{
          flex:1;
          a{
              display:flex;
              flex-direction: column;
              align-items: center;
              color:rgb(51,51,51);
              img{
                  width:.52rem;
                  margin-bottom:.05rem;
              }
          }
      }
  }
}
</style>


