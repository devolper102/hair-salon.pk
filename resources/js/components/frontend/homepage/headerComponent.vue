<template>
	<div>
		<header>	
<div class="hair-saloon-bg-image w-100 d-inline-block">
	<div class="container">
		<div class="row mt-4">
			<div class="col-7">
				<div class="logo">
					<a href="javascript:void(0)">
					<img src="images/logo-image.svg" alt="logo-image picture">
					</a>
					</div>

			</div>
		    <div class="col-5">
				<div class="row">
					<div class="col-6">
						<div class="login-signup float-right mt-2">
							<a class="text-white text-size-16" href="javascript:void(0)" data-toggle="modal" data-target="#login-signup-popup">
						    <i class="fa fa-user mr-2" aria-hidden="true"></i>
								Login / Signup
							</a>
						</div>
					</div>
					<div class="col-6">
						<div class="bussiness-btn w-100 d-inline-block">
							<a class="text-white font-weight-bold bg-gold hair-saloon-btn float-left" href="javascript:void(0)">For Business</a>
					    </div>
					</div>
				</div>
			</div>

		</div>
		<div class="row">
			<div class="col-12">
				<div class="banner-heading w-100 d-inline-block text-center">
					<h1 class="text-white">CLASSY & 
						<span class="pb-2 d-inline-block">FABULOUS</span>
					</h1>
				</div>
			</div>
		</div>
		<form>
			<div class="main-service-input w-45 d-block 
			position-relative">
				<div class="row">
					<div class="col-6 pr-0">
						<div class="form-group input-services position-relative w-100 float-right mb-0">
							<a class="text-white position-absolute" href="javascript:void(0)">
							 	<i class="fa fa-search" aria-hidden="true"></i>
							 	</a>
							 	<input type="text" class="form-control input-bg text-white pl-5 pr-2 h-50 border-0 text-size-15" id="service-input-text" aria-describedby="emailHelp" placeholder="Book your services...." aria-expanded="true">

						</div>
					</div>
				    <div class="col-6 pl-0">
						<div class="form-group input-services input-services-2 position-relative w-100 float-left mb-0">
				     	 	<a class="text-white position-absolute" href="javascript:void(0)">
							<i class="fa fa-map-marker" aria-hidden="true"></i>
							</a>
							<input type="text" class="form-control input-bg text-white pl-5 pr-5 h-50 text-size-15" id="service-input-text" aria-describedby="emailHelp" placeholder="Where?" aria-expanded="true">
					     	<a class="location-icon text-white bg-gold position-absolute d-inline-block text-center p-1" href="javascript:void(0)">
				     	 	<i class="fa fa-location-arrow"aria-hidden="true"></i>
				            </a>
						</div>
					</div>
				</div>
				<div class="dropdown-menu categories-menu p-0 border-0 show" aria-labelledby="dropdownMenuButton" style="position: absolute; transform: translate3d(0, 3px, 0px); top:50px; left:0; will-change: transform;" x-placement="top-start">
						    	<form>
						    		<div class="form-group looking-services mb-0">
						    			 <input type="email" class="form-control border-0 h-45" id="looking-service" aria-describedby="emailHelp" placeholder="What are you looking for ?">
						    		</div>
						    	</form>
						    	<div class="service-box bg-white pt-2 pb-2 pl-3 pr-3">
						    	<div class="popular-service w-100 d-inline-block mb-2">
						    		<span class="color-date text-size-14">Popular services</span>
						    	</div>
						    	<div class="hair-cut">
						    		<a class="mr-3 mb-3 text-size-12 color-date" href="javascript:void(0)">
						    			Hair cut
						    		</a>
						    	</div>
						    	<div class="hair-cut">
						    		<a class="mr-3 mb-3 text-size-12 color-date" href="javascript:void(0)">
						    			Mens hair cut
						    		</a>
						    	</div>
						    	<div class="hair-cut">
						    		<a class="mr-3 mb-3 text-size-12 color-date" href="javascript:void(0)">
						    			Beard trim
						    		</a>
						    	</div>
						    	<div class="hair-cut">
						    		<a class="mr-3 mb-3 text-size-12 color-date" href="javascript:void(0)">
						    			Shave
						    		</a>
						    	</div>
						    	<div class="hair-cut">
						    		<a class="mr-3 mb-3 text-size-12 color-date" href="javascript:void(0)">
						    			Beard trim
						    		</a>
						    	</div>
						    	<div class="hair-cut">
						    		<a class="mr-3 mb-3 text-size-12 color-date" href="javascript:void(0)">
						    			Shave
						    		</a>
						    	</div>
						    	<div class="hair-cut">
						    		<a class="mr-3 mb-3 text-size-12 color-date" href="javascript:void(0)">
						    			Mens hair cut
						    		</a>
						    	</div>
						    	<div class="hair-cut">
						    		<a class="mr-3 mb-3 text-size-12 color-date" href="javascript:void(0)">
						    			Beard trim
						    		</a>
						    	</div>
						    	<div class="hair-cut">
						    		<a class="mr-3 mb-3 text-size-12 color-date" href="javascript:void(0)">
						    			Shave
						    		</a>
						    	</div>
						    	<div class="hair-cut">
						    		<a class="mb-3 text-size-12 
						    		color-date" href="javascript:void(0)">
						    			Beard trim
						    		</a>
						    	</div>
						    	<div class="search-btn w-100 d-inline-block text-center mt-2">
						    		<a class="text-white bg-gold text-size-14 d-inline-block" href="javascript:void(0)">
						    			Search
						    		</a>
						    	</div>
						    </div>
						  </div>
						  <div class="dropdown-menu location-menu p-0 border-0 show" aria-labelledby="dropdownMenuButton" style="position: absolute; will-change: transform; top:50px; left: 0; transform: translate3d(0px, 3px, 0px);" x-placement="top-start">
					  	<form>
    		<div class="form-group looking-services mb-0">
    			 <input type="email" class="form-control border-0 h-45" id="looking-service" aria-describedby="emailHelp" placeholder="Pakistan">
    		</div>
    	            </form>
					    <div class="service-box w-100 d-inline-block bg-white pt-2 pb-2 pl-3 pr-3">
					    	<div class="row border-bottom mb-2">
					    		<div class="col-6">
					    			<div class="current-location w-100 d-inline-block ml-4">
					    				<a class="color-date text-size-14" href="javascript:void(0)">
					    					<i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
					    					Your current location
					    				</a>
					    			</div>
					    		</div>
					    		<div class="col-6">
					    			<div class="search-near-btn w-100 d-inline-block">
					    				<a class="text-white bg-gold text-size-14 float-right" href="javascript:void(0)">
					    					Search near me
					    				</a>
					    			</div>
					    		</div>
					    	</div>
					    	<div class="city-location w-100 
					    	d-inline-block pb-1 ml-4">
					    		<a class="color-date text-size-14" href="javascript:void(0)">
					    			<i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
					    			Lahroe
					    		</a>
					    	</div>
					    	<div class="city-location w-100 
					    	d-inline-block pb-1 ml-4">
					    		<a class="color-date text-size-14" href="javascript:void(0)">
					    			<i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
					    			Gujrat
					    		</a>
					    	</div>
					    	<div class="city-location w-100 
					    	d-inline-block pb-1 ml-4">
					    		<a class="color-date text-size-14" href="javascript:void(0)">
					    			<i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
					    			Gujranwala
					    		</a>
					    	</div>
					    	<div class="city-location w-100 
					    	d-inline-block pb-1 ml-4">
					    		<a class="color-date text-size-14" href="javascript:void(0)">
					    			<i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
					    			Faisalabad
					    		</a>
					    	</div>
					    	<div class="city-location w-100 
					    	d-inline-block pb-1 ml-4">
					    		<a class="color-date text-size-14" href="javascript:void(0)">
					    			<i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
					    			Karachi
					    		</a>
					    	</div>
					    	<div class="city-location w-100 
					    	d-inline-block pb-1 ml-4">
					    		<a class="color-date text-size-14" href="javascript:void(0)">
					    			<i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
					    			Islamabad
					    		</a>
					    	</div>
					    	<div class="search-btn w-100 d-inline-block text-center mt-2 mb-2">
				    		<a class="text-white bg-gold text-size-14 d-inline-block" href="javascript:void(0)">
				    			Search
				    		</a>
				    	</div>
					    </div>
					  </div>
			</div>
		</form>
		<div class="row">
			<div class="col-6 mt-3">
				<div class="home-service-box bg-white border-radius w-65 d-inline-block p-2">
					<div class="heading-home-service w-65 float-left">
						<h4 class="text-gold font-weight-bold mb-1">Home Service
						</h4>
						<p class="text-black text-size-12 mb-2">
							It is a long established fact that a of a page when looking at its layout.
						</p>
						<a class="text-white bg-gold font-weight-bold text-size-14 d-inline-block box-radius" 
							href="javascript:void(0)">
							Explore
						</a>
					</div>	
					<div class="home-service-image w-35 float-left">
						<a href="javascript:void(0)">
						<img src="images/home-service-image.svg" alt="home-service-image picture">
						</a>
					</div>
				</div>
			</div>
		    <div class="col-6 mt-3">
				<div class="appointment-box bg-white d-inline-block p-2 w-65 m-auto d-block box-radius">
					<div class="row">
						<div class="col-5">
							<a class="text-black d-block text-size-14 font-weight-bold pb-1" href="javascript:void(0)">
							Your appointments
							</a>
							<a class="text-black d-block text-size-14 font-weight-bold pb-1" href="javascript:void(0)">
								Shop Name
							</a>
							<a class="text-black d-block text-size-14 font-weight-bold" href="javascript:void(0)">
								Haircut
							</a>
						</div>
						<div class="col-4">
							<div class="confirm-btn w-100 d-inline-block">
								<a class="text-white border-radius text-size-14" href="javascript:void(0)">
									Confirmed
							    </a>
							</div>
						</div>
						<div class="col-3">
							<div class="date-time w-100 d-inline-block">
								<span class="text-black d-block text-size-14 font-weight-bold">
									Sep
								</span>
							    <span class="text-black d-block text-size-14 font-weight-bold">
									17
								</span>
								<span class="text-size-14 color-date font-weight-bold">
									10:00 AM
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-12">
				<nav class="navbar navbar-expand-lg navbar-light 
				pl-0 pr-0">
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"> </span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul class="navbar-nav hair-saloon-categories w-100 float-left">
					        <li class="nav-item">
					            <a class="nav-link text-white position-relative" href="javascript:void(0)">Hair Salon </a>
					        </li>
					        <li class="nav-item">
				                <a class="nav-link text-white position-relative" href="javascript:void(0)">Barbershop</a>
					        </li>
					        <li class="nav-item">
				                <a class="nav-link text-white position-relative" href="javascript:void(0)">Nail Salon</a>
					        </li>
					        <li class="nav-item">
				                <a class="nav-link text-white position-relative" href="javascript:void(0)">Beauty Salon</a>
	   				        </li>
					        <li class="nav-item">
				                <a class="nav-link text-white position-relative" href="javascript:void(0)">Eye Brows & Lashes</a>
					        </li>
					        <li class="nav-item">
					            <a class="nav-link text-white position-relative" href="javascript:void(0)">Massage</a>
				            </li>
				            <li class="nav-item">
							    <a class="nav-link text-white position-relative" href="javascript:void(0)">Makeup Artist</a>
					        </li>
					        <li class="nav-item">
					            <a class="nav-link text-white more-btn" href="javascript:void(0)">More</a>
					        </li> 
				        </ul>
					</div>
				</nav>
			</div>
		</div>
		<div class="row mt-4">
			<div class="col-12">
				<div class="scroll-down-image w-100 d-inline-block text-center">
					<a href="javascript:void(0)">
					<img src="images/scroll-down-image.svg" alt="scroll-down-image picture">
					</a>
					<p class="text-white text-size-18">Scroll down</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Start login-signup-popup  -->
