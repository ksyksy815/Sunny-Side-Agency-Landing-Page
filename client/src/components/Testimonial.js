import React from 'react'
import styled from 'styled-components'
import TestimonialCard from './TestimonialCard'
import userInfo from '../userInfo'

const TestimonialWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;

  .card-box {
    display: flex;
    column-gap: 1rem;
  }
`

export default function Testimonial() {
  return (
    <TestimonialWrapper>
      <h3>CLIENT TESTIMONIALS</h3>
      <div className="card-box">
        {
          userInfo.map( user => (
            <TestimonialCard key={user.name}
              img = {user.image}
              text = {user.text}
              name = {user.name}
              position = {user.position}
            />
          ))
        }
      </div>
    </TestimonialWrapper>
  )
}
