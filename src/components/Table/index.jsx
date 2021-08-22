import React, { useState, useEffect } from 'react'
// import axios from 'axios';
import './Table.css';

const Table = (props) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(response => {
  //     setData(response.data);
  //   });
  // });
  // console.log(data);

  return (
    <div className="table">{props.children}</div>
  )
}

export default Table;
