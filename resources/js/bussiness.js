require('./bootstrap');

import Vue from 'vue';

Vue.component('footer-section', require('./components/frontend/footer/footerComponent.vue').default)
Vue.component('business-section', require('./components/frontend/businesspage/business-headerComponent.vue').default)
Vue.component('business-introduction-section', require('./components/frontend/businesspage/business-introductionComponent.vue').default)
Vue.component('business-booking-section', require('./components/frontend/businesspage/business-bookingComponent.vue').default)
Vue.component('business-gallery-section', require('./components/frontend/businesspage/business-galleryComponent.vue').default)
Vue.component('logo-sitename-section', require('./components/frontend/businesspage/logo-sitenameComponent.vue').default)





	const app = new Vue({

	el: '#app', 

});