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
        Schema::create('order', function (Blueprint $table) {
            $table->id();
            $table->string('order_id')->unique();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('screening_id');
            $table->string('user_name');
            $table->string('user_email');
            $table->string('user_phone');
            $table->string('cinema_name');
            $table->string('movie_name');
            $table->string('selected_seats');
            $table->decimal('total_price', 10, 2);
            $table->timestamps();


            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('screening_id')->references('id')->on('screenings');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order');
    }
};
