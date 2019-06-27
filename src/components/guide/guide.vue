<template>
  <div class="guide1">
      <router-link to="/guide2">
          <img src="../guide-img/guide-right.png">
      </router-link>
      <div>
          <p>就算现实孤单严重，</p>
          <p>我们也有选择权寻找温暖。</p>
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

  }
}
</script>

<style scoped lang="less">
    .guide1{
        width: 100%;
        height: 100%;
        background: url('../guide-img/guide-one.png') 0 0 repeat;
        background-size:100% 100% ;
        a{
            display: block;
            position: absolute;
            right: 0;
            top: 3.11rem;
            width: .44rem;
            height: .44rem;
        }
        div{
            font-size: .2rem;
            position: absolute;
            top:75%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: #F6F6F6;
            p{
            text-align: center;
            white-space: nowrap;
            padding-bottom:.04rem; 
            }
        }
    }
</style>
