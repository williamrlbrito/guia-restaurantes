<?php

namespace App\Providers;

use App\Restaurant;
use App\RestaurantPhoto;
use App\Observers\RestaurantObserver;
use App\Observers\RestaurantPhotoObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Restaurant::observe(RestaurantObserver::class);
        RestaurantPhoto::observe(RestaurantPhotoObserver::class);
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
