<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RestaurantVote extends Model 
{
    protected $fillable = [
        'points',
        'comment',
        'reply',
        'user_id',
        'restaurant_id'
    ];
}