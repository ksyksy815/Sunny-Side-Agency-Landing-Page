import React from 'react'
import styled from 'styled-components'
import mOrange from '../assets/mobile/image-header.jpg'
import arrow from '../assets/icon-arrow-down.svg'
import Mid from './Mid'
import Testimonials from './Testimonials'
import PhotoGallery from './PhotoGallery'
import Footer from './Footer'

const LandingPageStyle = styled.div`
  width: 100vw;
  height: auto;
`

const Top = styled.section`
  width: 100%;
  height: 65vh;
  background-image: url(${mOrange});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  color: #fff;
  h1 {
    text-align: center;
    font-size: 3rem;
    color: #fff;
  }
  button {
    width: 100px;
    height: 100px;
    border: none;
    background-color: transparent;
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`

export default function LandingPage() {
  return (
    <LandingPageStyle>
      <Top>
        <h1>WE ARE CREATIVES</h1>
        <button></button>
      </Top>
      <Mid />
      <Testimonials />
      <PhotoGallery />
      <Footer />
    </LandingPageStyle>
  )
}
