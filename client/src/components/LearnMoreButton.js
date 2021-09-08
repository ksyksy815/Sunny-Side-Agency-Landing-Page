import React from 'react'
import styled from 'styled-components'

const LearnMoreBtn = styled.button`
  font-weight: bold;
  background: ${props=> `linear-gradient(180deg, transparent 40% , ${props.color})`} ;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 30px;
`

export default function LearnMoreButton( {color}) {
  return (
    <LearnMoreBtn color={color}>
      LEARN MORE
    </LearnMoreBtn>
  )
}
