<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookedTour extends Model
{
    protected $table = 'bookedtour';
    protected $fillable = ['id','customer_id','tour_id','booking_id','booking_date'];
}
