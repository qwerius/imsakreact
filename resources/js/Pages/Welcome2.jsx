import { Link, Head } from '@inertiajs/react';
import moment from 'moment';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Imsakiyah" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-dasar dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="max-w-7xl mx-auto p-6 lg:p-8 ">
                    <div className="flex-nowrap text-center justify-center">
                        <div>
                            <h1 className="mt-1 mb-1 items-center text-4xl font-semibold text-gray-900 dark:text-white">Jadwal</h1>
                            <h1 className="mt-1 items-center sm:text-xl md:text-2xl xl:text-4xl">Imsakiyah 2023</h1>
                            <h1 className="items-center text-md">Kabupaten Ketapang dan Sekitarnya</h1>
                        </div>
                    </div>
                    <div className=" mx-4 mt-2 justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-5 ">

                            <div className='container xs:px-20 xs:px-20 md:mx-1 bg-biru rounded-xl'>
                                <div class="flex justify-center space-x-2">
                                    <button type="button" class="mt-4 inline-block rounded-full bg-hijau px-6 py-2 text-xs 
                                    font-medium uppercase leading-normal text-white shadow-[0px_4px_4px_#3b71ca] transition duration-150 ease-in-out 
                                    hover:bg-black hover:shadow-[0_4px_4px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                    focus:bg-primary-600 focus:shadow-[0px 4px 4px rgba(0,0,0,0.25),0px 4px 4px rgba(0,0,0,0.25)] 
                                    focus:outline-none focus:ring-0 active:bg-hijau active:shadow-[0_4px_4px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                        Hari Ini
                                    </button> 
                                    <button type="button" class="mt-4 inline-block rounded-full bg-hijau px-6 py-2 text-xs 
                                    font-medium uppercase leading-normal text-white shadow-[0px_4px_4px_#3b71ca] transition duration-150 ease-in-out 
                                    hover:bg-black hover:shadow-[0_4px_4px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                    focus:bg-primary-600 focus:shadow-[0px 4px 4px rgba(0,0,0,0.25),0px 4px 4px rgba(0,0,0,0.25)] 
                                    focus:outline-none focus:ring-0 active:bg-hijau active:shadow-[0_4px_4px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                        Besok
                                    </button> 
                                </div>

                                 <h2 className="mt-1 p-3 text-xl text-center font-semibold text-gray-900 dark:text-white">
                                 {data.Hari}
                                 </h2>
                                 <div class="grid xs:grid-cols-1 sm:grid-cols-2 sm:mx-5 md:grid-cols-4 mx-10 xl:grid-cols-8 gap-3">
                                    <div className=" rounded-md bg-abuhitam text-center  ">Imsak
                                        <div className="rounded-b-md bg-orange text-center text-xl font-semibold md:px-6">04:32 am</div>
                                    </div>
                                        <div className="rounded-md bg-abu text-center">Subuh
                                        <div className="rounded-b-md bg-kuning text-center text-xl font-semibold md:px-6">04:32 am</div>
                                    </div>
                                        <div className="rounded-md bg-abu text-center">Terbit
                                        <div className="rounded-b-md bg-kuning text-center text-xl font-semibold md:px-6">04:32 am</div>
                                    </div>
                                        <div className="rounded-md bg-abu text-center">Dhuha
                                        <div className="rounded-b-md bg-kuning text-center text-xl font-semibold md:px-6">04:32 am</div>
                                    </div>
                                        <div className="rounded-md bg-abu text-center">Dzuhur
                                        <div className="rounded-b-md bg-kuning text-center text-xl font-semibold md:px-6">04:32 am</div>
                                    </div>
                                        <div className="rounded-md bg-abu text-center">Ashar
                                        <div className="rounded-b-md bg-kuning text-center text-xl font-semibold md:px-6">04:32 am</div>
                                    </div>
                                        <div className="rounded-md bg-abuhitam text-center">Magrib
                                        <div className="rounded-b-md bg-orange text-center text-xl font-semibold md:px-6">04:32 am</div>
                                    </div>
                                        <div className="rounded-md bg-abu text-center">Isya
                                        <div className="rounded-b-md bg-kuning text-center text-xl font-semibold md:px-6">04:32 am</div>
                                    </div>
                                </div>
                                <p className="mt-1 p-5 text-gray-500 text-center dark:text-gray-400 text-sm leading-relaxed">
                                    Sumber: Bimas Islam Kemenag | © blueink
                                </p>
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                className="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
