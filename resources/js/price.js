require('./bootstrap');

import Vue from 'vue';

Vue.component('footer-section', require('./components/frontend/footer/footerComponent.vue').default)
Vue.component('pricing-header-section', require('./components/frontend/pricingpage/pricing-headerComponent.vue').default)
Vue.component('pricing-banner-section', require('./components/frontend/pricingpage/pricing-bannerComponent.vue').default)
Vue.component('logo-sitename-section', require('./components/frontend/businesspage/logo-sitenameComponent.vue').default)
Vue.component('pricing-faq-section', require('./components/frontend/pricingpage/pricing-faqComponent.vue').default)


	const app = new Vue({

	el: '#app', 

});