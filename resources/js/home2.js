require('./bootstrap');

import Vue from 'vue';

Vue.component('header-section', require('./components/frontend/header/headerComponent.vue').default)	
Vue.component('footer-section', require('./components/frontend/footer/footerComponent.vue').default)		
Vue.component('application-download-section', require('./components/frontend/home2page/application-downloadComponent.vue').default)		
Vue.component('sliderrecommended-section', require('./components/frontend/homepage/sliderrecommendedComponent.vue').default)
Vue.component('androidimage-section', require('./components/frontend/homepage/androidimageComponent.vue').default) 	


	const app = new Vue({

	el: '#app', 

});