import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <div className={`card ${props.winner}`}>
      <span>{props.value}</span>
      <span>{props.suite}</span>
    </div>
  )
}

export default Card;
