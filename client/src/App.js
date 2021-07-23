import styled from 'styled-components'
import header from '../src/assets/desktop/image-header.jpg'
import { GlobalStyle } from '../src/globalStyle'
import MidSet from './components/MidSet'
import desktopEgg from './assets/desktop/image-transform.jpg'
import desktopCup from './assets/desktop/image-stand-out.jpg'
import MidDigitalSet from './components/MidDigitalSet'
import desktopCherry from './assets/desktop/image-graphic-design.jpg'
import desktopOrange from './assets/desktop/image-photography.jpg'

const MainWrapper = styled.div`
  width: 100vw;
  max-width: 1440px;
`

const TopSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
`
const MidSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <MainWrapper>
        <TopSection></TopSection>
        <MidSection>
          <MidSet 
            title={"Transform your brand"}
            text={"We are a full-service creative agency specializing in helping brands grow fast. engage your clients through compelling visuals that do most of the marketing for you."}
            buttonText={"Learn more"}
            image={desktopEgg}
            imgFirst={false}
          />
          <MidSet 
            title={"Stand out to the right audience"}
            text={"Using a collaborative formula of designers, researchers, photographers, videographers, and coopywriters, we'll build and extend your brand in digital places."}
            buttonText={"Learn more"}
            image={desktopCup}
            imgFirst={true}
          />
          <MidDigitalSet
            title1={"Graphic Design"}
            text1={"Great desgin makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention."}
            image1={desktopCherry}
            title2={"Photography"}
            text2={"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."}
            image2={desktopOrange}
          />
        </MidSection>
        
      </MainWrapper>
    </>
  );
}

export default App;
