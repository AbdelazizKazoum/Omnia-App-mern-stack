import React from 'react'
import { Outlet } from 'react-router-dom';
import { NavMenu } from '../../components/navbar/NavMenu';
import './body.scss';

export const Body = () => {
  return (
    <>
      <NavMenu />
      <div className=' p-4 main-body'>
        <Outlet/>
      </div>
    </>
  )
}