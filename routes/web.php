<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CvAnalysisController;


Route::inertia('/', 'home/index')->name('home');
Route::inertia('/test', 'welcome')->name('welcome');

