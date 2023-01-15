import React from 'react';
import { Table } from 'react-bootstrap';
import './clients.scss';

export const Clients = () => {
  return (
    <div>
      <h3 className='mb-3'>Clinets</h3>
      <div className='table-container'>
      <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Orders</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abdelaziz kazoum</td>
          <td>10</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Ali hassan</td>
          <td>2</td>
          <td>...</td>
        </tr>
        <tr>
          <td colSpan={1}>Larry the Bird</td>
          <td >20</td>
          <td colSpan={1}>...</td>

        </tr>
      </tbody>
    </Table>
      </div>
    </div>
  )
}
