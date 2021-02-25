<template>
  <ul class="tabs-nav">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </ul>
</template>

<script>
export default {

}
</script>

<style>
.tabs-nav {
  display: flex;
  text-align: center;
}
.tabs-nav li {
  flex: 1;
}
</style>