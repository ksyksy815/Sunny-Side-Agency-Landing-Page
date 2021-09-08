import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { gallery } from '../data'

const GalleryStyle = styled.div`
  width: 100%;
  height: ${props => `${props.height}px`};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  div {
    width: 100%;
    overflow: hidden;
  }
  img {
    width: 100%;
    object-fit: contain;
  }
`

export default function PhotoGallery() {
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerWidth)
  }, [])

  return (
    <GalleryStyle height={height}>
      {/* <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div> */}
      {
        gallery.map(photo =>
          <div>
            <img
              src={width >= 500 ? photo.desktopImage : photo.mobileImage}
              alt={photo.description}
            />
          </div>
        )
      }
    </GalleryStyle>
  )
}
