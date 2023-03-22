import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import services from '../constants/services'
import about from '../images/about.jpg'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
  return (
    <Wrapper className="section" id="about">
      <Title title="關於杏仁弟弟" />
      <div className="section-center">
        <article>
          <StaticImage
            src="../images/about.jpg"
            layout="constrained"
            className="img"
            alt="杏仁弟弟"
          />
        </article>
        <article>
          <h3>杏仁弟弟的小故事</h3>
          <p>
            媽媽早期在新莊迴龍地區的市場擺攤賣著杏仁豆腐，以及杏仁茶，杏仁弟弟當兵退伍後，開始接起了家中的事業工作，原本媽媽希望杏仁弟弟印些傳單銷售推廣自家的杏仁產品，但杏仁弟弟知道網路的世界，並開始透過網路社群，在網路上做銷售，並且得到了廣受好評，網友們一致稱讚。
          </p>
          <p>
            我們對於製作一點都不馬虎，用的皆是真材實料，細火慢燉，煮一次就是顧爐三個小時以上，不添加任何添加物，我們很多客人都是買回去給小孩吃的，要讓大人小孩都能吃得安心。
          </p>
        </article>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .section-center {
    margin-top: 4rem;
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    article {
      h3 {
        text-align: center;
      }
      p {
        margin-top: 1.5rem;
      }
    }
    .img {
      margin: 0 auto;
      height: 350px;
      object-fit: cover;
      border-radius: 1rem;
      position: relative;
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    /* @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    } */
  }
`
export default About
