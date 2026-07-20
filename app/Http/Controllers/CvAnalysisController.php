<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Http\Client\ConnectionException;

class CvAnalysisController extends Controller
{
    public function analyze(Request $request)
    {
        // NOTE - Validasi request frontend
        $request->validate([
            'cv_file' => 'required|file|mimes:pdf|max:5120', // max 5MB
        ]);

        // NOTE - Simpan file request front end
        $file = $request->file('cv_file');

        // NOTE - Request service ai menggunakan multipart
        try {
            $response = Http::timeout(120)->attach(
                'cv_file',                          // field name
                file_get_contents($file->getRealPath()), // file bytes
                $file->getClientOriginalName() // file name
            )->post('http://localhost:8001/analyze'); // ganti sesuai host FastAPI kamu
        } catch (ConnectionException) {
            // FastAPI gak reachable sama sekali
            return response()->json([
                'success' => false,
                'code' => 'AI_SERVICE_UNAVAILABLE',
                'message' => 'AI service unreachable',
                'filename' => $file->getClientOriginalName(),
                "suggestion" => "Please try again later"
            ], 503);
        }

        // NOTE - Forward error service ai
        if ($response->failed()) {
            return response()->json(
                $response->json(),
                $response->status()
            );
        }

        // NOTE - Response success
        return $response->json();
    }
}