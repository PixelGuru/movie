<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ScreeningResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'movie_id' => $this->movie_id,
            'cinema_id' => $this->cinema_id,
            'cinema_branch_id' => $this->cinema_branch_id,
            'time' => $this->time,
            'price' => $this->price,
            'remaining_seats' => $this->remaining_seats,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
