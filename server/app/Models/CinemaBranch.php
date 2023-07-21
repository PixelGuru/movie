<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CinemaBranch extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'address', 'seats'];

    public function cinemas()
    {
        return $this->hasMany(Cinema::class);
    }
}
