import styled from 'styled-components';
import HomeLottie from '../components/img/HomeLottie';
import '../styles/font.scss';
import Button from '../components/common/Button';
import { Helmet } from 'react-helmet-async';
import MyCalendar from '../components/calendar/MyCalendar';

const HomeBlock = styled.div`
  width: 100%;
  height: 100%;
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
    padding: 60px 24px 24px 24px;
    margin: 0 auto;
    width: 100%;
    max-width: 780px;
    font-size: 1.2rem;
    line-height: 1.4rem;
    .title-ico {
      position: absolute;
      left: 24px;
      top: -2.5rem;
      width: calc(100% - 48px);
      font-size: 5rem;
      display: inline-flex;
      align-items: center;
      width: 5rem;
      height: 5rem;
    }
    .title {
      font-size: 1.6rem;
      line-height: 2rem;
      word-break: break-all;
    }
    .tag-list {
      margin-top: 12px;
      display: flex;
      gap: 8px;
      font-size: 1rem;
      line-height: 1.2rem;
      flex-wrap: wrap;
    }
    .tag-list,
    p {
      opacity: 0.8;
    }
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
        <h4 className="title">
          <span className="title-ico">🍅</span>
          안녕하세요! <br /> 저의 포트폴리오 페이지에 오신 것을 환영합니다!
        </h4>
        <MyCalendar />
        <Button to="/contact" className="large">
          CONTACT ME
        </Button>
      </div>
      {/*  */}
      {/* <h1>Welcome to my page!</h1> */}
    </HomeBlock>
  );
}
