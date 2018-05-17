<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\ApiControllerTrait;
use App\Dish;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class DishController extends Controller
{
    use ApiControllerTrait;
    protected $model;
    protected $rules = [
        'name' => 'required|min:3',
        'description' => 'required',
        'photo' => 'required',
        'price' => 'required',
        'restaurant_id' => 'required'
    ];
    protected $messages = [
        'required' => ':attribute é obrigatório',
        'min' => ':attribute precisa de pelo menos :min caracteres'
    ];

    public function __construct(Dish $model)
    {
        $this->model = $model;
    }

    // public function index(Request $request, $id)
    // {
    //     $results = $this->model
    //         ->where('restaurant_id', $id)
    //         ->get();

    //         return response()->json($results);
    // }
}