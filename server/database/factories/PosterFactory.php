<?php

namespace Database\Factories;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Poster>
 */
class PosterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $arrayMovie =Movie::all()->pluck('id');
        $MovieId = fake()->randomElement($arrayMovie);
        return [
            'movie_id' =>  $MovieId,
            'image_path' => $this->faker->imageUrl(), // Đường dẫn tới hình ảnh của poster
            // Thêm các cột khác nếu cần
        ];
    }
}
