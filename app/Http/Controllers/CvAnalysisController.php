<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class CvAnalysisController extends Controller
{
    public function analyze(Request $request)
    {
        // 1. Validasi dulu di sisi Laravel
        $request->validate([
            'cv_file' => 'required|file|mimes:pdf|max:5120', // max 5MB
        ]);

        // NOTE - Simpan file request front end
        $file = $request->file('cv_file');

        // 2. Forward ke FastAPI pakai multipart
        $response = Http::timeout(60)->attach(
            'cv_file',                          // field name
            file_get_contents($file->getRealPath()), // file bytes
            $file->getClientOriginalName() // file name
        )->post('http://localhost:8001/analyze'); // ganti sesuai host FastAPI kamu

        // 3. Handle kalau FastAPI error/down
        if ($response->failed()) {
            return back()->withErrors(['cv_file' => 'Gagal memproses CV, coba lagi.']);
        }

        // 4. Balikin ke Inertia sebagai props
        return $response->json();
    }
}