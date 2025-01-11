<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Exception;

class UserTagController extends Controller
{
    public function update(Request $request)
    {
        try {
            $request->validate([
                'tags' => 'required|array',
            ]);

            $user = $request->user();
            $user->tags()->sync($request->tags);

            return response()->json([
                'message' => 'Tags updated successfully',
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to update tags',
            ], 500);
        }
    }
}
