<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <!-- tab-bar-item 组件 -->
      <tab-bar-item path="/home" >
        <img slot="item-icon" src="./assets/image/tabbar/home.jpeg"  alt="">
        <img slot="item-icon-active" src="./assets/image/tabbar/home-active.jpg"  alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor = 'blue'>
        <img slot="item-icon" src="./assets/image/tabbar/category.jpeg" alt="">
        <img slot="item-icon-active" src="./assets/image/tabbar/category-active.jpeg"  alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" >
        <img slot="item-icon" src="./assets/image/tabbar/shopcart.jpg"  alt="">
        <img slot="item-icon-active" src="./assets/image/tabbar/shopcart-active.jpg"  alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile"  activeColor = 'green'>
        <img slot="item-icon" src="./assets/image/tabbar/profile.jpeg"  alt="">
        <img slot="item-icon-active" src="./assets/image/tabbar/profile-active.jpeg"  alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem";
  export default {
    name: 'App',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
