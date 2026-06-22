<?php

use Illuminate\Support\Facades\Route;

// =============================================
// PUBLIC MOCKUP ROUTES (ProSafe Indonesia)
// =============================================
Route::inertia('/', 'public/home')->name('home');
Route::inertia('/jadwal', 'public/jadwal')->name('jadwal');
Route::inertia('/tentang-kami', 'public/tentang-kami')->name('tentang-kami');
Route::inertia('/corporate', 'public/corporate')->name('corporate');
Route::inertia('/kontak', 'public/kontak')->name('kontak');
Route::inertia('/blog', 'public/blog')->name('blog');
Route::inertia('/galeri', 'public/galeri')->name('galeri');
Route::inertia('/testimoni', 'public/testimoni')->name('testimoni');
Route::inertia('/cabang', 'public/cabang')->name('cabang');
Route::inertia('/cek-sertifikat', 'public/cek-sertifikat')->name('cek-sertifikat');

// Kategori Pelatihan
Route::get('/pelatihan/{category}', function ($category) {
    return inertia('public/kategori-pelatihan', ['category' => $category]);
})->name('kategori-pelatihan');

// Detail Program (mock - all show the same AK3U template)
Route::get('/program/{slug}', function ($slug) {
    return inertia('public/detail-program', ['slug' => $slug]);
})->name('detail-program');

// =============================================
// ADMIN / DASHBOARD ROUTES
// =============================================
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
