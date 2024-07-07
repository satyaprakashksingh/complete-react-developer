import React from 'react'
import Card from '../card/Card'
import './cardList.css'
const CardList = (props) => {
    const {photos} = props
  return (
    <div className='card-list'>
        {
            photos.map((photo) => {
                return  <Card  {...photo} key={photo?.id}/>
            })
        }
    </div>
  )
}

export default CardList