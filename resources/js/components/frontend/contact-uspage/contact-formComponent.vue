<template>
	<div>
		<div class="bg-slide-address w-100 d-inline-block">
			<div class="container">
				<div class="w-65 m-auto d--block">
					<div class="row mt-3 mb-3">
						<div class="col-6">
							<div class="row">
								<div class="col-6">
									<div class="form-group input-contact mb-0">
									    <label class="text-white text-size-14" for="inputtext">Name
									    </label>
                                        <input type="text" class="form-control h-30 text-size-14" id="name-input-text" aria-describedby="emailHelp" placeholder="">
									</div>
								</div>
								<div class="col-6">
									<div class="form-group input-contact mb-0">
									    <label class="text-white text-size-14" for="inputtext">Company name
									    </label>
                                        <input type="text" class="form-control h-30 text-size-14" id="company-input-text" aria-describedby="emailHelp" placeholder="">
									</div>
								</div>
								<div class="col-6">
									<div class="form-group input-contact mt-2 mb-0">
									    <label class="text-white text-size-14" for="inputnumber">Phone number
									    </label>
                                        <input type="number" class="form-control h-30 text-size-14" id="input-number" aria-describedby="emailHelp" placeholder="">
									</div>
								</div>
								<div class="col-6">
									<div class="form-group input-contact mt-2 mb-0">
									    <label class="text-white text-size-14" for="inputemail">Email address
									    </label>
                                        <input type="email" class="form-control h-30 text-size-14" id="input-email" aria-describedby="emailHelp" placeholder="">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<div class="form-group feed-back mt-2">
									    <label class="text-white text-size-14" for="FormControlTextarea1">Discribe
									    </label>
									    <textarea class="form-control" 
									    id="discribe-textarea" 
									    rows="3">
									    </textarea>
                                    </div>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<div class="submit-btn w-100 d-inline-block">
										<button type="button" class="btn bg-gold btn-lg btn-block text-size-15 font-weight-bold text-white h-37">Submit
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="col-6">
							<div class="google-map w-100 d-inline-block">
								<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d108909.84785787933!2d74.2719488!3d31.457279999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1607066003703!5m2!1sen!2s" width="345" height="310" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
							</div>
						</div>
				    </div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>

export default {
  name: "contact-formComponent",
  
};

</script>

<style>

</style>