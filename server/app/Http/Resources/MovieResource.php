<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $movieStatus = [
            0 => 'hide',
            1 => 'show',
        ];
        $movieStatusText = isset($movieStatus[$this->status]) ? $movieStatus[$this->status] : 'N/A';

        return [
            'id' => $this->id,
            'name' => $this->name,
            'genre' => $this->genre,
            'duration' => $this->duration,
            'actors' => $this->actors,
            'director' => $this->director,
            'content' => $this->content,
            'status' =>    $movieStatusText,
            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y'),
        ];
    }
}
