import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { SmallProfile } from '../../components/profile/SmallProfile';
import './clients.scss';
import {AiOutlineMore} from 'react-icons/ai';
import {IoIosAddCircleOutline} from 'react-icons/io';
import ClientForm from '../../components/forms/clientForm/ClientForm';



export const Clients = () => {
  let active = 2;
  let items = [];
  return (
    <div className='clients'>
      <h3 className='mb-3'>Clinets</h3>
      <div className='table-container'>
      <Button className='add' style={{marginBottom:"1rem",float : 'right'}} >
        Add <IoIosAddCircleOutline style={{fontSize : '20px'}} />
      </Button>
      <div className='container'>

      </div>
    </div>
    </div>
  )
}
