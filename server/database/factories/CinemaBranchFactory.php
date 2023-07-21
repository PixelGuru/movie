<?php

namespace Database\Factories;

use App\Models\Cinemas;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CinemaBranch>
 */
class CinemaBranchFactory extends Factory
{
    protected $model = CinemaBranch::class;

    public function definition()
    {
        return [
            'cinema_id' => Cinemas::factory()->create()->id,
            'branch_name' => $this->faker->company,
            'location' => $this->faker->address,
        ];
    }
}
