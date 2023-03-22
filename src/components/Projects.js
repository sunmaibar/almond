import React from 'react'

import Title from './Title'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Projects = () => {
  return (
    <Wrapper className="section" id="products">
      <Title title="產品項目" />
      <div className="section-center">
        {/* products01 */}
        <article>
          <StaticImage
            src="../images/products01.JPG"
            layout="fullWidth"
            className="img"
            alt="杏仁豆腐"
          />
          <div className="info">
            <h4>杏仁豆腐</h4>
            <p>售價：20元</p>
          </div>
          <div className="desc">
            <p>
              自己本身很愛喝杏仁茶也很愛吃杏仁豆腐，可是市面上要找到便宜又好吃的真的不容易，所以就自己來試著做做看，沒想到有吃過的都說好吃，真實杏仁口感又醇厚，我知道很多人都在找這個傳統的點心，不棄嫌的話可以吃吃看我的杏仁豆腐我相信你吃過一定會喜歡！
            </p>
          </div>
        </article>
        {/* products02 */}
        <article>
          <StaticImage
            src="../images/products02.JPG"
            layout="fullWidth"
            className="img"
            alt="紅棗枸杞凍"
          />
          <div className="info">
            <h4>紅棗枸杞凍</h4>
            <p>售價：50元</p>
          </div>
          <div className="desc">
            <p>
              使用市面上最大顆的去籽紅棗及枸杞，內行的你一定知道紅棗碰到水不能久放，我都預先煮沸過才下料，讓你可以在三天內吃完沒問題，滿碗奢華的食材配上平民的價格，精心手工價只要50元。
            </p>
          </div>
        </article>
        {/* products03 */}
        <article>
          <StaticImage
            src="../images/products03.JPG"
            layout="fullWidth"
            className="img"
            alt="杏仁茶"
          />

          <div className="info">
            <h4>杏仁茶</h4>
            <p>售價：100元</p>
          </div>
          <div className="desc">
            <p>
              精心係火熬製的杏仁茶，口味甘醇濃郁，微甜，買回去開罐即飲，微波或煮熟都可以，平常沒喝冷藏就好，但5天內一定要吃完他們唷。容量為700ml
            </p>
          </div>
        </article>
        {/* products04 */}
        <article>
          <StaticImage
            src="../images/products04.JPG"
            layout="fullWidth"
            className="img"
            alt="不一般奶茶"
          />

          <div className="info">
            <h4>不一般奶茶</h4>
            <p>售價：70元</p>
          </div>
          <div className="desc">
            <p>
              選擇使用紐西蘭奶粉跟阿薩姆紅茶而且是自己買茶葉回來煮不是買市售茶包回來泡，所以可以控制茶的厚薄度，口感屬濃郁滑順。奶茶熱飲口感會感覺比較不甜，但像我習慣冷飲的也覺得超好喝。容量為700ml
            </p>
          </div>
        </article>
        {/* products05 */}
        <article>
          <StaticImage
            src="../images/products05.JPG"
            layout="fullWidth"
            className="img"
            alt="無糖菊花茶"
          />

          <div className="info">
            <h4>無糖菊花茶</h4>
            <p>售價：100元</p>
          </div>
          <div className="desc">
            <p>
              精心熬製的無糖菊花茶，對人體的好處多多，我們將煮好的菊花茶過濾後，留下二顆完整的菊花裝瓶點綴，喝起來有清香不膩的味道，一定要來試試看。容量為700ml
            </p>
          </div>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  .section-center {
    margin-top: 4rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article {
      box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      padding: 8px;
      .info {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
        h4 {
          font-weight: bold;
        }

        p {
          margin-top: -1px;
          font-size: 0.9rem;
        }
      }
    }

    @media (min-width: 768px) {
      .container {
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .container {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .container {
        height: 15rem;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
`
export default Projects
