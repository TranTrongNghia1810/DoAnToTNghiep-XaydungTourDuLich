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
        Schema::create('tour', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('typetour_id')->unsigned();
            $table->string('tour_name', 100);
            $table->float('price');
            $table->date('departure_day');
            $table->integer('time');
            $table->string('vehicles', 100);
            $table->string('describe', 200);
            $table->foreign('typetour_id')->references('id')->on('typetour')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tour');
    }
};
