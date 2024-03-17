<template>
	<div class='alert'>
		<div class='alert-wrapper'>
				<div class='modal-content'>
						Вы точно хотите удалить?
						<div class='flex-j-center'>
							<button class="btn-alert btn-alert--yes" @click="handleClickYes">Да</button>
							<button class="btn-alert btn-alert--no" @click="handleClickNo">Нет</button>
						</div>
				</div>
		</div>
	</div>
</template>

<style src='./Alert.scss'></style>


<script>
	export default {
	  methods: {
	    handleClickYes() {
	      this.$emit('childEvent', true);
	    },
		  handleClickNo() {
	      this.$emit('childEvent', false);
	    },
	  }
	}
</script>