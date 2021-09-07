import React from 'react'
import styled from 'styled-components'

const TestiItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5rem;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  p {
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    h3 {
      text-align: center;
    }
    span {
      color: var(--light-gray);
    }
  }
`

export default function TestimonialItem( {testimonial} ) {
  const {image, text, name, position} = testimonial

  return (
    <TestiItemStyle>
      <img src={image} alt={name}/>
      <p>{text}</p>
      <div>
        <h3>{name}</h3>
        <span>{position}</span>
      </div>
    </TestiItemStyle>
  )
}
