<?php

namespace Database\Factories;

use App\Models\Foods;
use App\Models\ListUser;
use App\Models\Screenings;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    protected $model = Ticket::class;

    public function definition()
    {
        return [
            'screening_id' => Screenings::factory()->create()->id,
            'user_id' => User::factory()->create()->id,
            'food_id' => Foods::factory()->create()->id,
            'quantity' => $this->faker->numberBetween(1, 5),
        ];
    }
}
