import React from 'react'
import styled from 'styled-components'

const FooterNavStyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  color: hsl(168, 34%, 41%);

  li {
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      color: #fff;
      transform: translateY(-2px);
    }
  }
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
