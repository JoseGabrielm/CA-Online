<?php

namespace VacinaOnline\Http\Controllers;

use Illuminate\Http\Request;

use VacinaOnline\Vacina;
use Illuminate\Support\Facades\DB;
use VacinaOnline\Vacinas;
use VacinaOnline\Http\Requests\UserRequest;


class UserController extends Controller
{
    //


    public function historico(){
        $user = auth()->user();
        $historico = $user->historico()->with('vacina','aplicador','aplicador.posto','aplicador.registro')->get();

        return response()->json($historico);
    }
    /*
    public function carterinha2(){
        $user = auth()->user();
        
        //$vacinas = $user->historico()->load('vacina')->get()->groupBy('vacina.id');
        $vacinas = $users = DB::select(
            'select name, historicos.created_at,historicos.id_aplicador from vacinas
             left join historicos on historicos.id_vacina = vacinas.id 
            and historicos.id_registro ='.$user->id
        );
        $vacinas = collect($vacinas)->groupBy('name');

        return response()->json($vacinas);


    }*/
    public function carterinha(){
        $user = auth()->user();

/*        $vacinas = Vacina::with('historico')
            ->where('historico.id_registro','=',$user->id)
  */
        $vacinas =Vacina::with(["historico"=> function($q) use(  $user) {
            $q->where("id_registro","=",$user->id);
        }])->get();
        
        return response()->json($vacinas);
    }
    public function vacinas(){
        $vacinas = Vacina::all()->pluck('name');;


        return response()->json($vacinas);

    }

    public function update(UserRequest $request){
          //
        $validated = $request->validated();
        $validated['data_nascimento'] = new \DateTime($validated['data_nascimento']);
        
        $user = auth()->user();
        return response()->json(

            $user->fill($validated)->save()

        );
    }
}
