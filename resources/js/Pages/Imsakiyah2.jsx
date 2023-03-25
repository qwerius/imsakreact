import React, { useState, useEffect } from 'react';

const Imsakiyah = ({ data }) => {
  const [imsakiyahData, setImsakiyahData] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/imsakiyah-data');
      const data = await response.json();
      setImsakiyahData(data);
    };
    fetchData();
  }, []);

  return (
    <div className='bg-blue mt-10 mx-10 p-4 rounded-full'>
      <h1>Daftar Jadwal Imsakiyah</h1>
      <table>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Hari</th>
            <th>Imsak</th>
            <th>Subuh</th>
            <th>Terbit</th>
            <th>Dhuha</th>
            <th>Dzuhur</th>
            <th>Ashar</th>
            <th>Magrib</th>
            <th>Isya</th>
          </tr>
        </thead>
        <tbody>
          {imsakiyahData.map((row) => (
            <tr key={row.id}>
              <td>{row.Tanggal}</td>
              <td>{row.Hari}</td>
              <td>{row.Imsak}</td>
              <td>{row.Subuh}</td>
              <td>{row.Terbit}</td>
              <td>{row.Dhuha}</td>
              <td>{row.Dzuhur}</td>
              <td>{row.Ashar}</td>
              <td>{row.Magrib}</td>
              <td>{row.Isya}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Imsakiyah;
