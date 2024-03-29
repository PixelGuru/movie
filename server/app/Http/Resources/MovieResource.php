<?php

namespace App\Http\Resources;

use Carbon\Carbon;
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
        if ($this->status === 0) {
            $movieStatusText = 'Hide';
        } elseif ($this->status === 1) {
            $movieStatusText = 'Show';
        } else {
            $movieStatusText = 'Coming Soon';
        }
        $releaseDate = Carbon::createFromFormat('Y-m-d', $this->release_date)->format('d/m/Y');

        return [
            'id' => $this->id,
            'name' => $this->name,
            'genre' => $this->genre,
            'duration' => $this->duration,
            'actors' => $this->actors,
            'director' => $this->director,
            'release_date' => $releaseDate,
            'content' => $this->content,
            'posters' => $this->posters,
            'status' => $movieStatusText,
            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y'),
        ];
    }
}
