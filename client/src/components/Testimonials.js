import React from 'react'
import styled from 'styled-components'
import TestimonialList from './TestimonialList'

const TestimonialStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  row-gap: 5rem;

  #testi-title {
    letter-spacing: 2px;
    color: var(--light-gray);
  }
`

export default function Testimonials() {
  return (
    <TestimonialStyle>
      <h3 id="testi-title">CLIENT TESTIMONIALS</h3>
      <TestimonialList />
    </TestimonialStyle>
  )
}
