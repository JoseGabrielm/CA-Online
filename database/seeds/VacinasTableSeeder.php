<?php

use Illuminate\Database\Seeder;

class VacinasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('vacinas')->insert([
            'name' => str_random(10),
            'lote' => 1,
            'tipo' => 1,
            'data_de_validade' => date("Y-m-d H:i:s"),
     
        ]);
    }
}
