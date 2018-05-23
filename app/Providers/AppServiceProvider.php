<?php

namespace App\Providers;

use App\Restaurant;
use App\RestaurantPhoto;
use App\Dish;
use App\Address;
use App\RestaurantVote;
use App\Observers\RestaurantObserver;
use App\Observers\RestaurantPhotoObserver;
use App\Observers\DishObserver;
use App\Observers\AddressObserver;
use App\Observers\RestaurantVoteObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Restaurant::observe(RestaurantObserver::class);
        RestaurantPhoto::observe(RestaurantPhotoObserver::class);
        Dish::observe(DishObserver::class);
        Address::observe(AddressObserver::class);
        RestaurantVote::observe(RestaurantVoteObserver::class);
    }
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
