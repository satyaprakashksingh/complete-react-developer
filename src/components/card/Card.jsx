import React from 'react'
import './Card.css'
const Card = (props) => {
    const  {title, url, thumbnailUrl} = props
  return (
    <div className='card' >
        <div className='card-image'><img src={url} alt={thumbnailUrl} height={'220'} width={'220'}/></div>
        <div className='card-title'>{title}</div>
    </div>
  )
}

export default Card