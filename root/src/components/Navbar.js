import React, {useState} from 'react'


import {BrowserRouter as Link, NavLink,  Router, Switch, Route} from 'react-router-dom'  
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick]= useState(false);
    const [button, setButton]= useState(true)

    const handleClick =() => setClick(!click)

    const closeMobileMenu = () =>setClick(false)

    const showButton= () =>{
        if(window.innerWidth <= 960){
            setButton(false)

        }else{
            setButton(true)
        }
    }


    window.addEventListener('resize',showButton)

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-cointainer'>
            <Link href="/" className='navbar-logo'>
                TRVL <i className='fab fa-typo3'/>

            </Link>

            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link href='/' className='nav-Links' onClick={closeMobileMenu}/>
                Home
            </li>
            <li className='nav-item'>
                <Link href='/Tarot' className='nav-Links' onClick={closeMobileMenu}/>
                Tarot
            </li>
            <li className='nav-item'>
                <Link href='/Payment' className='nav-Links' onClick={closeMobileMenu}/>
                Payment
            </li>
            <li className='nav-item'>
                <Link href='/sign-up' className='nav-Links-mobile' onClick={closeMobileMenu}/>
                
                {button && <Button buttonStyle='btn--outline'> SIGNUP</Button>}
            </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'> SIGNUP</Button>}
           

        </div>
    </nav>
        
    </>
  )
}

export default Navbar

