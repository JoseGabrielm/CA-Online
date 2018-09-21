<?php

namespace VacinaOnline\Http\Controllers;

use Illuminate\Http\Request;

class HistoricoController extends Controller
{
    //


    public function getHistorico(){
        $user = auth()->user();
        $historico = $user->historico()->with('vacina','aplicador','aplicador.posto','aplicador.registro')->get();

        return response()->json($historico);
    }
}
