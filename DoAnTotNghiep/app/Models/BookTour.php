<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookTour extends Model
{
    protected $table = 'booktour';
    protected $fillable = ['id','tour_id','customer_id','booking_date'];
}
