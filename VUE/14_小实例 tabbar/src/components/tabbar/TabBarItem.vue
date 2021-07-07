<template>
  <div id="tab-bar-item" @click="itemClick">
    <!-- 不活跃的状态下 显示原始图片； 活跃状态下 显示后面的图片-->
    <div v-if="!isActive"><slot name ='item-icon'></slot></div>
    <div v-else><slot name ='item-icon-active'></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
          path:String,
          activeColor:{
            type:String,
            default:'red',
          }
        },
        data(){
          return{
            // isActive:false
          }
        },
        // 计算属性
        computed:{
          isActive(){
            //查看当前活跃状态下的有没有我当前这个path
            return this.$route.path.indexOf(this.path) !== -1
          },
          activeStyle(){
            //如果处于活跃状态，则给它一个动态的颜色，否则给它空
            return this.isActive ? {color:this.activeColor}:{}
          }
        },
        methods:{
          itemClick(){
            this.$router.replace(this.path)
          }
        }
    }
</script>

<style scoped>
  #tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  #tab-bar-item img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }
</style>
