import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from '../../components/table/Table';
import { SmallProfile } from '../../components/profile/SmallProfile';
import './clients.scss';
import {AiOutlineMore} from 'react-icons/ai';
import {IoIosAddCircleOutline} from 'react-icons/io';
import ClientForm from '../../components/forms/clientForm/ClientForm';


export const Clients = () => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className='clients'>
      <h3 className='mb-3'>Clinets</h3>
      <ClientForm setIsOpen={setIsOpen} isOpen={isOpen} />


      <div className='table-container'>
      <Button className='add' style={{marginBottom:"1rem",float : 'right'}} onClick={()=> setIsOpen(true)}>
        Add <IoIosAddCircleOutline style={{fontSize : '20px'}} />
      </Button>
      <div className='container'>
        <Table />
      </div>
    </div>
    </div>
  )
}
