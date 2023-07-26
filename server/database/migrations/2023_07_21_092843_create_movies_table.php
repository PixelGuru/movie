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
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('genre', 255)->nullable();
            $table->integer('duration')->nullable();
            $table->date('release_date');
            $table->string('actors')->nullable();
            $table->text('director')->nullable();
            $table->text('content')->nullable();
            $table->text('posters')->nullable();
            $table->boolean('status')->nullable()->default(1);;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
