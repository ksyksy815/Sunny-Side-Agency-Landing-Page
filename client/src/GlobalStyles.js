import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --p-font-color: hsl(232, 10%, 55%);
    --heading-font-color: hsl(212, 27%, 19%);
    --light-gray: hsl(210, 4%, 67%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Fraunces', serif;
    color: var(--heading-font-color);
  }

  p {
    color: var(--p-font-color);
    line-height: 1.6;
  }
`

// bold
// font-family: 'Fraunces', serif;
/*
- Soft red: hsl(7, 99%, 70%) //learn more 버튼 빨강
- Yellow: hsl(51, 100%, 49%) //learn more 버튼 노랑
- Dark desaturated cyan (graphic design text): hsl(167, 40%, 24%) // graphic design 글씨 색깔
- Dark blue (photography text): hsl(198, 62%, 26%) // photography 글씨 색깔
- Dark moderate cyan (footer): hsl(168, 34%, 41%) // footer 글씨 색깔

### Neutral

- Very dark desaturated blue: hsl(212, 27%, 19%) //가장 어두운 글씨
- Very dark grayish blue: hsl(213, 9%, 39%)  // 중간 어두운 글씨
- Dark grayish blue: hsl(232, 10%, 55%) //미드 작은 글씨 회색
- Grayish blue: hsl(210, 4%, 67%) // 밝은 회색 글씨 (Client testimonials)
- White: hsl(0, 0%, 100%)
*/