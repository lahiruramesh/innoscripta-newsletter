<?php

namespace App\Interfaces;

interface NewsAPIInterface
{
    public function getNewsHeadLinesByTags($filters);

    public function getTags();

}
