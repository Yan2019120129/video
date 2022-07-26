<template>
    <div>
        <h1>你好！！！</h1>
    </div>
</template>
<script>
import Video from '../components/Video'
export default {
    name: 'Home',
    comments: {
        Video,
    },
    mounted(){
        console.log("Home");
    },
    data() {
        return {
            hello: 'MyHome'
        }
    }
}
</script>
<style>
</style>