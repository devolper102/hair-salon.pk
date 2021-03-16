<!DOCTYPE html>
<html>
<head>
	<title> Hairsaloon</title>
	<meta charset="UTF-8">
	<meta name="keywords" content="HTML, CSS, JavaScript">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap.min.css')}}">
	 <link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap-grid.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap-grid.min.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap-reboot.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap-reboot.min.css')}}">

	<link rel="stylesheet" type="text/css" href="{{asset('css/utility.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('css/home.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('css/index.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('css/responsive.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('font-awesome/css/font-awesome.css')}}">
	<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
</head>
<body>

<div id="app">
	<header-section></header-section>
	<sliderrecommended-section></sliderrecommended-section>
	<androidimage-section></androidimage-section>
	<how-it-works-section></how-it-works-section>
	<blogpost-section></blogpost-section>
	<clientslider-section></clientslider-section>
	<popularcategories-section></popularcategories-section>
    <footer-section></footer-section>
</div>



<script type="text/javascript" src="{{asset('js/jquery.min.js')}}"></script>
<script type="text/javascript" src="{{asset('js/bootstrap.min.js')}}">
</script>
<script type="text/javascript" src="{{asset('js/home.js')}}"></script>
<script type="text/javascript">
	
// 	$('.carousel').carousel({
//   interval: false,
// });

	$(".signup-btn").click(function(){
	$(".abc").hide();	
    $(".ccc").show();

  });

  
$(".input-services").click(function(){
  $(".categories-menu").hide();
});
$(".input-services").click(function(){
  $(".categories-menu").show();
});

$(".input-services-2").click(function(){
  $(".location-menu").hide();
  // $(".categories-menu").hide();
});
$(".input-services-2").click(function(){
  $(".location-menu").show();
  $(".categories-menu").hide();
});
$(window).load(function() {
    $('.categories-menu').hide(); 
    $('.location-menu').hide();
});


</script>
</body>
</html>