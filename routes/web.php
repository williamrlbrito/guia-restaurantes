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
    $app->get('restaurants/{id:[0-9]+}', 'RestaurantController@show');
    $app->post('restaurants', 'RestaurantController@store');
    $app->post('restaurants/{id:[0-9]+}', 'RestaurantController@update');
    $app->put('restaurants/{id:[0-9]+}', 'RestaurantController@update');
    $app->delete('restaurants/{id:[0-9]+}', 'RestaurantController@destroy');

    $app->post('restaurants/{id:[0-9]+}/address', 'RestaurantController@address');
    $app->post('restaurants/{id:[0-9]+}/upload', 'RestaurantController@upload');

    $app->get('restaurants/{id:[0-9]+}/photos', 'RestaurantPhotoController@index');
    $app->post('restaurants/photos', 'RestaurantPhotoController@store');
    $app->delete('restaurants/photos/{id:[0-9]+}', 'RestaurantPhotoController@destroy');

    $app->get('auth/me', 'AuthController@me');
});
