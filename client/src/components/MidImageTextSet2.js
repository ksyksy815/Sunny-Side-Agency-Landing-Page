import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const MidSet2Style = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  background-image: ${props => `url(${props.image})`};
  background-size: 100%;
  background-repeat: no-repeat;

  .mid-text-box {
    margin-top: 50vh;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    h1 {
      color: ${props => props.fontColor};
      text-align: center;
      font-weight: 900;
    }

    p {
      color: ${props => props.fontColor};
      text-align: center;
    }

  }
`

export default function MidImageTextSet2( {title, text, mobileImage, desktopImage, fontColor} ) {
  const [width, setWidth] = useState(null)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <MidSet2Style 
      image={width >= 500 ? desktopImage : mobileImage}
      fontColor={fontColor}
    >
      <div className="mid-text-box">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </MidSet2Style>
  )
}
