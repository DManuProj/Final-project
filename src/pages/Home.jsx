import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import './Home.css';
import Mainmenu from '../components/Mainmenu'
import Cart from '../components/Cart'


import {Button} from '@chakra-ui/react'
import { useState } from 'react';

function Home() {

 const [cartItems, setCartItems] = useState([]);

  return (
    <div className='home-container'>
        <div className='home-nav'>
            <Logo/>

            <div>
                <Link to="/login">
                    <Button colorScheme="blue" variant ="outline">Register</Button>
                </Link>
                <Link to="/login">
                    <Button colorScheme='yellow' variant ="outline">Register</Button>
                </Link>
            </div>

        </div>

        <div className='home-inner-container'>
           <Mainmenu cartItems={cartItems} setCartItems={setCartItems}/>
           <Cart cartItems={cartItems} setCartItems={setCartItems}/>
        </div>
        
    </div>
  )
}

export default Home