<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // goi ra nhung seeder nao
        $this->call(AccountTableSeeder::class);
        $this->call(AdminTableSeeder::class);
        $this->call(BookedtourTableSeeder::class);
        $this->call(BookingTableSeeder::class);
        $this->call(CustomerTableSeeder::class);
        $this->call(DiscountTableSeeder::class);
        $this->call(FavoritetourTableSeeder::class);
        $this->call(PaymentTableSeeder::class);
        $this->call(TourTableSeeder::class);
        $this->call(TypetourTableSeeder::class);
    }
}
