import React from 'react';
import moment from 'moment';

const Imsakiyah = ({ data }) => {
  return (
    <div>
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
          <tr>
            <td>{moment(data.Tanggal, 'DD/MM/YYYY').format('DD/MM/YYYY')}</td>
            <td>{data.Hari}</td>
            <td>{data.Imsak}</td>
            <td>{data.Subuh}</td>
            <td>{data.Terbit}</td>
            <td>{data.Dhuha}</td>
            <td>{data.Dzuhur}</td>
            <td>{data.Ashar}</td>
            <td>{data.Magrib}</td>
            <td>{data.Isya}</td>
          </tr>
        </tbody>
      </table>
      <div>
      <div>Tanggal: {moment(data.Tanggal, 'DD/MM/YYYY').format('DD/MM/YYYY')}</div>
      <div>Hari: {data.Hari}</div>
      <div>Imsak: {data.Imsak}</div>
      <div>Subuh: {data.Subuh}</div>
      <div>Terbit: {data.Terbit}</div>
      <div>Dhuha: {data.Dhuha}</div>
      <div>Dzuhur: {data.Dzuhur}</div>
      <div>Ashar: {data.Ashar}</div>
      <div>Magrib: {data.Magrib}</div>
      <div>Isya: {data.Isya}</div>
    </div>
    </div>
    
  );
};

export default Imsakiyah;
