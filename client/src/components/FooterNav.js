import React from 'react'
import styled from 'styled-components'

const FooterNavStyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  color: hsl(168, 34%, 41%);
`

export default function FooterNav() {
  return (
    <FooterNavStyle>
      <li>About</li>
      <li>Services</li>
      <li>Project</li>
    </FooterNavStyle>
  )
}
