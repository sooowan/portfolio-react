import styled from 'styled-components';
import HomeLottie from '../components/img/HomeLottie';
import '../styles/font.scss';
import Button from '../components/common/Button';
import { Helmet } from 'react-helmet-async';
import MyCalendar from '../components/calendar/MyCalendar';

const HomeBlock = styled.div`
  margin-bottom: 42px;
  .header {
    position: relative;
    left: 0;
    top: 0;
    height: 240px;
    background: var(--df-hover);
    overflow: hidden;
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
        animation: appear 1.5s steps(100, end);
      }
    }

    p {
      opacity: 0.8;
      text-align: right;
    }

    a {
      font-family: 'JetBrains Mono', 'Nanum Gothic';
    }
    @keyframes appear {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  }
`;
const ButtonGrp = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
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
          <span className="title-ico">🍅🍅🍅</span>
          <h4>안녕하세요! 이영애입니다.</h4>
        </div>
        <MyCalendar />
        <ButtonGrp>
          <Button func={true} to="/works" className="large">
            VIEW WORKS
          </Button>
          <Button to="/contact" className="large">
            CONTACT ME
          </Button>
        </ButtonGrp>
      </div>
    </HomeBlock>
  );
}
