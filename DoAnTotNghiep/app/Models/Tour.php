<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    protected $table = 'tour';
    protected $fillable = ['id','tour_name','picture','pice','departure_day','time','vehicles','describe'];
}
