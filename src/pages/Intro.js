import styled from 'styled-components';
import HomeLottie from '../components/img/HomeLottie';
import '../styles/font.scss';
import Button from '../components/common/Button';
import { Helmet } from 'react-helmet-async';
import { MyCalendar, Today } from '../components/widget/MyCalendar';
import WeatherContainer from '../container/WeatherContainer';
import { NotionIcon } from '../components/img/Icons';

const HomeBlock = styled.div`
  .header {
    position: relative;
    left: 0;
    top: 0;
    height: 280px;
    background: var(--df-hover);
    overflow: hidden;
    @media (max-width: 390px) {
      height: 200px;
    }
    &.gradient {
      background: linear-gradient(
        90deg,
        rgba(214, 180, 237, 1) 0%,
        rgba(190, 209, 131, 1) 40%,
        #43e0d3 78%
      );
    }
  }
  .content {
    position: relative;
    padding: 50px 24px 24px 24px;
    margin: 0 auto;
    width: 100%;
    max-width: 780px;
    font-size: 1.2rem;
    line-height: 1.4rem;
    .title {
      display: inline-flex;
      justify-content: flex-start;
      padding-bottom: 12px;
      .title-ico {
        position: absolute;
        left: 24px;
        top: -2.5rem;
        width: calc(100% - 48px);
        font-size: 5rem;
        display: inline-flex;
        align-items: center;
        height: 5rem;
      }
      h4 {
        display: inline-block;
        font-size: 1.6rem;
        line-height: 2rem;
        word-break: break-all;
        overflow: hidden;
        white-space: nowrap;
        /* border-right: 0.2rem solid var(--oc-grape-7); */
        animation: appear 3s steps(100, end);
        /* blink-caret 0.75s step-end infinite; */
      }
    }

    p {
      opacity: 0.8;
      text-align: right;
    }

    a {
      font-family: 'JetBrains Mono';
    }
    @keyframes appear {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: var(--oc-grape-7);
      }
    }
  }
`;
const ButtonGrp = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  a,
  button {
    margin-top: 0;
  }
`;
export default function Home() {
  return (
    <HomeBlock>
      <Helmet>
        <title>이영애 | REACT</title>
      </Helmet>
      <div className="header gradient">
        <HomeLottie />
      </div>
      <div className="content">
        <div className="title">
          <span className="title-ico">🍅</span>
          <h4>안녕하세요! 이영애입니다.</h4>
        </div>
        <Today />
        <WeatherContainer />
        <MyCalendar />
        <ButtonGrp>
          <Button func={true} to="/works" className="large">
            VIEW WORKS
          </Button>
          <Button
            newTab={true}
            to="https://eminent-horn-5a2.notion.site/2250caf43b8480eb8d04e38db25ed31c"
            className="large"
          >
            VIEW CAREER
            <NotionIcon size={24} left={true} />
          </Button>
        </ButtonGrp>
      </div>
    </HomeBlock>
  );
}
