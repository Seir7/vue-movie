<template>
    <ul>
      <li class="nowPlayingItem">
        <a href="javascript:;" class="nowPlayingWrap">
          <slot name="left"></slot>
          <slot name="center"></slot>
          <slot name="right"></slot>
        </a>
      </li>
    </ul> 
</template>

<script>
export default {

}
</script>

<style>
.nowPlayingItem {
  display: flex;
  position: relative;
  padding: 15px 15px 15px 15px;
  height: 94px;
}
.nowPlayingWrap {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-around;
  flex: 3;
}
</style>