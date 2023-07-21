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

    ];
  
}
