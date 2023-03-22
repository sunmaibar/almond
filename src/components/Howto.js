import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { FaFacebookSquare } from 'react-icons/fa'

import { StaticImage } from 'gatsby-plugin-image'

const Howto = () => {
  return (
    <Wrapper className="section" id="howto">
      <Title title="如何訂購" />
      <div className="section-center">
        <article>
          <h3>臉書粉絲團訂購</h3>

          <p>
            我們沒有實體店面，都會不定期開車的拜訪大台北地區，目前最遠已經跑到楊梅地區，每個區域平均每個月都會輪一到二次。
            都會在三天前公告我們所到之處，並且開始接單後，依數量製作，我們不做隔夜食品，提供最新鮮的杏仁，約定時間地點，送達消費者手中。
          </p>
          <p>
            如需大量訂購，單筆消費滿2000元以上，我也可以幫忙送貨到府，敬請來電，或者FB粉絲團私訊我。
          </p>
          <a href="https://www.facebook.com/groups/652218478773478">
            <button className="facebook btn">
              <FaFacebookSquare className="fb" />
              <p className="fb-text">追蹤杏仁弟弟專頁</p>
            </button>
          </a>
        </article>
        <article>
          <StaticImage
            src="../images/car_delever.jpeg"
            layout="constrained"
            className="img"
            alt="網路訂貨"
          />
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
    .facebook {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      padding: 1px 1rem;
      .fb {
        font-size: 30px;
        margin-right: 10px;
      }
      .fb-text {
        color: white;
        font-size: 1rem;
        margin-bottom: 23px;
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
export default Howto
