<?php

namespace App\Http\Controllers\Tags;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Tags;
use Exception;

class TagController extends Controller
{
    public function index()
    {
        try {
            $tags = Tags::all();

            return response()->json($tags);
        }
        catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to get tags',
            ], 500);
        }
    }
}
