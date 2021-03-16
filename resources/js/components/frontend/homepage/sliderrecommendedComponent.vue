<template>
	<div id="slider-recemmanded-main">
		<div class="container">
			<div class="row">
				<div class="col-12 mt-3">
					<div class="recommended-heading w-100 d-inline-block">
						<h2 class="text-gold font-weight-bold">Recommended</h2>
					</div>
				</div>
		    </div>
			<div class="row">
				<div class="col-12">
					<div class="hair-saloon-slider">
					<carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true"
					:navigationEnabled="true"
				    navigationNextLabel="<i class='fa fa-arrow-right'></i>"
				    navigationPrevLabel="<i class='fa fa-arrow-left'></i>"
				    :paginationEnabled="false">
					    <slide>
					        <div class="row">
					      	    <div class="col-lg-4 col-12">
					      		    <div class="row">
					                    <div class="col-6 pr-0">
						                    <div class="slider-image-text w-100 d-inline-block position-relative">
							                    <a href="javascript:void(0)">
							                        <img src="images/hair-slider-image.svg" alt="hair-slider-image picture">
							                    </a>
							                    <div class="reviews-text box-radius position-absolute">
								                    <span class="text-white font-weight-bold text-size-14">
									                    5.0
								                    </span>
								                    <p class="text-white mb-0 text-size-13">
									                    67 reviews
								                    </p>
							                    </div>
						                    </div>
					                    </div>
							            <div class="col-6 p-0">
								            <div class="bg-hair-saloon-address w-100 d-block bg-slide-address 
								            p-2">
												<a class="text-gold float-right text-size-25" 
												href="javascript:void(0)">
													<i class="fa fa-heart" aria-hidden="true"></i>
												</a>
										<span class="text-gold d-inline-block font-weight-bold text-size-15">
											Luxe Barber & Shave Lounge
										</span>
										<p class="text-white text-size-13">
											17 E Monroe, The Palmer house Hotel/ Ground Lev, Chicago, IL, 60605
										</p>
								            </div>
							            </div>	
								    </div>	
							    </div>
							    <div class="col-lg-4 col-12">
					      		    <div class="row">
					                    <div class="col-6 pr-0">
						                    <div class="slider-image-text w-100 d-inline-block position-relative">
							                    <a href="javascript:void(0)">
							                        <img src="images/hair-slider-image.svg" alt="hair-slider-image picture">
							                    </a>
							                    <div class="reviews-text box-radius position-absolute">
								                    <span class="text-white font-weight-bold text-size-14">
									                    5.0
								                    </span>
								                    <p class="text-white mb-0 text-size-13">
									                    67 reviews
								                    </p>
							                    </div>
						                    </div>
					                    </div>
							            <div class="col-6 p-0">
								            <div class="bg-hair-saloon-address w-100 d-block bg-slide-address 
								            p-2">
												<a class="text-gold float-right text-size-25" 
												href="javascript:void(0)">
													<i class="fa fa-heart" aria-hidden="true"></i>
												</a>
										<span class="text-gold d-inline-block font-weight-bold text-size-15">
											Luxe Barber & Shave Lounge
										</span>
										<p class="text-white text-size-13">
											17 E Monroe, The Palmer house Hotel/ Ground Lev, Chicago, IL, 60605
										</p>
								            </div>
							            </div>	
								    </div>	
							    </div>
							    <div class="col-lg-4 col-12">
					      		    <div class="row">
					                    <div class="col-6 pr-0">
						                    <div class="slider-image-text w-100 d-inline-block position-relative">
							                    <a href="javascript:void(0)">
							                        <img src="images/hair-slider-image.svg" alt="hair-slider-image picture">
							                    </a>
							                    <div class="reviews-text box-radius position-absolute">
								                    <span class="text-white font-weight-bold text-size-14">
									                    5.0
								                    </span>
								                    <p class="text-white mb-0 text-size-13">
									                    67 reviews
								                    </p>
							                    </div>
						                    </div>
					                    </div>
							            <div class="col-6 pl-0">
								            <div class="bg-hair-saloon-address w-100 d-block bg-slide-address 
								            p-2">
												<a class="text-gold float-right text-size-25" 
												href="javascript:void(0)">
													<i class="fa fa-heart-o" aria-hidden="true"></i>
												</a>
										<span class="text-gold d-inline-block font-weight-bold text-size-15">
											Luxe Barber & Shave Lounge
										</span>
										<p class="text-white text-size-13">
											17 E Monroe, The Palmer house Hotel/ Ground Lev, Chicago, IL, 60605
										</p>
								            </div>
							            </div>	
								    </div>	
							    </div>
					        </div>
					    </slide>
					    <slide>
					      <div class="row">
					      	    <div class="col-lg-4 col-12">
					      		    <div class="row">
					                    <div class="col-6 pr-0">
						                    <div class="slider-image-text w-100 d-inline-block position-relative">
							                    <a href="javascript:void(0)">
							                        <img src="images/hair-slider-image.svg" alt="hair-slider-image picture">
							                    </a>
							                    <div class="reviews-text box-radius position-absolute">
								                    <span class="text-white font-weight-bold text-size-14">
									                    5.0
								                    </span>
								                    <p class="text-white mb-0 text-size-13">
									                    67 reviews
								                    </p>
							                    </div>
						                    </div>
					                    </div>
							            <div class="col-6 p-0">
								            <div class="bg-hair-saloon-address w-100 d-block bg-slide-address 
								            p-2">
												<a class="text-gold float-right text-size-25" 
												href="javascript:void(0)">
													<i class="fa fa-heart" aria-hidden="true"></i>
												</a>
										<span class="text-gold d-inline-block font-weight-bold text-size-15">
											Luxe Barber & Shave Lounge
										</span>
										<p class="text-white text-size-13">
											17 E Monroe, The Palmer house Hotel/ Ground Lev, Chicago, IL, 60605
										</p>
								            </div>
							            </div>	
								    </div>	
							    </div>
							    <div class="col-lg-4 col-12">
					      		    <div class="row">
					                    <div class="col-6 pr-0">
						                    <div class="slider-image-text w-100 d-inline-block position-relative">
							                    <a href="javascript:void(0)">
							                        <img src="images/hair-slider-image.svg" alt="hair-slider-image picture">
							                    </a>
							                    <div class="reviews-text box-radius position-absolute">
								                    <span class="text-white font-weight-bold text-size-14">
									                    5.0
								                    </span>
								                    <p class="text-white mb-0 text-size-13">
									                    67 reviews
								                    </p>
							                    </div>
						                    </div>
					                    </div>
							            <div class="col-6 p-0">
								            <div class="bg-hair-saloon-address w-100 d-block bg-slide-address 
								            p-2">
												<a class="text-gold float-right text-size-25" 
												href="javascript:void(0)">
													<i class="fa fa-heart" aria-hidden="true"></i>
												</a>
										<span class="text-gold d-inline-block font-weight-bold text-size-15">
											Luxe Barber & Shave Lounge
										</span>
										<p class="text-white text-size-13">
											17 E Monroe, The Palmer house Hotel/ Ground Lev, Chicago, IL, 60605
										</p>
								            </div>
							            </div>	
								    </div>	
							    </div>
							    <div class="col-lg-4 col-12">
					      		    <div class="row">
					                    <div class="col-6 pr-0">
						                    <div class="slider-image-text w-100 d-inline-block position-relative">
							                    <a href="javascript:void(0)">
							                        <img src="images/hair-slider-image.svg" alt="hair-slider-image picture">
							                    </a>
							                    <div class="reviews-text box-radius position-absolute">
								                    <span class="text-white font-weight-bold text-size-14">
									                    5.0
								                    </span>
								                    <p class="text-white mb-0 text-size-13">
									                    67 reviews
								                    </p>
							                    </div>
						                    </div>
					                    </div>
							            <div class="col-6 pl-0">
								            <div class="bg-hair-saloon-address w-100 d-block bg-slide-address 
								            p-2">
												<a class="text-gold float-right text-size-25" 
												href="javascript:void(0)">
													<i class="fa fa-heart-o" aria-hidden="true"></i>
												</a>
										<span class="text-gold d-inline-block font-weight-bold text-size-15">
											Luxe Barber & Shave Lounge
										</span>
										<p class="text-white text-size-13">
											17 E Monroe, The Palmer house Hotel/ Ground Lev, Chicago, IL, 60605
										</p>
								            </div>
							            </div>	
								    </div>	
							    </div>
					        </div>
					    </slide>
					    <slide>
					      <div class="row">
					      	    <div class="col-lg-4 col-12">
					      		    <div class="row">
					                    <div class="col-6 pr-0">
						                    <div class="slider-image-text w-100 d-inline-block position-relative">
							                    <a href="javascript:void(0)">
							                        <img src="images/hair-slider-image.svg" alt="hair-slider-image picture">
							                    </a>
							                    <div class="reviews-text box-radius position-absolute">
								                    <span class="text-white font-weight-bold text-size-14">
									                    5.0
								                    </span>
								                    <p class="text-white mb-0 text-size-13">
									                    67 reviews
								                    </p>
							                    </div>
						                    </div>
					                    </div>
							            <div class="col-6 p-0">
								            <div class="bg-hair-saloon-address w-100 d-block bg-slide-address 
								            p-2">
												<a class="text-gold float-right text-size-25" 
												href="javascript:void(0)">
													<i class="fa fa-heart" aria-hidden="true"></i>
												</a>
										<span class="text-gold d-inline-block font-weight-bold text-size-15">
											Luxe Barber & Shave Lounge
										</span>
										<p class="text-white text-size-13">
											17 E Monroe, The Palmer house Hotel/ Ground Lev, Chicago, IL, 60605
										</p>
								            </div>
							            </div>	
								    </div>	
							    </div>
							    <div class="col-lg-4 col-12">
					      		    <div class="row">
					                    <div class="col-6 pr-0">
						                    <div class="slider-image-text w-100 d-inline-block position-relative">
							                    <a href="javascript:void(0)">
							                        <img src="images/hair-slider-image.svg" alt="hair-slider-image picture">
							                    </a>
							                    <div class="reviews-text box-radius position-absolute">
								                    <span class="text-white font-weight-bold text-size-14">
									                    5.0
								                    </span>
								                    <p class="text-white mb-0 text-size-13">
									                    67 reviews
								                    </p>
							                    </div>
						                    </div>
					                    </div>
							            <div class="col-6 p-0">
								            <div class="bg-hair-saloon-address w-100 d-block bg-slide-address 
								            p-2">
												<a class="text-gold float-right text-size-25" 
												href="javascript:void(0)">
													<i class="fa fa-heart" aria-hidden="true"></i>
												</a>
										<span class="text-gold d-inline-block font-weight-bold text-size-15">
											Luxe Barber & Shave Lounge
										</span>
										<p class="text-white text-size-13">
											17 E Monroe, The Palmer house Hotel/ Ground Lev, Chicago, IL, 60605
										</p>
								            </div>
							            </div>	
								    </div>	
							    </div>
							    <div class="col-lg-4 col-12">
					      		    <div class="row">
					                    <div class="col-6 pr-0">
						                    <div class="slider-image-text w-100 d-inline-block position-relative">
							                    <a href="javascript:void(0)">
							                        <img src="images/hair-slider-image.svg" alt="hair-slider-image picture">
							                    </a>
							                    <div class="reviews-text box-radius position-absolute">
								                    <span class="text-white font-weight-bold text-size-14">
									                    5.0
								                    </span>
								                    <p class="text-white mb-0 text-size-13">
									                    67 reviews
								                    </p>
							                    </div>
						                    </div>
					                    </div>
							            <div class="col-6 pl-0">
								            <div class="bg-hair-saloon-address w-100 d-block bg-slide-address 
								            p-2">
												<a class="text-gold float-right text-size-25" 
												href="javascript:void(0)">
													<i class="fa fa-heart-o" aria-hidden="true"></i>
												</a>
										<span class="text-gold d-inline-block font-weight-bold text-size-15">
											Luxe Barber & Shave Lounge
										</span>
										<p class="text-white text-size-13">
											17 E Monroe, The Palmer house Hotel/ Ground Lev, Chicago, IL, 60605
										</p>
								            </div>
							            </div>	
								    </div>	
							    </div>
					        </div>
					    </slide>
					    <slide>
					      <div class="row">
					      	    <div class="col-lg-4 col-12">
					      		    <div class="row">
					                    <div class="col-6 pr-0">
						                    <div class="slider-image-text w-100 d-inline-block position-relative">
							                    <a href="javascript:void(0)">
							                        <img src="images/hair-slider-image.svg" alt="hair-slider-image picture">
							                    </a>
							                    <div class="reviews-text box-radius position-absolute">
								                    <span class="text-white font-weight-bold text-size-14">
									                    5.0
								                    </span>
								                    <p class="text-white mb-0 text-size-13">
									                    67 reviews
								                    </p>
							                    </div>
						                    </div>
					                    </div>
							            <div class="col-6 p-0">
								            <div class="bg-hair-saloon-address w-100 d-block bg-slide-address 
								            p-2">
												<a class="text-gold float-right text-size-25" 
												href="javascript:void(0)">
													<i class="fa fa-heart" aria-hidden="true"></i>
												</a>
										<span class="text-gold d-inline-block font-weight-bold text-size-15">
											Luxe Barber & Shave Lounge
										</span>
										<p class="text-white text-size-13">
											17 E Monroe, The Palmer house Hotel/ Ground Lev, Chicago, IL, 60605
										</p>
								            </div>
							            </div>	
								    </div>	
							    </div>
							    <div class="col-lg-4 col-12">
					      		    <div class="row">
					                    <div class="col-6 pr-0">
						                    <div class="slider-image-text w-100 d-inline-block position-relative">
							                    <a href="javascript:void(0)">
							                        <img src="images/hair-slider-image.svg" alt="hair-slider-image picture">
							                    </a>
							                    <div class="reviews-text box-radius position-absolute">
								                    <span class="text-white font-weight-bold text-size-14">
									                    5.0
								                    </span>
								                    <p class="text-white mb-0 text-size-13">
									                    67 reviews
								                    </p>
							                    </div>
						                    </div>
					                    </div>
							            <div class="col-6 p-0">
								            <div class="bg-hair-saloon-address w-100 d-block bg-slide-address 
								            p-2">
												<a class="text-gold float-right text-size-25" 
												href="javascript:void(0)">
													<i class="fa fa-heart" aria-hidden="true"></i>
												</a>
										<span class="text-gold d-inline-block font-weight-bold text-size-15">
											Luxe Barber & Shave Lounge
										</span>
										<p class="text-white text-size-13">
											17 E Monroe, The Palmer house Hotel/ Ground Lev, Chicago, IL, 60605
										</p>
								            </div>
							            </div>	
								    </div>	
							    </div>
							    <div class="col-lg-4 col-12">
					      		    <div class="row">
					                    <div class="col-6 pr-0">
						                    <div class="slider-image-text w-100 d-inline-block position-relative">
							                    <a href="javascript:void(0)">
							                        <img src="images/hair-slider-image.svg" alt="hair-slider-image picture">
							                    </a>
							                    <div class="reviews-text box-radius position-absolute">
								                    <span class="text-white font-weight-bold text-size-14">
									                    5.0
								                    </span>
								                    <p class="text-white mb-0 text-size-13">
									                    67 reviews
								                    </p>
							                    </div>
						                    </div>
					                    </div>
							            <div class="col-6 pl-0">
								            <div class="bg-hair-saloon-address w-100 d-block bg-slide-address 
								            p-2">
												<a class="text-gold float-right text-size-25" 
												href="javascript:void(0)">
													<i class="fa fa-heart-o" aria-hidden="true"></i>
												</a>
										<span class="text-gold d-inline-block font-weight-bold text-size-15">
											Luxe Barber & Shave Lounge
										</span>
										<p class="text-white text-size-13">
											17 E Monroe, The Palmer house Hotel/ Ground Lev, Chicago, IL, 60605
										</p>
								            </div>
							            </div>	
								    </div>	
							    </div>
					        </div>
					    </slide>
					</carousel>
					</div>
			    </div>
			</div>
	</div>
	</div>
</template>

<script>
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: "sliderrecommendedComponent",
 components: {
    Carousel,
    Slide
  }
  
};

</script>

<style>

</style>