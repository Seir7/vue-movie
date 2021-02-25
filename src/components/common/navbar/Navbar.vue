<template>
  <ul id="nav-bar">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#nav-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 49px;
  line-height: 49px;
  font-size: 13px;
  text-align: center;
  background-color: #fff;
  border-top: 1px solid #e2e2e2;
}
</style>