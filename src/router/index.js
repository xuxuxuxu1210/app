import Vue from 'vue'
import Router from 'vue-router'
import ranking from './../components/ranking/ranking'
import First from '../components/guide/first'
import Guide from './../components/guide/guide'
import Guide2 from './../components/guide/guide2'
import Guide3 from './../components/guide/guide3'
import Login from '../components/login/login'
import Register from '../components/register/register' 
import Home from './../components/home/home'
import Nearby from './../components/nearby/nearby'
import My from './../components/my/my'
 import Album from './../components/album/album.vue'
import Radio from './../components/radio/radio.vue'
import Seneral from './../components/General/General.vue'
import Seek from '../components/seek/seek'
import Play from '../components/play/play'
import Attention from './../components/attention/attention'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/guide2',
      name: 'Guide2',
      component: Guide2
    },
    {
      path: '/guide3',
      name: 'Guide3',
      component: Guide3
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/nearby',
      name: 'Nearby',
      component: Nearby,
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/General',
      name: 'Seneral',
      component: Seneral
    },
    {
      path: '/seek',
      name: 'Seek',
      component: Seek
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/attention',
      name: 'Attention',
      component: Attention
    },
  ]
})
