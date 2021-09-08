import React, { useEffect, useCallback } from 'react'
import styled from 'styled-components'

const MenuStyle = styled.ul`
  position: absolute;
  top: 10vh;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 90%;
  padding: 3rem 0;
  
  li {
    padding: 1.5rem 2rem;
    color: var(--light-gray);
    width: 100%;
    text-align: center;

    &:last-child {
      width: auto;
      padding: 1rem 2rem;
      font-family: 'Fraunces', serif;
      color: #444;
      background: #FFD400;
      border-radius: 30px;
    }
  }
`

export default function MobileMenu( {toggleMenu} ) {
  const closeMenu = useCallback ( () => {
    toggleMenu(prev => !prev)
  }, [toggleMenu])

  useEffect(() => {
    window.addEventListener('click', closeMenu)
    return () => window.removeEventListener('click', closeMenu)
  }, [closeMenu])

  return (
    <MenuStyle>
      <li>About</li>
      <li>Services</li>
      <li>Projects</li>
      <li>CONTACT</li>
    </MenuStyle>
  )
}
