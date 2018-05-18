<?php

namespace App\Http\Controllers\Api\V1;

use App\User;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class  AuthController extends Controller
{
    public function me(Request $request)
    {
        $user = User::where('id', $request->user()->id)
            ->with(['restaurant'])
            ->first();

        return response()->json($user);
    }

    public function changePassword(Request $request)
    {   
        $rules = [
            'password' => 'required|min:6',
            'password_confirmation' => 'same:password'
        ];

        $this->validate($request, $rules);

        $user = User::where('id', $request->user()->id)
            ->with(['restaurant'])
            ->first();

        $user->update($request->all());

        return response()->json($user);
    }
}