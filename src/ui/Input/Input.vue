<script setup>
	const model = defineModel();
</script>

<template>
  <input type='type'
         placeholder='placeholder'
         class='input'
         v-model='model'
         />
</template>

<script>
export default {
  props: ['placeholder', 'type'],
}
</script>

<style scoped>
	.input{
		width: 100%;
		padding: 10px;
		border: 2px solid #D4D4D4;
		border-radius: 5px;
	}
	
	.input:focus{
	 border: 2px solid #347EE8;
 }
</style>
