<script setup>
	const model = defineModel();
	const props = defineProps(['text']);
</script>

<template>
	<div class='agree'>
    <input type="checkbox" v-model="model">
		<span>{{ text }}</span>
	</div>
</template>

<style scoped>
	.agree{
		display: flex;
		gap: 10px;
	}
	.agree span{
		font-size: 12px;
	}
</style>