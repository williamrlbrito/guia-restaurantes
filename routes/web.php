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

$app->group(['prefix' => 'api/v1', 'namespace' => 'Api\V1'], function () use ($app) {
    $app->get('restaurants/by-address', 'RestaurantController@getByAddress');
    $app->get('restaurants/by-coords', 'RestaurantController@getByCoords');
    $app->post('restaurants/vote', 'RestaurantVoteController@store');
    $app->get('restaurants/{id:[0-9]+}/view-phone', 'RestaurantController@viewPhone');

    $app->get('restaurants/{id:[0-9]+}', 'RestaurantController@show');
    $app->get('dishes', 'DishController@index');
    $app->get('restaurants/{id:[0-9]+}/photos', 'RestaurantPhotoController@index');

    $app->post('auth/register', 'AuthController@register');
});

$app->group(['prefix' => 'api/v1', 'namespace' => 'Api\V1', 'middleware' => ['auth']], function () use ($app) {
    $app->get('restaurants', 'RestaurantController@index');
    $app->post('restaurants', 'RestaurantController@store');
    $app->post('restaurants/{id:[0-9]+}', 'RestaurantController@update');
    $app->put('restaurants/{id:[0-9]+}', 'RestaurantController@update');
    $app->delete('restaurants/{id:[0-9]+}', 'RestaurantController@destroy');

    $app->post('restaurants/{id:[0-9]+}/address', 'RestaurantController@address');
    $app->post('restaurants/{id:[0-9]+}/upload', 'RestaurantController@upload');

    $app->post('restaurants/photos', 'RestaurantPhotoController@store');
    $app->delete('restaurants/photos/{id:[0-9]+}', 'RestaurantPhotoController@destroy');

    $app->get('dishes/{id:[0-9]+}', 'DishController@show');
    $app->post('dishes', 'DishController@store');
    $app->post('dishes/{id:[0-9]+}', 'DishController@update');
    $app->delete('dishes/{id:[0-9]+}', 'DishController@destroy');

    $app->get('auth/me', 'AuthController@me');
    $app->post('auth/change-password', 'AuthController@changePassword');
    $app->post('auth/edit-profile', 'AuthController@editProfile');
    $app->get('auth/logout', 'AuthController@logout');
});
