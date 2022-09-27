import React, { useEffect, useState } from 'react'
import "./Mainmenu.css"
import axios from 'axios'
import { api } from '../config';
import MenuItem from './MenuItem';

import './MenuItem.css'


function Mainmenu(cartItems, setCartItems) {
  const [ items, setItems] = useState([]);

//get data from backend
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`${api}/item/all`)
      setItems(result.data);
      
    };
    
    fetchItems();
  },[])


//handleclick function for event
const handleClick = (clickedItem) => {
 // console.log(clickedItem);
 const newCartItems = [...cartItems];
 const newItem = {
  ...clickedItem,
  qty: 1
 }
 newCartItems.push(newItem);
 setCartItems(newCartItems);

}



  return (
    <div className="main-menu-container">
      {items.map((item) => {
        return <MenuItem key ={ item.id} item={item} onClick={() => {
          handleClick(item);
        }}/>
      })}
    </div>
  );
}



export default Mainmenu