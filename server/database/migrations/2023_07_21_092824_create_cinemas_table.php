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
        Schema::create('cinemas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cinema_branch_id')->nullable();
            $table->string('name');
            $table->string('address')->nullable();
            $table->integer('capacity')->nullable();
            $table->timestamps();

            $table->foreign('cinema_branch_id')->references('id')->on('cinema_branches')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cinemas');
    }
};
