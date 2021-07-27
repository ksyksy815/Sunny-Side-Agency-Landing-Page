import React from 'react'
import styled from 'styled-components'
import milk from '../assets/desktop/image-gallery-milkbottles.jpg'
import orange from '../assets/desktop/image-gallery-orange.jpg'
import cone from '../assets/desktop/image-gallery-cone.jpg'
import sugar from '../assets/desktop/image-gallery-sugarcubes.jpg'
import logo from '../assets/logo.svg'
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: hsl(168, 34%, 41%);

  #gallery {
    width: 100%;
    height: 50%;
    display: flex;
    img {
      flex: 1 1 auto;
      object-fit: cover;
    }
  }

  #footer-info {
    height: 50%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 3rem;

    #footer-nav {
      list-style: none;
      color: hsl(167, 40%, 24%);
      column-gap: 2rem;
      display: flex;
    }

    #social-media {
      list-style: none;
      display: flex;
      column-gap: 1rem;
    }
  }
`

export default function Footer() {
  return (
    <FooterWrapper>
      <section id="gallery">
        <img src={milk} alt="milk"/>
        <img src={orange} alt="oragne"/>
        <img src={cone} alt="ice cream cone"/>
        <img src={sugar} alt="sugar"/>
      </section>
      <section id="footer-info">
        <img src={logo} alt="logo"></img>
        <ul id="footer-nav">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <ul id="social-media">
          <li><img src={facebook} alt="facebook"></img></li>
          <li><img src={instagram} alt="instagram"></img></li>
          <li><img src={twitter} alt="twitter"></img></li>
          <li><img src={pinterest} alt="pinterest"></img></li>
        </ul>
      </section>
    </FooterWrapper>
  )
}
