import React from 'react'
import styled from 'styled-components'

const LearnMoreBtn = styled.button`
  font-weight: bold;
`

export default function LearnMoreButton( {color}) {
  return (
    <LearnMoreBtn color={color}>
      LEARN MORE
    </LearnMoreBtn>
  )
}
