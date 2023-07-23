<?php

namespace Database\Factories;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    protected $model = Movie::class;

    public function definition()
    {
        
        return [
            'name' => fake()->name,
            'genre' => fake()->name,
            'duration' => fake()->numberBetween(60, 190),
            'actors' => fake()->name,
            'director' => fake()->name,
            'content' => fake()->text,
            'posters'=>fake()->imageUrl(), 
            'status' => fake()->numberBetween(0, 1),



        ];
    }
}
