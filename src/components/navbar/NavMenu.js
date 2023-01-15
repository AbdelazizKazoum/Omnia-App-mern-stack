import React from 'react';
import {Image} from 'react-bootstrap';
import './navmenu.scss';
import {GrNotification} from 'react-icons/gr'; 
import {HiOutlineSearch} from 'react-icons/hi'; 


export const NavMenu = () => {


  return (
    <div className='navmenu'>
        <p >Hi, Abdelaziz</p>
            <form className="d-none d-md-flex">
              <button variant="outline-success">
              <HiOutlineSearch />
            </button>
            <input
              type="search"
              placeholder="Search"
              for="Search"
            />
          </form>
          <div className='profile'>
            <GrNotification className='mx-3' />
            <Image src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='
            roundedCircle
            fluid
            />
          </div>
    </div>
  )
}