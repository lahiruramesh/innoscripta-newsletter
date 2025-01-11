<?php

namespace App\Traits;

use App\Models\Tags;

trait UpdateTags
{
    public function updateTags($tags)
    {
        $tags = explode(',', $tags);
        $tags = array_map('trim', $tags);
        $tags = array_unique($tags);
        $tags = array_filter($tags);

        $tagIds = [];
        foreach ($tags as $tag) {
            $tag = Tags::firstOrCreate(['name' => $tag]);
            $tagIds[] = $tag->id;
        }

        $this->tags()->sync($tagIds);
    }
}
