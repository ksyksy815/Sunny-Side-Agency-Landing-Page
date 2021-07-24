import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

const Nav = styled.nav`
  position: absolute;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  #logo {
    background: transparent;
    border: none;
  }

  #nav-ul {
    list-style: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;

    li {
      display: grid;
      place-content: center;
      transition: 0.2s;
      &:hover {
        cursor: pointer;
        transform: translateY(-2px);
      }
    }
  }

  #nav-contact-btn {
    padding: 0.5rem 1rem;
    background: hsl(0, 0%, 100%);
    border-radius: 999px;
    border: none;
    color: #444444;
    font-size: 16px;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      background: #87CDFA;
      color: #fff;
      transform: translateY(2px);
    }
  }

`

export default function MainNav() {
  return (
    <Nav>
      <button id='logo'><img src={logo} alt="logo"/></button>
      <ul id='nav-ul'>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li><button id='nav-contact-btn'>CONTACT</button></li>
      </ul>
    </Nav>
  )
}
