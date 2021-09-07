import React from 'react'
import styled from 'styled-components'
import FooterLogo from './FooterLogo'
import FooterNav from './FooterNav'
import SocialMediaList from './SocialMediaList'

const FooterStyle = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;
  padding: 3rem 0;
  background-color: #A0D8C9;

  li {
    &:hover {
      cursor: pointer;
    }
  }
`

export default function Footer() {
  return (
    <FooterStyle>
      <FooterLogo />
      <FooterNav />
      <SocialMediaList />
    </FooterStyle>
  )
}
