<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Screenings extends Model
{
    use HasFactory;
    protected $fillable = ['movie_id', 'cinema_id', 'cinema_branch_id', 'date_show', 'start_time', 'end_time', 'price', 'room','seat', 'remaining_seats'];

    public function movie()
    {
        return $this->belongsTo(Movie::class);
    }

    public function cinema()
    {
        return $this->belongsTo(Cinema::class);
    }

    public function cinemaBranch()
    {
        return $this->belongsTo(CinemaBranch::class);
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function foods()
    {
        return $this->belongsToMany(Food::class, 'food_screening', 'screening_id', 'food_id')->withTimestamps();
    }
}
