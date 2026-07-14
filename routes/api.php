<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CvAnalysisController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

# Route post cv
Route::post('/analyze-cv', [CvAnalysisController::class, 'analyze'])->name('analyze.cv');