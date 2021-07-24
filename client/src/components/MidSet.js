import React from 'react'
import styled from 'styled-components'
import MainPageButton from './MainPageButton'

const OneSet = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: ${props=> props.imgFirst ? `row` : `row-reverse`};

  .mid-img {
    flex: 1 1 50%;
    object-fit: cover;
  }

  .mid-text {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
  }
  
`
export default function MidSet({title, text, buttonText, image, imgFirst}) {
  return (
    <OneSet imgFirst={imgFirst}>
      <img src={image} alt="fruits" className="mid-img"/>
      <div className="mid-text">
        <h2>{title}</h2>
        <p>{text}</p>
        <MainPageButton text={"Learn More"}/>
      </div>
    </OneSet>
  )
}
