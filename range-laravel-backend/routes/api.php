<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Data;

Route::get('/data', function (Request $request) {
    sleep(5);
    return Data::all();
});