<?php

namespace App\Services;

use App\Interfaces\NewsAPIInterface;
use App\Traits\FetchNews;

class GuardianService implements NewsAPIInterface
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
                env('GUARDIAN_URL'), 
                ['api-key' => env('GUARDIAN_API_KEY')],
                $filters
            );            

        } catch (Exception $e) {
            
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
