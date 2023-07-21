<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;
    protected $fillable = [
 
        'name',
        'genre',
        'duration',
        'actors',
        'director',
        'content',
        'status'
    ];

    public function screenings()
    {
        return $this->hasMany(Screening::class);
    }
    // Định nghĩa mối quan hệ một-múi-nhiều với bảng 'posters'
    public function posters()
    {
        return $this->hasMany(Poster::class);
    }
}
