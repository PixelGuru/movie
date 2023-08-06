<?php

namespace App\Http\Resources;

use Carbon\Carbon;
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
        $date_show = Carbon::createFromFormat('Y-m-d', $this->date_show)->format('d/m/Y');
        $start_time = Carbon::createFromFormat('H:i:s', $this->start_time)->format('H:i');
        $end_time = Carbon::createFromFormat('H:i:s', $this->end_time)->format('H:i');

        return [
            'id' => $this->id,
            'movie_id' => $this->movie_id,
            'movie_name' => $this->movie_name,
            'cinema_name' => $this->cinema_name,
            'cinema_branch_id' => $this->cinema_branch_id,
            'date_show' =>   $date_show,
            'start_time' => $start_time,
            'end_time' => $end_time,
            'price' => number_format($this->price, 0, '', ''),
            'room' => $this->room,
            'total_seat' => $this->total_seat,
            'remaining_seats' => $this->remaining_seats,
            'posters' => $this->posters,
            'content' => $this->content,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
