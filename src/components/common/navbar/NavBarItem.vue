<template>
    <li class="nav-item" @click="itemClick">
      <slot name="item-text"></slot>
      <slot name="item-icon"></slot>
    </li>
</template>

<script>
export default {
  props: {
    path: {
      type: String
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>

</style>