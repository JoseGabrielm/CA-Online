<?php

namespace VacinaOnline;

use Illuminate\Database\Eloquent\Model;

class Vacina extends Model
{
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
}
