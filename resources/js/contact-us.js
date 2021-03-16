require('./bootstrap');

import Vue from 'vue';

Vue.component('footer-section', require('./components/frontend/footer/footerComponent.vue').default)
Vue.component('pricing-header-section', require('./components/frontend/pricingpage/pricing-headerComponent.vue').default)
Vue.component('logo-sitename-section', require('./components/frontend/businesspage/logo-sitenameComponent.vue').default)
Vue.component('contact-us-banner-section', require('./components/frontend/contact-uspage/contact-usbannerComponent.vue').default)
Vue.component('contact-form-section', require('./components/frontend/contact-uspage/contact-formComponent.vue').default)


	const app = new Vue({

	el: '#app', 

});