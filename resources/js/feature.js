require('./bootstrap');

import Vue from 'vue';
import 'vue-search-select/dist/VueSearchSelect.css'

Vue.component('footer-section', require('./components/frontend/footer/footerComponent.vue').default)
Vue.component('feature-header-section', require('./components/frontend/featurepage/feature-headerComponent.vue').default)
Vue.component('feature-banner-section', require('./components/frontend/featurepage/feature-bannerComponent.vue').default)
Vue.component('feature-clientapp-section', require('./components/frontend/featurepage/feature-clientappComponent.vue').default)
Vue.component('calendar-management-section', require('./components/frontend/featurepage/calendar-managementComponent.vue').default)
Vue.component('feature-introduction-section', require('./components/frontend/featurepage/feature-introductionComponent.vue').default)
Vue.component('feature-bgimage-section', require('./components/frontend/featurepage/feature-bgimageComponent.vue').default)




	const app = new Vue({

	el: '#app', 

});