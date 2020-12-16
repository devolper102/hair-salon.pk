<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/home', function () {
    return view('home');
});
Route::get('/beautysaloon', function () {
    return view('beautysaloon');
});
Route::get('/business-page', function () {
    return view('/business-page/business');
});

Route::get('/feature', function () {
    return view('feature');
});
Route::get('/price', function () {
    return view('price');
});
Route::get('/contact-us', function () {
    return view('contact-us');
});
Route::get('/faq', function () {
    return view('faq');
});
Route::get('/hair-saloon', function () {
    return view('/hair-saloon');
});
Route::get('/home2', function () {
    return view('/home2');
});
Route::get('/categories', function () {
    return view('/categories');
});