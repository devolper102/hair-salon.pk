<template>
	<div>
		<header>
			<div class="container">
				<div class="row mt-3">
					<div class="col-2">
				        <div class="logo">
				            <a href="jawascript:void(0)">
				               <img src="images/logo-image.svg" alt="logo-image picture">
				            </a>
				        </div>
				    </div>
				    <div class="col-8">
				    	<nav class="navbar navbar-expand-lg navbar-light">
					  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span class="navbar-toggler-icon"></span>
					  </button>
					  <div class="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul class="navbar-nav m-auto w-75 pricing-nav">
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
				    <div class="col-2">
						<div class="login-signup float-right mt-2">
							<a class="text-black text-size-16" href="javascript:void(0)" data-toggle="modal" data-target="#login-signup-popup">
						        <i class="fa fa-user mr-2" aria-hidden="true"></i>
								Login / Signup
							</a>
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
        	<a class="sign-account sign-color font-weight-bold text-size-14" data-toggle="modal" data-target="#sigin-popup" 
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
		</header>
	</div>
</template>

<script>

export default {
  name: "pricing-headerComponent",
  
};

</script>

<style>

</style>