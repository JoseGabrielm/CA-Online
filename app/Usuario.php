<?php

namespace VacinaOnline;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    //
    public function registro()
    {
        return $this->hasOne('App\Registro','foreign_key', 'local_key');
    }
}
