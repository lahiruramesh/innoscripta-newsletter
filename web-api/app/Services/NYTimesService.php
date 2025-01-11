<?php

namespace App\Services;

use App\Interfaces\NewsAPIInterface;
use App\Traits\FetchNews;

class NYTimesService implements NewsAPIInterface
{

    use FetchNews;

    public function __construct()
    {
        //
    }

    public function getNewsHeadLinesByTags($filters)
    {
        try {
            $response = $this->getInfo(
                env('NYTIMES_URL'),
                ['api-key' => env('NYTIMES_API_KEY')],
                $filters
            );
            return $response;
        } catch (Exception $e) {
            throw new Exception('Failed to fetch news headlines');
        }
    }

    public function getTags()
    {
        return [
            'politics',
            'business',
            'sports',
            'entertainment',
            'technology',
            'science',
            'health'
        ];
    }
}
