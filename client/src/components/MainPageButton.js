import React from 'react'
import styled from 'styled-components'

const MidButton = styled.button`

  &:hover {
    // use highlight here
  }
`

export default function MainPageButton( { highlight, text } ) {
  return (
    <MidButton>
      {text.toUpperCase()}
    </MidButton>
  )
}