<div class="modal fade" id="login-signup-popup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog w-30" role="document">
    <div class="modal-content">
      <div class="modal-header sign-modal-heading border-0 pb-0 w-100 d-inline-block">
      	<button type="button" class="close pt-1 cross-btn float-right" data-dismiss="modal" aria-label="Close">
          <span class="text-size-15 d-inline-block" aria-hidden="true">&times;</span>
        </button>
        <h5 class="text-gold font-weight-bold mt-1 pb-2 w-100 border-sign-bottom">SIGN IN
        </h5>
      </div>
      <div class="modal-body pt-0 pb-0">
        <form>
        	<div class="form-group input-email">
        		<label class="color-date text-size-15" for="InputEmail1">Enter you Email
        		</label>
                   <input type="email" class="form-control text-size-14" id="InputEmail1" aria-describedby="emailHelp" placeholder="">
        	</div>
        </form>
        <div class="or-text">
        	<p class="text-black font-weight-bold text-size-16 text-center mb-0">OR</p>
        </div>
      </div>
      <div class="modal-footer border-0 social-icon-btn">
        <button type="button" class="facebook-btn w-100 box-radius text-white border-0 text-size-14 p-2">FACEBOOK</button>
        <button type="button" class="gmail-btn w-100 box-radius text-white border-0 text-size-14 p-2">GMAIL
        </button>
        <div class="note-member-signup w-40 m-auto d-inline-block text-center mt-3 border-sign-bottom pb-1">
        	<span class="color-date text-size-13">Not a member?</span>
        	<a class="signup-btn sign-color font-weight-bold text-size-14" data-toggle="modal" data-target="#sigin-popup" 
        	href="javascript:void(0)">
        	sign up
        	</a>
        </div>
        <div class="privacy-policy w-100 d-inline-block 
        text-center mt-3">
        	<span class="color-date text-size-15 pb-1 border-sign-bottom">privacy policy
        	</span>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End login-signup-popup  -->

