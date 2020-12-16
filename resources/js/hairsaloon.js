require('./bootstrap');

import Vue from 'vue';

Vue.component('other-hairsaloon-list', require('./components/frontend/hair-saloon/other-hairsaloon-listComponent.vue').default)
Vue.component('footer-section', require('./components/frontend/footer/footerComponent.vue').default)		
Vue.component('sliderrecommended-section', require('./components/frontend/homepage/sliderrecommendedComponent.vue').default)
Vue.component('popularcategories-section', require('./components/frontend/homepage/popularcategoriesComponent.vue').default)  	
Vue.component('header-section', require('./components/frontend/header/beautysaloonComponent.vue').default)	


	const app = new Vue({

	el: '#app', 

});