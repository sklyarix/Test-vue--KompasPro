<script setup>
	const props = defineProps(['options']);
  const model = defineModel();
</script>



<template>
	
	<div class='radio-wrapper'>
	 <label v-for="(option, index) in options" :key="index" class="radio-option" >
	  <input type="radio" class="radio-input" :value="option.value" v-model="model"/>
	  <div class="radio-square" :class="{ 'selected': model === option.value }"></div>
	  <span class="radio-label">{{ option.value }}</span>
	 </label>
	</div>

</template>

<style scoped>
	.radio-option {
	  display: flex;
	  align-items: center;
	  margin-bottom: 10px;
	  cursor: pointer;
	}
	
	.radio-input {
	  display: none;
	}
	
	.radio-square {
	  width: 20px;
	  height: 20px;
	  border: 1px solid #171717;
	  margin-right: 10px;
	}
	
	.radio-square.selected {
		border: 1px solid #347EE8;
	  background-color: #347EE8;
	}
	
	.radio-label {
	  font-size: 16px;
	}
	.radio-wrapper{
		display: flex;
		gap: 15px;
	}
</style>
