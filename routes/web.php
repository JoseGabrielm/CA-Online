<?php

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
/*
Route::prefix('api')->group(function () {

    Route::post('login', 'APILoginController@login');
    Route::post('logout', 'APILoginController@logout');

    Route::post('register','APIRegisterController@register');
});
*/


Route::get('{slug}', function () {
    return view('index');
}); // this will ensure all routes will serve index.php file

Route::get('/', function () {
    return view('index');
});
