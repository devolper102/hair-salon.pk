<template>
	<div>
		<header>
	<div class="header-bg w-100 d-inline-block bg-black">
		<div class="container">
			<div class="row pt-3 pb-3">
				<div class="col-2">
					<div class="logo">
            <a href="jawascript:void(0)">
						<img src="images/logo-image.svg" alt="logo-image picture">
            </a>
					</div>
				</div>
				<div class="col-6">
				<div class="main-service-input w-100 d-block m-0">
					<div class="row">
						<div class="col-6 pr-0">
							 <div class="form-group input-services position-relative w-100 float-right mb-0">
							 	<a class="text-white position-absolute" href="javascript:void(0)">
							 		<i class="fa fa-search" aria-hidden="true"></i>
							 	</a>
							 	 <input type="text" class="form-control text-white pl-5 pr-2 h-50 border-0 bg-black" id="service-input-text" aria-describedby="emailHelp" placeholder="Book your services....">
							 </div>
						</div>
						<div class="col-6 pl-0">
							 <div class="form-group input-services input-services-2 position-relative w-100 float-left mb-0">
							 	<a class="text-white position-absolute" href="javascript:void(0)">
							 		<i class="fa fa-map-marker" aria-hidden="true"></i>
							 	</a>
							 	 <input type="text" class="form-control text-white pl-5 pr-5 h-50 bg-black" id="service-input-text" aria-describedby="emailHelp" placeholder="Where?">
							 	 <a class="location-icon text-white bg-gold position-absolute d-inline-block text-center p-1" href="javascript:void(0)">
							 	 	<i class="fa fa-location-arrow" aria-hidden="true"></i>
							 	 </a>
							 </div>
						</div>

					</div>
			</div>
		</div>
		<div class="col-2">
			<div class="login-signup float-right mt-2 mr-3">
				<a class="text-white text-size-16" href="javascript:void(0)" data-toggle="modal" data-target="#login-signup-popup">
					<i class="fa fa-user mr-2" aria-hidden="true">
						
					</i>
						Login / Signup
				</a>
			</div>
		</div>
		    <div class="col-2 p-0">
				<div class="bussiness-btn w-100 d-inline-block">
					<a class="text-white font-weight-bold bg-gold hair-saloon-btn float-left box-radius" href="javascript:void(0)">
					For Business
					</a>
				</div>
			</div>
		</div>
		<div class="row mt-3 mb-2">
			<div class="col-12">
				<nav class="navbar navbar-expand-lg navbar-light 
				pl-0 pr-0">
				<button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
					<span class="navbar-toggler-icon"></span>
				</button> 
					<div id="navbarSupportedContent" class="collapse navbar-collapse">
						<ul class="navbar-nav hair-saloon-categories w-100 float-left">
							<li class="nav-item">
								<a href="javascript:void(0)" class="nav-link text-white position-relative">Hair Salon 
								</a>
							</li> 
							<li class="nav-item"><a href="javascript:void(0)" class="nav-link text-white position-relative">Barbershop
								</a>
							</li>
							<li class="nav-item">
								<a href="javascript:void(0)" class="nav-link text-white position-relative">Nail Salon
							    </a>
						    </li> 
							<li class="nav-item">
								<a href="javascript:void(0)" class="nav-link text-white position-relative">Beauty Salon
								</a>
							</li> 
							<li class="nav-item">
								<a href="javascript:void(0)" class="nav-link text-white position-relative">Eye Brows &amp; Lashes
								</a>
							</li> 
							<li class="nav-item">
								<a href="javascript:void(0)" class="nav-link text-white position-relative">Massage
								</a>
							</li> 
							<li class="nav-item">
								<a href="javascript:void(0)" class="nav-link text-white position-relative">Makeup Artist
								</a>
							</li>
							<li class="nav-item">
								<a href="javascript:void(0)" class="nav-link text-white more-btn">More
								</a>
						    </li>
						</ul>
					</div>
			   </nav>
		    </div>
	    </div>
		</div>
	</div>
	</header>
	<!-- Start login-signup-popup  -->
<div class="modal fade" id="login-signup-popup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog w-30 sign-in-modal" role="document">
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
  <div class="modal-dialog w-30 sign-password-modal" role="document">
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
        	<a class="sign-color font-weight-bold text-size-14 sign-in-btn" 
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
  <div class="modal-dialog w-30 signup-modal" role="document">
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
</template>

<script>

export default {
  name: "headerComponent",
  
};

</script>

<style>

</style>