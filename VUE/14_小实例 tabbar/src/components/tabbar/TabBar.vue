<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar{
    /*改成水平放置*/
    display: flex;
    background-color: #f6f6f6;

    /*放在最底部*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /*底部添加一个小阴影*/
    box-shadow:0px -1px 1px rgba(100,100,100,0.3);
  }
</style>
