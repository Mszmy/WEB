<template>
    <div>
      <h2>我是profile组件</h2>

      <!-- 获取参数  -->
      <h2>{{$route.query}}</h2>
      <h2>{{$route.query.name}}</h2>
      <h2>{{$route.query.age}}</h2>
    </div>
</template>

<script>
    export default {
        name: "profile"
    }
</script>

<style scoped>

</style>
