<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="sendSchoolName">发送学校名</button>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'广西',
			}
		},
		props:['setSchoolName'],
		methods:{
			sendSchoolName(){
				this.setSchoolName(this.name)
			}
		}
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding:5px;
	}
</style>