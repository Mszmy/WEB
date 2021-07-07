<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" replace active-class="active">关于</router-link>

<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->

    <!-- 动态获取路由 -->
    <router-link :to="'/User/'+ userId">User</router-link>

    <!-- 对象类型 -->
    <router-link :to="{
      path:'/profile',
      query:{name:'zzz',age:'18'},
      }">档案</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'lisi'
    }
  },
  methods:{
    homeClick(){
      // 通过代码的方式修改路由 vue-router
      this.$router.push('/home')
      console.log('homeClick')
    },
    aboutClick(){
      this.$router.push('/about')
      console.log('aboutClick')
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active{
  color: red;
}
</style>
