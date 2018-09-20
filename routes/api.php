<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('login', 'APILoginController@login');
Route::post('logout', 'APILoginController@logout');

Route::post('register','APIRegisterController@register');

Route::group([

    'middleware' => 'jwt.auth'
], function(){

    Route::get('historico','HistoricoController@getHistorico');
});
Route::middleware('jwt.auth')->get('user', function(Request $request) {
    return auth()->user();
});

/*$this->middleware('jwt.auth', ['except' => ['authenticate']]);

*/
/*
Route::group([

    'middleware' => 'jwt.auth',
    'prefix' => 'auth'

], function ($router) {

 //   Route::post('logout', 'AuthController@logout');
  //  Route::post('refresh', 'AuthController@refresh');
  //  Route::post('me', 'AuthController@me');

});

*/