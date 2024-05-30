<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class TourTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tour')->insert([
            [
                'typetour_id' => 2,
                'tour_name' => 'Tour Biển Đà nẵng',
                'price' => 4000000.00,
                'departure_day' => '2024-08-10',
                'time' => 3,
                'vehicles' => 'Thuyền',
                'describe' => 'Một chuyến du lịch thú vị khám phá vẻ đẹp của biển Đà Nẵng.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'typetour_id' => 4,
                'tour_name' => 'Tour du lịch Hà Nội - Huế',
                'price' => 3000000.00,
                'departure_day' => '2024-08-05',
                'time' => 3,
                'vehicles' => 'Xe ô tô',
                'describe' => 'Một chuyến du lịch thú vị khám phá các địa điểm nổi tiếng tại Hà Nội, Huế.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
