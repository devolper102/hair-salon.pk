require('./bootstrap');

import Vue from 'vue';

Vue.component('footer-section', require('./components/frontend/footer/footerComponent.vue').default)
Vue.component('bussiness-section', require('./components/frontend/bussinesspage/bussiness-sectionComponent.vue').default)




	const app = new Vue({

	el: '#app', 

});