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

Route::post('register', 'APIRegisterController@register');

Route::group([

    'middleware' => 'jwt.auth',
], function () {

    Route::get('historico', 'UserController@historico');
    Route::get('vacinas', 'UserController@vacinas');
    Route::get('carterinha', 'UserController@carterinha');

    Route::group([
        'middleware' => 'role:1',
        'prefix' => 'applicator',
    ], function () {
        Route::resource('historico', 'HistoricoController');
        Route::get('vacinas', 'ApplicatorController@vacinas');
        Route::get('user/{email}', 'ApplicatorController@userByEmail');

    });
});
Route::middleware('jwt.auth')->get('user', function (Request $request) {
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
