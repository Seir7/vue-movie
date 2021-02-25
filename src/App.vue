<template>
  <div id="app">
    <Header></Header>
    <main-nav-bar></main-nav-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import mainNavBar from './components/context/tabbar/mainNavBar'
import Header from './components/context/header/Header'
// import Swiper from './components/common/swiper/Swiper'
export default {
  name: 'App',
  components: { mainNavBar,Header }
}
</script>

<style>
@import url("./assets/css/base.css");
</style>
