import React from 'react'
import styled from 'styled-components'

const MidDigital = styled.div`
  width: 100%;
  height: 33.33%;
  display: flex;
`
const TextWithImg = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`

export default function MidDigitalSet({title1, text1, image1, title2, text2, image2}) {
  return (
    <MidDigital>
      <TextWithImg backgroundImage={image1}>
        <h3>{title1}</h3>
        <p>{text1}</p>
      </TextWithImg>
      <TextWithImg backgroundImage={image2}>
        <h3>{title2}</h3>
        <p>{text2}</p>
      </TextWithImg>
    </MidDigital>
  )
}
