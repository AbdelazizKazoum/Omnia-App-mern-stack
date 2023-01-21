import React, { useState } from 'react'
import './sidebar.scss';
import { BsBagCheckFill } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md"; 
import { AiOutlineUser } from "react-icons/ai"; 
import { BiShoppingBag } from "react-icons/bi"; 
import { FiSettings } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { LinkContainer } from 'react-router-bootstrap';
import { Link,useNavigate } from 'react-router-dom';




export const Sidebar = () => {
    const [activelink,setActiveLink] = useState("home");
    const navigate = useNavigate();
  return (
    <div className='sidebar'>
      {/* ----------------------- Start Logo -------------------- */}
      <div className='logo mt-3'>
        <BsBagCheckFill className='' />
        <p className='d-none d-sm-block d-sm-none d-md-block '>Omnia</p>
      </div>
      {/* ----------------------- Start menu -------------------- */}
      <ul className='menu'>
        <li className={activelink === "home" ? "item act" : "item" } onClick={(e)=> {
          setActiveLink('home');
          navigate('/home')
      
      } } >
          <MdOutlineDashboard />
          <LinkContainer  className='option' to='/home' >
            <Link>Home</Link>
          </LinkContainer>
        </li>
        <li className={activelink === "clients" ? "item act" : "item" } onClick={()=> {setActiveLink('clients'); navigate('/clients')} }>
          <AiOutlineUser />
          <LinkContainer   className='option' to='/users'>
            <Link>Users</Link>
          </LinkContainer>
        </li>
        <li className={activelink === "orders" ? "item act" : "item" } onClick={()=> {setActiveLink('orders') ; navigate('/orders')} }>
          <AiOutlineShoppingCart />
          <LinkContainer   className='option' to='/orders'>
            <Link>Orders</Link>
          </LinkContainer>
        </li>
        <li className={activelink === "products" ? "item act" : "item" } onClick={()=> {setActiveLink('products') ; navigate('/products')} }>
          <BiShoppingBag />
          <LinkContainer   className='option' to='/products'>
            <Link>Products</Link>
          </LinkContainer>
        </li>
        <li className={activelink === "settings" ? "item act" : "item" } onClick={()=> {setActiveLink('settings') ; navigate('/settings')} } >
          <FiSettings />
          <LinkContainer  className='option' to='/settings'>
            <Link>Settings</Link>
            </LinkContainer> 
        </li>
      </ul>
      <hr style={{width : '70%', margin : " 3rem auto"}}  />

    </div>
  )
}
