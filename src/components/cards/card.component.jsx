import React from 'react'
import './card.styles.css'

export const Card = props => {
  return(
    <div key={props.monster.id} className='card-container'>
      <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
      <h1>{props.monster.name}</h1>
    </div>
  )
}