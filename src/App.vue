<template>
  <div class="app">
    <!-- 这个容器是专门用于登入界面的 给这个容器设置一个名字 
    避免和其他的容器混合 判断path的地址是否为'/login' 如果是则就跳转到登入也否则就跳转到其他页面 -->
    <router-view v-if='$route.path=="/login"' name="login"></router-view>
  <!-- 其他页面 -->
    <Layout v-else />
  </div>
</template>

<script>
 import { Layout } from '@/components'
export default {
  name:'App',
  components: {
     Layout,
  },
  mounted() {
    //查看path的地址
    console.log(this.$route)
  }
}
</script>

<style lang='scss'>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app{
  width: 100%;
  height: 100%;
}
</style>
