import React from 'react'
import { Image } from 'react-bootstrap'
import './smallProfile.scss'

export const SmallProfile = ({image,name,email}) => {
  return (
    <div className='profile'>
        <div className='img'>
            <Image roundedCircle fluid src={image} />
        </div>
        <div className='info'>
            <span>{name}</span>
            <small>{email}</small>
        </div>
    </div>
  )
}

