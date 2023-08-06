<?php

namespace Database\Factories;

use App\Models\CinemaBranch;
use App\Models\Cinemas;
use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Screening>
 */
class ScreeningsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        $arrayMovie = Movie::all()->pluck('id');
        $MovieId = fake()->randomElement($arrayMovie);

        $arrCinemaId = Cinemas::all()->pluck('id');
        $cinemaId = fake()->randomElement($arrCinemaId);

        return [
            'cinema_id' => $cinemaId,
            'movie_id' => $MovieId,
            'date_show' => fake()->dateTime(),
            'start_time' => fake()->Time(),
            'end_time' => fake()->Time(),
            'price' => fake()->numberBetween(60000, 120000),
            'room' => fake()->numberBetween(1, 5),
            'remaining_seats' => fake()->numberBetween(0 , 60)
        ];
    }
}
