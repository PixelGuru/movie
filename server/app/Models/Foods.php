<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foods extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description', 'price', 'type'];

    public function screenings()
    {
        return $this->belongsToMany(Screening::class, 'food_screening', 'food_id', 'screening_id')->withTimestamps();
    }
}
