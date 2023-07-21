<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cinemas extends Model
{
    use HasFactory;
    protected $fillable = ['cinema_branch_id', 'name', 'address', 'seats'];

    public function cinemaBranch()
    {
        return $this->belongsTo(CinemaBranch::class);
    }

    public function screenings()
    {
        return $this->hasMany(Screening::class);
    }
}
