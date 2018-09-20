<?php

namespace VacinaOnline\Http\Controllers;

use Illuminate\Http\Request;

class HistoricoController extends Controller
{
    //


    public function getHistorico(){
        $user = auth()->user();
        $historico = $user->historico()->with('vacina','aplicador','aplicador.posto','aplicador.registro')->get();
/*
        foreach ($historico as $key => $value) {
            # code...
     //       dd($value->vacina());
            $aplicador = $value->aplicar()->get();
            $vacina= $value->vacina()->get();
            $posto = $value->posto()->get();
            //$cc= $bb;
        }
 */
        return response()->json($historico);
    }
}
