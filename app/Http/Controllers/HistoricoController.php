<?php

namespace VacinaOnline\Http\Controllers;

use Illuminate\Http\Request;

class HistoricoController extends Controller
{
    //


    public function getHistorico(){
        $user = auth()->user();
        $aa = $user->historico()->get();
 
        return response()->json($aa);
    }
}
