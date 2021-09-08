import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import menu from '../assets/icon-hamburger.svg'
import MobileMenu from './MobileMenu'

const HeaderStyle = styled.header`
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  button {
    background: transparent;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <HeaderStyle>
      {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      <img src={Logo} alt="Logo"/>
      <button onClick={toggleMenu}><img src={menu} alt="menu button"/></button>
    </HeaderStyle>
  )
}
