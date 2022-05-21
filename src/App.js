import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import Card from './Components/Card';
import {CartProvider} from 'react-use-cart'
import Korzinka from './Components/Korzinka';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>
      <CartProvider>
            <Router>
               <Korzinka/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/card' element={<Card/>}/>
              </Routes>
            </Router>
      </CartProvider>
    </>
  )
}

export default App;
