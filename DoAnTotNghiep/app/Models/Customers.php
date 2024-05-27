<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    protected $table = 'Customer';
    protected $fillable = ['id','name','gender','birthday','phone_number','address','email'];
}
