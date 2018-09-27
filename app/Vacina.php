<?php

namespace VacinaOnline;

use Illuminate\Database\Eloquent\Model;
class Vacina extends Model
{
    public  $timestamps = false;

    protected $fillable = [

       'id_posto'	,'id_registro',	'endereco','name' ];
    //

     /*   
    function historico(){
        return $this->belongsToMany('VacinaOnline\Vacina', 'historicos', 'id_vacina','id_vacina');
    }*/

    function  historico(){

        return $this->hasMany('VacinaOnline\Historico', 'id_vacina', 'id');
        
    }


   
}
