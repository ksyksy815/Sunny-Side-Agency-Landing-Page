import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const MidSet2Style = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;

  img {
    width: 100%;
    object-fit: contain;
  }

  .mid-text-box {
    position: absolute;
    bottom: 10%;
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
      fontColor={fontColor}
    >
      <img src={width >= 500 ? desktopImage : mobileImage} alt={title}/>
      <div className="mid-text-box">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </MidSet2Style>
  )
}
