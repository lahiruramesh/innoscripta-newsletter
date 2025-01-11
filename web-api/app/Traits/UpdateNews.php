<?php

namespace App\Traits\Traits;

use App\Models\News;

trait UpdateNews
{
    public function updateNews($news) {
        $news = News::find($news->id);
        $news->title = $news->title;
        $news->content = $news->content;
        $news->author = $news->author;
        $news->source = $news->source;
        $news->published_at = $news->published_at;
        $news->tags = $news->tags;
        $news->save();
    }
}
