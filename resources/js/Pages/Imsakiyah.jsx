import { Link, Head } from '@inertiajs/react';
import React, {useState} from 'react';
import moment from 'moment';


const Imsakiyah =({dataSekarang, dataBesok})=>{
    const [currentData, setCurrentData] = useState(dataSekarang);

    const handleReload = () => {
        setCurrentData(dataSekarang);
    };

    const handleBesok = () => {
        setCurrentData(dataBesok);
    };
    if (!dataBesok) {
        return (
          <div>
            <h2>Data tidak ditemukan "Selamat Hari Raya Idul Fitri 1 Syawal 1444 H"</h2>
          </div>
        );
      }

    return (
        <>
            <Head title="Imsakiyah" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-dasar dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="max-w-7xl mx-auto p-6 lg:p-8 ">
                    <div className="flex-nowrap text-center justify-center">
                        <div>
                            <h1 className="mt-1 mb-1 items-center text-4xl font-semibold text-gray-900 dark:text-white">Jadwal Imsakiyah</h1>
                            <h1 className="mt-1 items-center sm:text-xl md:text-2xl xl:text-4xl">Ramadhan 2023 M / 1444 H</h1>
                            <h1 className="items-center text-md">Kabupaten Ketapang dan Sekitarnya</h1>
                        </div>
                    </div>
                    <div className=" mx-4 mt-2 justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-5 ">

                            <div className='container xs:px-20 xs:px-20 md:mx-1 bg-biru rounded-xl'>
                                <div class="flex justify-center space-x-2">
                                    <button onClick={handleReload} type="button" class="mt-4 inline-block rounded-full bg-hijau px-6 py-2 text-xs 
                                    font-medium uppercase leading-normal text-white shadow-[0px_4px_4px_#3b71ca] transition duration-150 ease-in-out 
                                    hover:bg-black hover:shadow-[0_4px_4px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                    focus:bg-primary-600 focus:shadow-[0px 4px 4px rgba(0,0,0,0.25),0px 4px 4px rgba(0,0,0,0.25)] 
                                    focus:outline-none focus:ring-0 active:bg-hijau active:shadow-[0_4px_4px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                        Hari Ini 
                                    </button> 
                                    <button onClick={handleBesok} type="button" class="mt-4 inline-block rounded-full bg-hijau px-6 py-2 text-xs 
                                    font-medium uppercase leading-normal text-white shadow-[0px_4px_4px_#3b71ca] transition duration-150 ease-in-out 
                                    hover:bg-black hover:shadow-[0_4px_4px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                    focus:bg-primary-600 focus:shadow-[0px 4px 4px rgba(0,0,0,0.25),0px 4px 4px rgba(0,0,0,0.25)] 
                                    focus:outline-none focus:ring-0 active:bg-hijau active:shadow-[0_4px_4px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                        Besok
                                    </button> 
                                </div>

                                 <h2 className="mt-1 p-3 text-xl text-center font-semibold text-gray-900 dark:text-white">
                                 {currentData.Hari}
                                 </h2>
                                 <div class="grid xs:grid-cols-1 sm:grid-cols-2 sm:mx-5 md:grid-cols-4 mx-10 xl:grid-cols-8 gap-3">
                                    <div className=" animate-pulse rounded-md bg-abuhitam text-center  ">Imsak
                                        <div className="rounded-b-md bg-orange text-center text-xl font-semibold md:px-8">{currentData.Imsak} wib</div>
                                    </div>
                                        <div className="rounded-md bg-abu text-center">Subuh
                                        <div className="rounded-b-md bg-kuning text-center text-xl font-semibold md:px-8">{currentData.Subuh} wib</div>
                                    </div>
                                        <div className="rounded-md bg-abu text-center">Terbit
                                        <div className="rounded-b-md bg-kuning text-center text-xl font-semibold md:px-8">{currentData.Terbit} wib</div>
                                    </div>
                                        <div className="rounded-md bg-abu text-center">Dhuha
                                        <div className="rounded-b-md bg-kuning text-center text-xl font-semibold md:px-8">{currentData.Dhuha} wib</div>
                                    </div>
                                        <div className="rounded-md bg-abu text-center">Dzuhur
                                        <div className="rounded-b-md bg-kuning text-center text-xl font-semibold md:px-8">{currentData.Dzuhur} wib</div>
                                    </div>
                                        <div className="rounded-md bg-abu text-center">Ashar
                                        <div className="rounded-b-md bg-kuning text-center text-xl font-semibold md:px-8">{currentData.Ashar} wib</div>
                                    </div>
                                        <div className="animate-pulse rounded-md bg-abuhitam text-center">Magrib
                                        <div className="rounded-b-md bg-orange text-center text-xl font-semibold md:px-8">{currentData.Maghrib} wib</div>
                                    </div>
                                        <div className="rounded-md bg-abu text-center">Isya
                                        <div className="rounded-b-md bg-kuning text-center text-xl font-semibold md:px-8">{currentData.Isya} wib</div>
                                    </div>
                                </div>
                                <p className="mt-1 p-5 text-gray-500 text-center dark:text-gray-400 text-sm leading-relaxed">
                                    Sumber: Bimas Islam Kemenag | © blueink
                                </p>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </div>

           
        </>
    );
};

export default Imsakiyah;
