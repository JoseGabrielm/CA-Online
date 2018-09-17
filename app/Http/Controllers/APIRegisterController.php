<?php

namespace VacinaOnline\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use JWTFactory;
use JWTAuth;
use Validator;
use Response;
use VacinaOnline\User;

class APIRegisterController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:registros',
            'name' => 'required',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            
            return response()->json($validator->errors(),400);
            
        }

        $date = new \DateTime($request->get('data_nascimento'));
        User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            //'password' => bcrypt($request->get('password')),
            'password' => Hash::make($request->get('password')),

            'id_estado' => $request->get('id_estado'),
            'id_cidade' => $request->get('id_cidade'),
            'data_nascimento' =>  $date->format('Y-m-d H:i:s')
        ]);
        $user = User::first();
        $token = JWTAuth::fromUser($user);
        
        return Response::json(compact('token'));
    }
}