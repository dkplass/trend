<template>
  <div>
    <nav aria-label="breadcrumb" class="bg-light mt-4">
      <ol class="breadcrumb">
        <li
          class="breadcrumb-item"
          v-for="(breadcrumb, key) in breadcrumbList"
          :key="key"
          @click="routeTo(key)"
          :class="{'active': breadcrumb.link}"
        >{{ breadcrumb.name }}</li>
        <li class="breadcrumb-item active" v-if="category">{{ category }}</li>
      </ol>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props: ['category'],
  data () {
    return {
      breadcrumbList: []
    }
  },
  methods: {
    updateBreadcrumbList () {
      const vm = this
      vm.breadcrumbList = vm.$route.meta.breadcrumb
    },
    routeTo (routeGo) {
      const vm = this
      if (vm.breadcrumbList[routeGo].link === this.$route.path) {
        this.$router.go()
      } else {
        this.$router.push(vm.breadcrumbList[routeGo].link)
      }
    }
  },
  watch: {
    $route (to, from) {
      // 監聽$route變化
      this.updateBreadcrumbList()
    }
  },
  mounted () {
    this.updateBreadcrumbList()
  }
}
</script>
<style>
.breadcrumb-item {
  cursor: pointer;
}
</style>
