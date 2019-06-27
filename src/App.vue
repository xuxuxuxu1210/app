<template>
  <div id="app">
 
    <router-view/>
  </div>
</template>

<script>
import setRem from './../static/js/rem.js';
import Group from './components/group-img/group-img'
export default {
  name: 'App',
  components:{
   Group
  },
  mounted(){
    setRem.setrem();
    window.onresize=setRem.setrem;
    
}
}
</script>

<style>
@import './../static/css/common.css';
@import './../static/css/swiper.min.css';
html,body{
  width:100%;
  height:100%;
}


#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
