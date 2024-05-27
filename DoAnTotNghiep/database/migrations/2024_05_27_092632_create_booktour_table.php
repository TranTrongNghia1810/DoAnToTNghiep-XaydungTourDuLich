<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('booktour', function (Blueprint $table) {
            $table->id();
            $table->integer('tour_id')->unsigned();
            $table->integer('customer_id')->unsigned();
            $table->date('booking_date');
            $table->foreign('tour_id')->references('id')->on('tour')->onUpdate('cascade');
            $table->foreign('customer_id')->references('id')->on('customer')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booktour');
    }
};
