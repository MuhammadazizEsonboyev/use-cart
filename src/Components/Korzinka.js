import React from 'react'
import {useCart} from 'react-use-cart'
import { Link } from "react-router-dom";
import './style.css'

export default function Korzinka() {
        const {
            totalUniqueItems, 
        } = useCart()
    return (
        <>
        <div className='fathernav'>
            <div className='navbarName'>
                <Link to="/">
                    <p className='navLink'>Manzil:”Malika” S-64 do’kon  </p>
                </Link>
             <div className='logos'>
                <Link to="/" >
                    <i class="fa-solid fa-house"></i>
                </Link>
             <Link to="/card" className='navLink'>
                <i className="fa-solid fa-cart-shopping">   
                <span>{totalUniqueItems}</span>
                </i>    
                </Link>
             </div>
            </div>
        </div>
        </>
    )
}


