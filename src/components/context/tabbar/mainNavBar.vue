<template>
  <nav-bar>
    <nav-bar-item path="/movie">
      <!-- <img src="" alt="" slot="item-icon"> -->
      <a href="javascript:;" slot="item-text">首页</a>
    </nav-bar-item>
    <nav-bar-item path="/cinemas">
      <!-- <img src="" alt="" slot="item-icon"> -->
      <a href="javascript:;" slot="item-text">影院</a>
    </nav-bar-item>
    <nav-bar-item path="/video">
      <!-- <img src="" alt="" slot="item-icon"> -->
      <a href="javascript:;" slot="item-text">小视频</a>
    </nav-bar-item>
    <nav-bar-item path="/profile">
      <!-- <img src="" alt="" slot="item-icon"> -->
      <a href="javascript:;" slot="item-text">我的</a>
    </nav-bar-item>
  </nav-bar>
</template>

<script>
import NavBar from "../../common/navbar/Navbar"
import NavBarItem from '../../common/navbar/NavBarItem'
export default {
  components: { NavBar,NavBarItem }
}
</script>

<style>

#nav-bar .nav-item {
  width: 25%;
}
</style>