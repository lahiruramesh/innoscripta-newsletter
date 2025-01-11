<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserTags extends Model
{
    protected $fillable = [
        'user_id',
        'tags',
    ];
}
