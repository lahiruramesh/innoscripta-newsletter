<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Exception;

class UserController extends Controller
{
    public function profile(Request $request)
    {
        try {
            return response()->json($request->user());
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to get profile',
            ], 500);
        }
    }

    public function updateProfile(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string',
                'email' => 'required|email|unique:users,email,' . $request->user()->id,
            ]);

            $user = $request->user();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->save();

            return response()->json([
                'message' => 'Profile updated successfully',
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to update profile',
            ], 500);
        }
    }
}
