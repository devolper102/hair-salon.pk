<!DOCTYPE html>
<html>
<head>
	<title> Hairsaloon</title>
	<meta charset="UTF-8">
	<meta name="keywords" content="HTML, CSS, JavaScript">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	 <link rel="stylesheet" type="text/css" href="css/bootstrap-grid.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap-grid.min.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap-reboot.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap-reboot.min.css">

	<link rel="stylesheet" type="text/css" href="css/utility.css">
	<link rel="stylesheet" type="text/css" href="css/categories.css">
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="stylesheet" type="text/css" href="font-awesome/css/font-awesome.css">
	<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
</head>
<body>

<div id="app">
	<categories-header-section></categories-header-section>
	<beauty-categories-section></beauty-categories-section>
	<popularcategories-section></popularcategories-section>
    <footer-section></footer-section>
</div>



<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/categories.js"></script>
<script type="text/javascript">
	
	$('.carousel').carousel({
  interval: false,
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

</script>
</body>
</html>