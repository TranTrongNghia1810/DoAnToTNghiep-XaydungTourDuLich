<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class TypetourTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('typetour')->insert([
            [
                'name_type' => 'Du lịch khám phá',
            ],
            [
                'name_type' => 'Du lịch biển',
            ],
            [
                'name_type' => 'Du lịch thiên nhiên',
            ],
            [
                'name_type' => 'Du lịch thăm quan',
            ],
        ]);
    }
}
