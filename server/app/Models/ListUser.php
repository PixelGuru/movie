<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListUser extends Model
{
    use HasFactory;
    protected $table = 'users';
    protected $dates = [
        'birthday',
        'created_at',
        'updated_at',
    ];
    public $fillable = [
        'name',
        'gender',
        'birthday',
        'email',
        'password',
        'phone',
        'role',
        'level'
    ];
    public function session()
    {
        return $this->hasMany(SessionUser::class, 'user_id');
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function movieReviews()
    {
        return $this->hasMany(MovieReview::class);
    }
}
