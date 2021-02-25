<template>
  <div class="tabs-bar-wrap">
    <tabs-nav>
      <li slot="left">正在热映</li>
      <li slot="right">即将上映</li>
    </tabs-nav>
  </div> 
</template>

<script>
import TabsNav from './TabsNav'
export default {
  components: { TabsNav  }
}
</script>

<style>
.tabs-bar-wrap {
    position: relative;
    z-index: 100;
    width: 100%;
    height: 49px;
    line-height: 49px;
    font-size: 14px;
    color: #191a1b;
    background: #fff;
    border-bottom: 1px solid #e2e2e2;
    box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
    overflow-x: hidden;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
</style>