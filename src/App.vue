<template>
	<div class='main'>
		<div class='main-left'>
			<Sidebar/>
		</div>
		<div class='main-right'>
			<RouterView/>
		</div>
	</div>
</template>

<script setup>
	import Sidebar from './components/Sidebar/Sidebar.vue'
</script>

