<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class CustomerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('customer')->insert([
            [
                'name' => 'Nguyễn Xuân Minh',
                'gender' => 'male',
                'birthday' => '2002-05-06',
                'phone_number' => '0374985637',
                'address' => 'Quang Trung, Hà Đông, Hà Nội',
                'email' => 'nxuanminh65@gmail.com',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Hoàng Tuấn Nam',
                'gender' => 'male',
                'birthday' => '2002-01-09',
                'phone_number' => '0954635187',
                'address' => 'Thanh xuân, Hà nội',
                'email' => 'namhoangtuan@gmail.com',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Trần Hà Anh',
                'gender' => 'female',
                'birthday' => '2000-05-05',
                'phone_number' => '0871649735',
                'address' => 'Hoà Bình',
                'email' => 'haanh5500@gmail.com',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
