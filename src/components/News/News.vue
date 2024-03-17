<template>
	<div class='content'>
		<h1>Все новости</h1>
		<div v-if="isLoading" class='content-wrapper'>Загрузка...</div>
		<div v-else class='content-wrapper'>
			<div v-if="errored">Ошибка</div>
			<ul v-else class='news-list'>
				<li v-for="post in posts" :key="post.id" class='news'>
					<div class='news-id'>
						{{post.id}}
					</div>
					<div class='wrapper'>
						<h2 class='news-title' @click="handleClick">
								{{post.title}}
						</h2>
						<div class='news-author'>id автора: {{post.userId}}</div>
						<div class='news-body'>{{post.body}}</div>
					</div>
					<button class='news-btn news-btn--remove' @click="removeClick">Удалить</button>
				</li>
			</ul>
		</div>
	</div>
	<Alert v-show="isShowAlert" @childEvent="handleAlert" />
</template>

<script>
	import axios from 'axios'
	import Alert from '../../ui/Alert/Alert.vue'
	export default {
		components: { Alert },
		
		data() {
			return{
				posts: [],
				isLoading: true,
				errored: false,
				isShowAlert: false,
				newsActive: '',
			}
		},
		
		mounted() {
			axios
				.get('https://jsonplaceholder.typicode.com/posts')
				.then(res => this.posts = res.data)
				.catch(error => {
	        console.log(error);
	        this.errored = true;
	      })
				.finally(() => (this.isLoading = false));
		},
		
		methods: {
			 removeClick: function(event){
				 this.isShowAlert = true;
				 this.newsActive = event.target.closest('.news');
			 },
			 handleClick: function(event) {
            const news = event.target.closest('.news');
						news.classList.toggle('active')
			 },
			 handleAlert: function(value) {
				 if(value){
					 const idNews = +this.newsActive.querySelector('.news-id').textContent;
					 axios
						 .delete (`https://jsonplaceholder.typicode.com/posts/${idNews}`)
						 .then(
							 this.newsActive.remove()
						 )
				 }
				  this.isShowAlert = false;
			 }
		}
	}
</script>

<style src='./News.scss'></style>