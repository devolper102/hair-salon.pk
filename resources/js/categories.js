require('./bootstrap');

import Vue from 'vue';

Vue.component('categories-header-section', require('./components/frontend/categories-page/beauty-categories-headerComponent.vue').default)
Vue.component('footer-section', require('./components/frontend/footer/footerComponent.vue').default)
Vue.component('beauty-categories-section', require('./components/frontend/categories-page/beauty-banner-categoriesComponent.vue').default)
Vue.component('popularcategories-section', require('./components/frontend/homepage/popularcategoriesComponent.vue').default)  	



	const app = new Vue({

	el: '#app', 

});