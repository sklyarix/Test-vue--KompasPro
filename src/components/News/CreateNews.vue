<template>
	<div class='content'>
		<h1>Добавить запись</h1>
		<div class='content-row'>
			<div class='content-wrapper'>
				<div class='form'>
			    <Input v-model='formValues.name' placeholder='Ваше имя' type='text'/>
					<Input v-model='formValues.email' placeholder='Email' type='email' />
					<div>
						<div class='title'>Пол</div>
						<Radio :options='options' v-model='formValues.gender'/>
					</div>
					<TextArea v-model='formValues.comments'/>
					<Checkbox v-model="formValues.agree" text='Согласен на обработку персональных данных'/>
			    <SubmitButton @click="clickSubmit"/>
	      </div>
			</div>
			<div class='content-wrapper border-blue' v-show='isShowContent'>
			  <ul class='content-list'>
			    <li class='content-list-item' v-for="(value, key) in this.showContent" :key="key">
			      <div class='name'>{{ key }}:</div> <div class='value'>{{ value }}</div>
			    </li>
			  </ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Input from './../../ui/Input/Input.vue';
	import Radio from './../../ui/Radio/Radio.vue';
	import TextArea from './../../ui/TextArea/TextArea.vue';
	import Checkbox from './../../ui/Checkbox/Checkbox.vue';
	import SubmitButton from './../../ui/SubmitButton/SubmitButton.vue';
	export default {
	  components: {
			Input,
	    Radio,
		  TextArea,
		  Checkbox,
		  SubmitButton
	  },
	  data() {
		  return {
				formValues:{
					name: '',
					email: '',
					gender: 'Мужской',
					comments: '',
					agree: ''
				},
			  options: [
				  { value: 'Мужской' },
				  { value: 'Женский' }
			  ],
			  showContent:'',
			  isShowContent:false,
		  }
	  },
		methods: {
			clickSubmit: function(event) {
				event.preventDefault()
				
				this.showContent = { ...this.formValues}
				this.resetForm()
				
				this.isShowContent= true;
			},
			resetForm: function(){
				this.formValues.name = '';
				this.formValues.email = '';
				this.formValues.gender = 'Мужской';
				this.formValues.comments = '';
				this.formValues.agree = '';
			},
		}
	}
</script>

<style src='./CreateNews.scss'></style>
