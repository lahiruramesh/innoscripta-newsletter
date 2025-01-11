<?php

namespace App\Traits;

use Illuminate\Support\Facades\Http;
use Exception;

trait FetchNews
{
    public function getInfo($url, $apiKey, $filters)
    {
        try {
            $params = array_merge($apiKey, $filters);
            $response = Http::get($url, $params);
            return $response->json();
        }
        catch (Exception $e) {
            throw new Exception('Failed to fetch news headlines');
        }
    }
}