<!-- Start signin-popup  -->
<div class="modal fade" id="sigin-popup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog w-30" role="document">
    <div class="modal-content">
      <div class="modal-header sign-modal-heading border-0 pb-0 w-100 d-inline-block">
      	<button type="button" class="close pt-1 cross-btn float-right" data-dismiss="modal" aria-label="Close">
          <span class="text-size-15 d-inline-block" aria-hidden="true">&times;</span>
        </button>
        <h5 class="text-gold font-weight-bold mt-1 pb-2 w-100 border-sign-bottom">SIGN IN
        </h5>
      </div>
      <div class="modal-body pt-0 pb-0">
        <form>
        	<div class="form-group input-email">
        		<label class="color-date text-size-15" for="InputEmail1">Password
        		</label>
                   <input type="password" class="form-control text-size-14" id="InputPassword" aria-describedby="emailHelp" placeholder="">
        	</div>
        </form>
      </div>
      <div class="modal-footer border-0 social-icon-btn pt-0">
      	<div class="forgot-password w-100 d-inline-block mb-4">
      		<a class="color-date text-size-11 font-weight-bold float-right
      		pt-1 pb-1 pl-3 pr-3" href="javascript:void(0)">Forget password?</a>
      	</div>
        <div class="note-member-signup w-55 m-auto d-inline-block text-center border-sign-bottom pb-1">
        	<span class="color-date text-size-13">Already have an account?</span>
        	<a class="sign-color font-weight-bold text-size-14" 
        	href="javascript:void(0)" data-toggle="modal" data-target="#signup-popup">
        	sign in
        	</a>
        </div>
        <div class="privacy-policy w-100 d-inline-block 
        text-center mt-3">
        	<span class="color-date text-size-15 pb-1 border-sign-bottom">privacy policy
        	</span>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End login-signin-popup  -->

