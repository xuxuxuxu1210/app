<template>
  <div class="home">
    <Head></Head>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./img/home-1.png" alt="轮播图">
        </div>
        <div class="swiper-slide">
          <img src="./img/home-2.jpg" alt="轮播图">
        </div>
        <div class="swiper-slide">
          <img src="./img/home-3.jpg" alt="轮播图">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 列表 -->
    <List></List>
    <!-- 精选歌单 最新 -->
    <Sel></Sel>
    <Recommend></Recommend>
    <Group></Group>
  </div>
</template>

<script>
import Swiper from "swiper";
import Head from "./head";
import Recommend from "./recommend";
import List from "./list";
import Sel from './sel';
import Group from './../group-img/group-img'

export default {
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  components: {
    Head,
    Recommend,
    List,
    Sel,
    Group,
  }
};
</script>

<style lang="less">
@import url("./../../../static/css/swiper.min.css");
.home {
  .swiper-container {
    .swiper-pagination {
      span {
        display: inline-block;
        width: 0.15rem;
        height: 0.15rem;
      }
      .swiper-pagination-bullet {
        position: relative;
        top: 0.2rem;
        background: rgba(263, 50, 165);
        margin-right: 0.35rem;
      }
      .swiper-pagination-bullet:last-child {
        margin-right: 0;
      }
    }
  }
}

</style>
