import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'

const HeaderStyle = styled.header`
  position: absolute;
  width: 100vw;
`

export default function Header() {
  return (
    <HeaderStyle>
      <img src={Logo} alt="Logo"/>
      <button></button>
    </HeaderStyle>
  )
}
