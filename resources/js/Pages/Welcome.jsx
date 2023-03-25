import { useState, useEffect } from 'react';
import axios from 'axios';

function Welcome() {
    const [jadwalHariIni, setJadwalHariIni] = useState(null);
    const [jadwalHariBesok, setJadwalHariBesok] = useState(null);

    useEffect(() => {
        getJadwal('hari_ini');
    }, []);

    const getJadwal = (jenisHari) => {
        const data = {
            provinsi: 'Kalimantan Barat',
            kabKota: 'Kab. Ketapang'
        };

        axios.post('/api/v2/imsakiyah/jadwal', data)
            .then(response => {
                const jadwal = response.data.jadwal;
                const hariIni = jadwal[new Date().getDate()];
                const hariBesok = jadwal[new Date().getDate() + 1];

                if (jenisHari === 'hari_ini') {
                    setJadwalHariIni(hariIni);
                } else {
                    setJadwalHariBesok(hariBesok);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleHariIni = () => {
        getJadwal('hari_ini');
    }

    const handleHariBesok = () => {
        getJadwal('hari_besok');
    }

    return (
        <div>
            <h1>Jadwal Imsakiyah</h1>
    
            <div>
                <h2>{showHariIni ? 'Hari Ini' : 'Besok'}</h2>
                <p>Subuh: {showHariIni ? (jadwalHariIni ? jadwalHariIni.subuh : '-') : (jadwalBesok ? jadwalBesok.subuh : '-')}</p>
                <p>Dzuhur: {showHariIni ? (jadwalHariIni ? jadwalHariIni.dzuhur : '-') : (jadwalBesok ? jadwalBesok.dzuhur : '-')}</p>
                <p>Ashar: {showHariIni ? (jadwalHariIni ? jadwalHariIni.ashar : '-') : (jadwalBesok ? jadwalBesok.ashar : '-')}</p>
                <p>Maghrib: {showHariIni ? (jadwalHariIni ? jadwalHariIni.maghrib : '-') : (jadwalBesok ? jadwalBesok.maghrib : '-')}</p>
                <p>Isya: {showHariIni ? (jadwalHariIni ? jadwalHariIni.isya : '-') : (jadwalBesok ? jadwalBesok.isya : '-')}</p>
            </div>
            
            <button onClick={toggleJadwal}>
                {showHariIni ? 'Jadwal Besok' : 'Jadwal Hari Ini'}
            </button>
        </div>
    );
    
};

export default Welcome;
