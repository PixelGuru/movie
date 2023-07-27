<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;
    protected $dates = [
        'release_date',
        'created_at',
        'updated_at',
    ];
    protected $fillable = [
        'name',
        'genre',
        'duration',
        'release_date',
        'actors',
        'director',
        'content',
        'posters',
        'status'
    ];

    public function screenings()
    {
        return $this->hasMany(Screening::class);
    }
    public function posters()
    {
        return $this->hasMany(Poster::class);
    }
}
