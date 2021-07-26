import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 50vh;
  row-gap: 3rem;

  .img-wrapper {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  p {
    text-align: center;
  }

  .name-position {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export default function TestimonialCard( {img, text, name, position} ) {
  return (
    <Card>
      <span className="img-wrapper">
        <img src={img} alt="Profile of a previous user"/>
      </span>
      <p>{ text }</p>
      <div className="name-position">
        <span>{ name }</span>
        <span>{ position }</span>
      </div>
    </Card>
  )
}
