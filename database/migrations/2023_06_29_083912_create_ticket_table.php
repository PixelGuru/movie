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
        Schema::create('ticket', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customers_id');
            $table->foreign('customers_id')->references('id')->on('customers');
            $table->unsignedBigInteger('showtime_id');
            $table->foreign('showtime_id')->references('id')->on('showtime');
            // $table->unsignedBigInteger('room_id');
            // $table->foreign('room_id')->references('id')->on('room');
            // $table->unsignedBigInteger('seat_id');
            // $table->foreign('seat_id')->references('id')->on('seat');
            $table->date('purchase_date');
            $table->decimal('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket');
    }
};
