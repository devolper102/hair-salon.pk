require('./bootstrap');

import Vue from 'vue';

Vue.component('header-section', require('./components/frontend/header/beautysaloonComponent.vue').default)	
Vue.component('beauty-slider-section', require('./components/frontend/beautysaloonpage/beautysliderComponent.vue').default)	
Vue.component('beauty-booking-section', require('./components/frontend/beautysaloonpage/beautybookingComponent.vue').default)
Vue.component('gallery-section', require('./components/frontend/beautysaloonpage/galleryComponent.vue').default)		
Vue.component('footer-section', require('./components/frontend/footer/footerComponent.vue').default)
Vue.component('client-reply-section', require('./components/frontend/beautysaloonpage/clientreplyComponent.vue').default)
Vue.component('popularcategories-section', require('./components/frontend/homepage/popularcategoriesComponent.vue').default)  					
	const app = new Vue({

	el: '#app', 

});