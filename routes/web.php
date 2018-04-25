<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    //return $app->version();
    return view('teste');
});

$app->group(['prefix' => 'api/v1', 'namespace' => 'Api\V1', 'middleware' => ['auth']], function () use ($app) {
    $app->get('restaurants', 'RestaurantController@index');
    $app->get('restaurants/{restaurant}', 'RestaurantController@show');
    $app->post('restaurants', 'RestaurantController@store');
    $app->post('restaurants/{restaurant}', 'RestaurantController@update');
    $app->put('restaurants/{restaurant}', 'RestaurantController@update');
    $app->delete('restaurants/{restaurant}', 'RestaurantController@destroy');

    $app->post('restaurants/{restaurant}/address', 'RestaurantController@address');
    $app->post('restaurants/{restaurant}/upload', 'RestaurantController@upload');

    $app->get('auth/me', 'AuthController@me');
});
