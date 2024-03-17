<template>
	<div class='sidebar'>
		<div class='sidebar-header'>
			<div class='user'>
				<div class='user-icon'>
					   <img src="/vue.svg" alt="Пример изображения">
				</div>
				<div class='user-info'>
					<div class='user-name'>Test</div>
					<div class='user-mail'>test@mail.ru</div>
				</div>
			</div>
		</div>
		<RouterLink to="/" class='link'>
			<fa icon='house'/>
			<span>Все новости</span>
		</RouterLink>
    <RouterLink to="/create" class='link'>
	    <fa icon='pen'></fa>
			<span>Добавить запись</span>
    </RouterLink>
	</div>
</template>

<style src='./Sidebar.scss'></style>

