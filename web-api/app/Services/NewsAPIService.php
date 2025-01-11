<?php

namespace App\Services;

use App\Interfaces\NewsAPIInterface;
use App\Traits\FetchNews;

class NewsAPIService implements NewsAPIInterface
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
                env('NEWSAPI_URL'),
                ['apiKey' => env('NEWSAPI_API_KEY')],
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

    public function handlePagination($response)
    {
        return $response;
    }


}
