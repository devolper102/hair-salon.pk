<template>
	<div>
		<header>
			<div class="container">
				
				<!-- Dropdown Input -->
<div class="main-service-input w-45 d-block position-relative">
<div class="row">
<div class="col-6 pr-0">
	<div class="form-group input-services position-relative w-100 float-right mb-0">
		<a class="text-white position-absolute" 
		href="jawascript:void(0)">
			<i aria-hidden="true" class="fa fa-search"></i>
		</a>
 	<div class="categories-select">
        <model-select class="categories-dropdown input-bg text-white pl-5 pr-2 h-50 border-0 text-size-15"

         :options="options1"

            v-model="item"

                placeholder="Book your services....">

	        <!-- <div class="looking-services bg-time pt-2 pb-2 pl-3 
	        pr-3 mt-2">
	          	<span class="color-date text-size-14">
					What are you looking for
				</span>
	        </div>
	        <div class="bg-white w-100 d-inline-block box-shadow">
	        	
	        	<span class="color-date text-size-14 w-100 
	        	d-inline-block p-3">Popular services
	        	</span>
	            <div class="search-btn w-100 d-inline-block text-center mt-2 mb-3">
		      	    <a href="javascript:void(0)" class="text-white bg-gold text-size-14 d-inline-block">
						Search
					</a>
		        </div>
	        </div>   -->
        </model-select>
    </div>
	</div>
	</div>
		<div class="col-6 pl-0">
	<div class="form-group input-services input-services-2 position-relative w-100 float-left mb-0">
		<a href="javascript:void(0)" class="text-white position-absolute"><i aria-hidden="true" class="fa fa-map-marker"></i>
		</a>
		<a href="javascript:void(0)" class="location-icon text-white bg-gold position-absolute d-inline-block text-center p-1">
			<i aria-hidden="true" class="fa fa-location-arrow"></i>
		</a>
        <model-select class="location-dropdown input-bg text-white pl-5 pr-2 h-50 border-0 text-size-15" :options="options2"
            v-model="item"
                placeholder="Where?">

        </model-select>

    <!-- Dropdown Menu -->
    
			</div>
		</div>
	</div>
</div>
				<div class="row">
					<div class="col-12 mt-4">
						<nav class="navbar navbar-expand-lg navbar-light">
					  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span class="navbar-toggler-icon"></span>
					  </button>
					  <div class="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul class="navbar-nav m-auto w-40 feature-nav">
					      <li class="nav-item">
					        <a class="text-black text-size-15 mr-5 font-weight-bold" 
					        href="jawascript:void(0)">Features </a>
					      </li>
					      <li class="nav-item">
					        <a class="text-black text-size-15 mr-5 font-weight-bold" href="jawascript:void(0)">Pricing</a>
					      </li>
					       <li class="nav-item">
					        <a class="text-black text-size-15 mr-5 font-weight-bold" href="jawascript:void(0)">Blog
					        </a>
					      </li>
					       <li class="nav-item">
					        <a class="text-black text-size-15 mr-5 font-weight-bold" href="jawascript:void(0)">FAQ</a>
					      </li>
					       <li class="nav-item">
					        <a class="text-black text-size-15 mr-5 font-weight-bold" 
					        href="jawascript:void(0)">More
					        </a>
					      </li>
					    </ul>
					  </div>
					</nav>
					</div>
				</div>
			</div>	
		</header>
	</div>
</template>

<script>

import Dropdown from 'vue-simple-search-dropdown';
import { ModelSelect } from 'vue-search-select'
export default {
	 components: {
      ModelSelect
    },
  name: "feature-headerComponent",

    data() {
      return {
      	 options1: [
          // { value: '0', text: 'What are you looking for'},
          // { value: '0', text: 'Popular services'},
          { value: '1', text: 'Hair cut'},
          { value: '2', text: 'Mens hair cut'},
          { value: '3', text: 'Beard trim'},
          { value: '4', text: 'Shave'},
          { value: '5', text: 'Beard trim'},
          { value: '1', text: 'Hair cut'},
          { value: '2', text: 'Mens hair cut'},
          { value: '3', text: 'Beard trim'},
          { value: '4', text: 'Shave'},
          { value: '5', text: 'Beard trim'},
           // { value: '5', text: 'search'},
        ],
        item: {
          value: '',
          text: ''
        },
        options2: [
          { value: '1', text: 'Lahore'},
          { value: '2', text: 'Gujrat'},
          { value: '3', text: 'Gujranwala'},
          { value: '4', text: 'Faisalabad'},
          { value: '5', text: 'Karachi'},
          { value: '5', text: 'Islamabad'}
        ],
        item2: '',
        selected: {},
        optionsShown: false,
        searchFilter: '',
        searchFilter: ''
      }
    },
    created() {
    
    },
    methods: {
        reset () {
        this.item = {}
      },
      selectFromParentComponent1 () {
        // select option from parent component
        this.item = this.options[0]
      },
      reset2 () {
        this.item2 = ''
      },
      selectFromParentComponent2 () {
        // select option from parent component
        this.item2 = this.options2[0].value
      }
    }

};

</script>

<style>

</style>