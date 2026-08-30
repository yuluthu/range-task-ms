<?php

namespace Database\Seeders;

use App\Models\Data;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $contents = Storage::json('product.json');
        foreach ($contents['product_arr'] as $item) {
            // noticed the falses are showing up in the DB as 0, so forcing them to null
            Data::create([
                'name' => $item['name'] ?: null,
                'price' => $item['price'] ?: null,
                'was_price' => $item['was_price'] ?: null,
                'reviews' => $item['reviews'] ?: null,
                'img_id' => $item['img'] ?: null,
            ]);
        }
    }
}
