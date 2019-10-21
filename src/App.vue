<template>
  <div id="app">
    <Loading :active.sync="isLoading"></Loading>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/all";
</style>
