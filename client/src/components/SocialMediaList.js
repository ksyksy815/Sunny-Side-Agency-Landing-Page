import React from 'react'
import styled from 'styled-components'
import { socialMediaIcons } from '../data'

const SocialMediaStyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;

  li {
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      transform: translateY(-2px);
    }
  }
`

export default function SocialMediaList() {
  return (
    <SocialMediaStyle>
      {
        socialMediaIcons.map(icon => <li><img src={icon.image} alt={icon.name}/></li>)
      }
    </SocialMediaStyle>
  )
}
