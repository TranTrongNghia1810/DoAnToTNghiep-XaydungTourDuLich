<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavoriteTour extends Model
{
    protected $table = 'favoritetour';
    protected $fillable = ['id','tour_id','customer_id'];
}
