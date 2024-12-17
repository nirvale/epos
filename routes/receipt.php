<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Route;
#use Illuminate\Support\Facades\Storage;


//Recuperando datos para recibos
Route::resource('receipt', ReceiptController::class);

Route::get('/', [ReceiptController::class, 'test']);
