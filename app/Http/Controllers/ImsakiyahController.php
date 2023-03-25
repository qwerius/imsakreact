<?php

namespace App\Http\Controllers;

use App\Models\Imsakiyah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ImsakiyahController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $tanggalSekarang = date('d/m/Y');
        $tanggalBesok = date('d/m/Y', strtotime('+1 day'));
        $dataSekarang = Imsakiyah::where('Tanggal', $tanggalSekarang)->select(
            'Tanggal', 'Hari', 'Imsak', 'Subuh', 'Terbit', 'Dhuha', 'Dzuhur', 'Ashar', 'Maghrib', 'Isya'
        )->firstOrFail();
    try {
        $dataBesok = Imsakiyah::where('Tanggal', $tanggalBesok)->select(
            'Tanggal', 'Hari', 'Imsak', 'Subuh', 'Terbit', 'Dhuha', 'Dzuhur', 'Ashar', 'Maghrib', 'Isya'
        )->firstOrFail();
    } catch (\Exception $e) {
        $dataBesok = null;
        // Lakukan sesuatu untuk menangani exception, seperti menampilkan pesan error atau melakukan log
    }

       // return view('datacsv.index', compact('data')); ini untuk blade
        return Inertia::render('Imsakiyah',['dataSekarang'=> $dataSekarang, 'dataBesok'=> $dataBesok]);
    
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Imsakiyah $imsakiyah)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Imsakiyah $imsakiyah)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Imsakiyah $imsakiyah)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Imsakiyah $imsakiyah)
    {
        //
    }
}
