<?php

namespace VacinaOnline;

use Illuminate\Database\Eloquent\Model;

class Vacina extends Model
{
    protected $fillable = [

        'id',	'id_posto'	,'id_registro',	'endereco' ];
    //


    public function historico()
    {
        return $this->belongsToMany('VacinaOnline\Historico');
    }

   
}
