import React from 'react'
import { Nav, NavLink, Bars, NavMenu,  NavBtn, NavBtnLink, } from './Navbarelements'
const Navbar = () => {
  return (
    <Nav>
        <NavLink to="/">
            <h1>logo</h1>
            <Bars />

        </NavLink>
        <NavMenu>
            <NavLink to= "/about" activeStyle>
                about

            </NavLink>
            <NavLink to= "/contact" activeStyle>
                contact

            </NavLink>
            <NavLink to= "/shoppingcar" activeStyle>
            shoppingcar

            </NavLink>

        </NavMenu>
        <NavBtn>
        <NavBtnLink to= '/signin'> sign in</NavBtnLink>
        </NavBtn>
    </Nav>
  )
}

export default Navbar