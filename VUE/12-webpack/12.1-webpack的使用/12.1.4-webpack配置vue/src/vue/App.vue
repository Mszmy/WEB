<template>
    <div class="title">
        {{message}}
    </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return{
                message: 'hello, webpack-- app.vue'
            }
        }
    }
</script>

<!--样式-->
<style scoped>
    .title{
        color:green;
    }
</style>
