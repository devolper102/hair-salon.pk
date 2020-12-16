const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
	.js('resources/js/home.js', 'public/js')
	.js('resources/js/beautysaloon.js', 'public/js')
	.js('resources/js/bussiness.js', 'public/js')
	.js('resources/js/feature.js', 'public/js')
	.js('resources/js/price.js', 'public/js')
	.js('resources/js/contact-us.js', 'public/js')
	.js('resources/js/faq.js', 'public/js')
	.js('resources/js/hairsaloon.js', 'public/js')
	.js('resources/js/home2.js', 'public/js')
	.js('resources/js/categories.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
