import React, { useState, useEffect } from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <span>{props.value}</span>
      <span>{props.suite}</span>
    </div>
  )
}

export default Card;
