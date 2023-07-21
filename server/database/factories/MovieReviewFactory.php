<?php

namespace Database\Factories;

use App\Models\ListUser;
use App\Models\Movie;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MovieReview>
 */
class MovieReviewFactory extends Factory
{
    protected $model = MovieReview::class;

    public function definition()
    {
        return [
            'movie_id' => Movie::factory()->create()->id,
            'user_id' => User::factory()->create()->id,
            'rating' => $this->faker->numberBetween(1, 5),
            'review' => $this->faker->paragraph,
        ];
    }
}
