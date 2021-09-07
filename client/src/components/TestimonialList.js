import React from 'react'
import styled from 'styled-components'
import { testimonials } from '../data'
import TestimonialItem from './TestimonialItem'

const TestimonialListStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5rem;
`

export default function TestimonialList() {
  return (
    <TestimonialListStyle>
      {testimonials.map(testimonial => 
        <TestimonialItem 
          key={testimonial.name} 
          testimonial={testimonial}
        />
      )}
    </TestimonialListStyle>
  )
}
