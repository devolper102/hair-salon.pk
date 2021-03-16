require('./bootstrap');

import Vue from 'vue';

Vue.component('header-section', require('./components/frontend/header/headerComponent.vue').default)	
Vue.component('footer-section', require('./components/frontend/footer/footerComponent.vue').default)		
Vue.component('sliderrecommended-section', require('./components/frontend/homepage/sliderrecommendedComponent.vue').default)
Vue.component('androidimage-section', require('./components/frontend/homepage/androidimageComponent.vue').default) 	
Vue.component('blogpost-section', require('./components/frontend/homepage/blogpostComponent.vue').default)
Vue.component('clientslider-section', require('./components/frontend/homepage/clientsliderComponent.vue').default)  	
Vue.component('popularcategories-section', require('./components/frontend/homepage/popularcategoriesComponent.vue').default)  	
Vue.component('how-it-works-section', require('./components/frontend/homepage/how-it-works-sectionComponent').default)
	
	const app = new Vue({


	el: '#app', 

});