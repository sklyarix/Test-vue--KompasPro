<script setup>
	const model = defineModel();
</script>

<template>
	<div class='textarea-wrapper'>
		<div class='counter'>Символов: {{model.length}}</div>
		<textarea class='textarea' placeholder='Сообщение' v-model='model'></textarea>
	</div>
</template>

<script>
export default {
  props: ['placeholder']
}
</script>

<style scoped>
 .textarea{
	 padding: 10px;
	 
	 width: 100%;
	 height: 150px;
	 
	 border: 2px solid #D4D4D4;
	 border-radius: 5px;
 }
 .textarea:focus{
	 border: 2px solid #347EE8;
 }
 .counter{
	 text-align: right;
	 color: #D4D4D4;
	 font-size: 14px;
 }
</style>