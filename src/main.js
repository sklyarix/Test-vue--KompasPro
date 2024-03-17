import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './assets/styles/index.scss'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

import Home from './components/News/News.vue'
import CreateNews from './components/News/CreateNews.vue'

library.add(fas);


const routes = [
  { path: '/', component: Home },
  { path: '/create', component: CreateNews },
]

const router = createRouter({
	history: createWebHistory(),
	routes
})


createApp(App)
	.component('fa', FontAwesomeIcon)
	.use(router)
	.mount('#app')

/* todo - 2
* [+]
* [+]
* */