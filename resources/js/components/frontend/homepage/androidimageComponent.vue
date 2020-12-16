<template>
	<div>
		<div class="bg-gradient w-100 d-inline-block 
	position-relative">
			<div class="container-fluid">
				<div class="row mt-5">
					<div class="col-6 mt-5">
						<div class="mobile-image w-100 d-inline-block text-center">
							<img class="img-fluid" src="images/mobile-image.svg" 
							alt="mobile-image picture">
						</div>
					</div>

					<div class="col-4">
						<div class="logo-image">
							<a href="javascript:void(0)">
							<img src="images/logo-img.svg" alt="logo-image picture">
							</a>
							<span class="text-gold font-weight-bold text-size-20 d-block w-65">Android  &  IOS</span>
							<p class="text-black font-weight-bold text-size-18 mt-3">
								Download our app to book your appointment anytime anywhere
							</p>
						</div>
						<form>
							<div class="form-group input-number w-75 float-left mr-3">
								<input type="number" class="form-control text-size-14 h-37" id="input-phone-number" aria-describedby="numberHelp" placeholder="Your phone number" required>
							</div>
							<div class="send-btn">
								<button class="h-37 bg-gold text-white 
								font-weight-bold w-20 box-radius border-0">Send
								</button>
							</div>
						</form>
					</div>
					<div class="col-2 pr-0">
						<div class="bg-beauty-image w-100 float-left">
							<img class="img-fluid float-right" src="images/bg-beauty-image.svg" alt="bg-beauty-image picture">
						</div>
					</div>
				</div>
				<div class="row mt-4">
				<div class="col-12">
					<div class="scroll-down-image w-100 d-inline-block text-center">
						<a href="#how-it-is-work-main">
						<img src="images/scroll-down-image-2.svg" alt="scroll-down-image-2 picture">
						</a>
						<p class="text-black text-size-18 font-weight-bold">Scroll down</p>
					</div>
				</div>
			</div>
			</div>
	</div>
	</div>
</template>

<script>

export default {
  name: "androidimageComponent",
  
};

</script>

<style>

</style>