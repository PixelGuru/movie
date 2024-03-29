<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(5)->create();
        // \App\Models\Movie::factory(5)->create();
        // \App\Models\Poster::factory(5)->create();
        // \App\Models\Cinemas::factory(2)->create();
        // \App\Models\Screenings::factory(10)->create();
        \App\Models\Seat::factory(50)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
     
    }
}
