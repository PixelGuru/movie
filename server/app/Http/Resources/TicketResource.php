<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TicketResource extends JsonResource
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
            'user_id' => $this->user_id,
            'screening_id' => $this->screening_id,
            'seat_number' => implode(',', $this->seat_number),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
