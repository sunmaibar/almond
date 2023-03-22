import React from 'react'
import styled from 'styled-components'
import Title from './Title'

import { StaticImage } from 'gatsby-plugin-image'
import { BsFillPeopleFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <Wrapper className="section" id="contact">
      <Title title="與我聯繫" />
      <div className="section-center">
        <article>
          <StaticImage
            src="../images/DSC02579.JPG"
            layout="constrained"
            className="img"
            alt="杏仁產品圖"
          />
        </article>
        <article>
          <h3>感謝大家喜歡我的產品</h3>
          <p>
            做生意以誠信為原則，杏仁弟弟一直保持著這種理念，來滿足大家的味蕾，也謝謝跟我買過產品的人，每筆交易，我都感謝在心中，如有任何問題，都歡迎透過粉絲團私訊，或者來電跟我聯絡。
          </p>
          <div className="contact-info">
            <h3>聯絡:杏仁弟弟（徐峰）</h3>
            <h3>電話:0937883893</h3>
          </div>
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
      .contact-info {
        margin: 0 auto;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid var(--clr-grey-5);
        display: flex;
        flex-direction: column;
        align-items: center;
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
export default Contact
