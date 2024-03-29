<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    use HasFactory;
    protected $table = 'order';
    protected $fillable = [
        'order_id',
        'user_id',
        'user_name',
        'user_email',
        'user_phone',
        'screening_id',
        'cinema_name',
        'movie_name',
        'total_price',
        'selected_seats',
        'status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function screenings()
    {
        return $this->belongsTo(Screenings::class);
    }
}
