<script setup>
	const model = defineModel();
</script>

<template>
  <button type="submit" class='btn-submit'>Отправить</button>
</template>

<style scoped>
	.btn-submit{
		margin-left: auto;
		padding: 15px 30px;
		
		width: max-content;
		display: block;
		
		border: 2px solid #347EE8;
		color: #347EE8;
		font-weight: bold;
	}
</style>