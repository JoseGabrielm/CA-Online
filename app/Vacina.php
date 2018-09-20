<?php

namespace VacinaOnline;

use Illuminate\Database\Eloquent\Model;

class Vacina extends Model
{
    protected $fillable = [

        'id',	'id_posto'	,'id_registro',	'endereco' ];
    //
        /**
     * The name of the "created at" column.
     *
     * @var string
     */
    const CREATED_AT = 'data_adicionado';

    /**
     * The name of the "updated at" column.
     *
     * @var string
     */
    const UPDATED_AT = 'data_atualizado';

    public function historico()
    {
        return $this->belongsToMany('VacinaOnline\Historico');
    }

   
}
