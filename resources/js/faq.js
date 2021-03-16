require('./bootstrap');

import Vue from 'vue';

Vue.component('footer-section', require('./components/frontend/footer/footerComponent.vue').default)
Vue.component('pricing-header-section', require('./components/frontend/pricingpage/pricing-headerComponent.vue').default)
Vue.component('faq-banner-section', require('./components/frontend/faqpage/faq-bannerComponent.vue').default)



	const app = new Vue({

	el: '#app', 

});