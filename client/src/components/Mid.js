import React from 'react'
import styled from 'styled-components'
import MidImageTextSet from '../components/MidImageTextSet'
import MidImageTextSet2 from '../components/MidImageTextSet2'
import { midContents1 } from '../data'
import { midContents2 } from '../data'

const MidStyle = styled.ul`
  width: 100vw;
  list-style: none;
`

export default function Mid() {
  return (
    <MidStyle>
      {midContents1.map((content, i) => 
        <MidImageTextSet 
          key={content.title} 
          title={content.title} 
          text={content.text}
          mobileImage={content.mobileImage}
          desktopImage={content.desktopImage}
          color={ i === 0 ? `hsl(51, 100%, 49%)` : `hsl(51, 100%, 49%)`}
        />
      )}
      {midContents2.map(content => 
        <MidImageTextSet2
          key={content.title}
          title={content.title} 
          text={content.text}
          mobileImage={content.mobileImage}
          desktopImage={content.desktopImage}
          fontColor={content.fontColor}
        />
      )}
    </MidStyle>
  )
}
