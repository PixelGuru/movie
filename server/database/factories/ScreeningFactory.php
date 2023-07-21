<?php

namespace Database\Factories;

use App\Models\CinemaBranch;
use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Screening>
 */
class ScreeningFactory extends Factory
{
    protected $model = Screening::class;

    public function definition()
    {
        return [
            'cinema_branch_id' => CinemaBranch::factory()->create()->id,
            'movie_id' => Movie::factory()->create()->id,
            'start_time' => $this->faker->dateTimeThisMonth,
        ];
    }
}
