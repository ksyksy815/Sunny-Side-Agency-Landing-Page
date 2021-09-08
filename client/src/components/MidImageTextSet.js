import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LearnMoreButton from './LearnMoreButton'

const MidSetStyle = styled.li`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  img {
    flex: 1 1 40%;
    object-fit: cover;
  }

  .mid-text-box {
    flex: 1 1 60%;
    width: 100%;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;

    h1 {
      font-weight: bold;
      text-align : center;
    }

    p {

      text-align : center;
      line-height: 1.6;
    }
  }
`

export default function MidImageTextSet( {title, text, mobileImage, desktopImage, color}) {
  const [width, setWidth] = useState(null)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <MidSetStyle>
      <img src={width >= 500 ? desktopImage : mobileImage} alt="service info"/>
      <div className="mid-text-box">
        <h1>{title}</h1>
        <p>{text}</p>
        <LearnMoreButton color={color}/>
      </div>
    </MidSetStyle>
  )
}
