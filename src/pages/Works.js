import styled from 'styled-components';
import { MainTitle } from '../components/common/Titles';
import { Helmet } from 'react-helmet-async';
import WorkItem from '../components/works/WorkItem';

const WorkListBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  list-style: none;
  margin: 32px 0 42px;

  @media (max-width: 1114px) {
    flex-direction: column;
  }
`;

const works = [
  {
    _id: '000',
    link: 'https://duddoi.github.io/portfolio-react/',
    title: {
      ico: '🥳',
      text: 'REACT_PORTFOLIO',
    },
    desc: '리액트 기반 포트폴리오입니다.(2025 ver.)',
    tags: [
      'React',
      'redux',
      'localStorage',
      'styled-components',
      'EmailJS',
      'CSSModule',
      'react-router',
      'react-calendar',
      'lottie',
      'dark-mode',
    ],
    detail:
      'Notion을 모티브로 디자인 구상을 하였으며, 다크모드 및 EmailJS API를 이용한 이메일 발송 기능 구현.',
    style: 'lottie',
  },
  {
    _id: '001',
    link: 'https://duddoi.github.io/blog/',
    title: {
      ico: '✍🏻',
      text: 'BLOG',
    },
    desc: '리액트 프로젝트 블로그 app입니다.',
    tags: [
      'React',
      'redux',
      'localStorage',
      'styled-components',
      'react-router',
      'react-select',
      'CryptoJS',
      'uuid',
    ],
    detail:
      '블로그의 기본 기능 구현: 회원가입, 로그인, 글쓰기, 수정, 삭제, 내용보기, 태그 필터링, 페이징 처리, 유효성 검사 등. (수정 및 삭제는 본인이 쓴 글에 한함)',
    style: 'gradient',
  },
  {
    _id: '002',
    link: 'https://duddoi.github.io/todo-app/',
    title: {
      ico: '🗒️',
      text: 'TO-DO APP',
    },
    desc: '리액트 프로젝트 to-do app입니다.',
    tags: ['React', 'localStorage', 'styled-components'],
    detail: '할 일을 추가/완료/삭제 할 수 있는 todo list.',
  },

  {
    _id: '003',
    link: 'https://duddoi.github.io/2022_portfolio/',
    title: {
      ico: '🌈',
      text: '2022_PORTFOLIO',
    },
    desc: '2019-2021년 진행한 프로젝트들입니다.(2022 ver.)',
    tags: ['HTML', 'CSS', 'jquery', 'photoshop', 'illustrator'],
    detail:
      'html, css, jquery를 이용한 퍼블리싱 작업으로 이루어진 full page형태의 포트폴리오.',
    style: 'solid_indigo',
  },
];

export default function Works() {
  return (
    <div>
      <Helmet>
        <title>Works</title>
      </Helmet>
      <MainTitle>My Works</MainTitle>
      <WorkListBlock>
        {works.map((work) => (
          <WorkItem work={work} key={work._id} />
        ))}
      </WorkListBlock>
    </div>
  );
}
