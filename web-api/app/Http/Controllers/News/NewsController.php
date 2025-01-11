<?php

namespace App\Http\Controllers\News;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Exception;

class NewsController extends Controller
{
    public function getNewsByUser(Request $request)
    {
        try {
            $news = $request->user()
                            ->tags->load('news')
                            ->pluck('news')
                            ->flatten();

            return response()->json($news);
        }
        catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to get news',
            ], 500);
        }
    }
}
