<template>
  <div class="nowPlayingList-wrap">
    <now-playing-item>
      <div class="nowPlayingFilmImg" slot="left">
        123
      </div>
      <div class="nowPlayingFilmInfo" slot="center">
        456
      </div>
      <div class="nowPlayingFilmBuy" slot="right">
          <a href="">购票</a>
      </div>
    </now-playing-item>
  </div>
</template>

<script>
import NowPlayingItem from '../playing/NowPlayingItem'
export default {
  components: { NowPlayingItem }
}
</script>

<style>
.nowPlayingList-wrap {
  background: #fff;
}
.nowPlayingList-wrap ul {
  list-style: none;
}
.nowPlayingFilmImg {
  width: 66px;
  height: 94px;
  background-color: pink;
}
.nowPlayingFilmInfo {
  flex-grow: 2;
}
.nowPlayingFilmBuy {
  line-height: 25px;
  height: 25px;
  width: 50px;
  color: #fff;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: relative;
}
.nowPlayingFilmBuy::after {
    content: " ";
    -webkit-transform: scale(.5);
    -ms-transform: scale(.5);
    transform: scale(.5);
    position: absolute;
    border: 1px solid #ff5f16;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
}
.nowPlayingFilmBuy a {
  color: #ff5f16;
}
</style>