<!-- Start login-signup-popup  -->
<div class="modal fade" id="signup-popup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog w-30" role="document">
    <div class="modal-content">
      <div class="modal-header sign-modal-heading border-0 pb-0 w-100 d-inline-block">
      	<button type="button" class="close pt-1 cross-btn float-right" data-dismiss="modal" aria-label="Close">
          <span class="text-size-15 d-inline-block" aria-hidden="true">&times;</span>
        </button>
        <h5 class="text-gold font-weight-bold mt-1 pb-2 w-100 border-sign-bottom">SIGN UP
        </h5>
      </div>
      <div class="modal-body pt-0 pb-0">
        <form>
        	<div class="form-group input-email mb-2">
        		<label class="color-date text-size-15" for="InputEmail1">Enter you Email
        		</label>
                   <input type="email" class="form-control text-size-14" id="InputEmail1-2" aria-describedby="emailHelp" placeholder="">
        	</div>
        	<div class="form-group input-email mb-2">
        		<label class="color-date text-size-15" for="InputEmail1">Password
        		</label>
                   <input type="password" class="form-control text-size-14" id="InputPassword-2" aria-describedby="emailHelp" placeholder="">
        	</div>
        	<div class="form-group input-email mb-2">
        		<label class="color-date text-size-15" for="InputEmail1">Re-enter password
        		</label>
                   <input type="password" class="form-control text-size-14" id="InputPassword-3" aria-describedby="emailHelp" placeholder="">
        	</div>
        	<select class="form-control mt-3">
        		<option>
        			Client
        		</option>
        		<option>
        			Customer
        		</option>
        		<option>
        			Hair Cutting
        		</option>
        		<option>
        			Shaving
        		</option>
        		<option>
        			Tind
        		</option>
        	</select>
        </form>
        <div class="or-text mt-3">
        	<p class="text-black font-weight-bold text-size-16 text-center mb-0">OR</p>
        </div>
      </div>
      <div class="modal-footer border-0 social-icon-btn">
        <button type="button" class="facebook-btn w-100 box-radius text-white border-0 text-size-14 p-2">FACEBOOK</button>
        <button type="button" class="gmail-btn w-100 box-radius text-white border-0 text-size-14 p-2 mb-3">GMAIL
        </button>
        <div class="note-member-signup w-55 m-auto d-inline-block text-center border-sign-bottom pb-1">
        	<span class="color-date text-size-13">Already have an account?</span>
        	<a class="signup-btn sign-color font-weight-bold text-size-14" data-toggle="modal" data-target="#sigin-popup" 
        	href="javascript:void(0)">
        	sign in
        	</a>
        </div>
        <div class="privacy-policy w-100 d-inline-block 
        text-center mt-3">
        	<span class="color-date text-size-15 pb-1 border-sign-bottom">privacy policy
        	</span>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End login-signup-popup  -->

</div>
</header>
	</div>
</template>

<script>

export default {
  name: "headerComponent",
  
};

</script>

<style>

</style>