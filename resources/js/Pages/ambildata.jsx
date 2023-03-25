import React, { useState } from 'react';
import axios from 'axios';

function Imsakiyah() {
  const [jadwal, setJadwal] = useState([]);

  const handleGetData = async () => {
    try {
      const response = await axios.post('http://equran.id/api/v2/imsakiyah/jadwal', {
        provinsi: 'Kalimantan Barat',
        kabKota: 'Kab. Ketapang'
      });
      setJadwal(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleGetData}>Get Data</button>
      {Object.keys(jadwal).length > 0 && (
        <div>
          <p>Provinsi: {jadwal.provinsi}</p>
          <p>Kab/Kota: {jadwal.kabKota}</p>
          {Object.keys(jadwal.data).map((date, index) => (
            <div key={index}>
              <p>Tanggal: {jadwal.data[date].tanggal}</p>
              <p>Subuh: {jadwal.data[date].subuh}</p>
              <p>Dzuhur: {jadwal.data[date].dzuhur}</p>
              <p>Ashar: {jadwal.data[date].ashar}</p>
              <p>Maghrib: {jadwal.data[date].maghrib}</p>
              <p>Isya: {jadwal.data[date].isya}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Imsakiyah;
