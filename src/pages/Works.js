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

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const works = [
  {
    _id: '000',
    link: 'https://duddoi.github.io/portfolio-react/',
    title: {
      ico: '😈',
      text: 'REACT_PORTFOLIO',
    },
    desc: '리액트 기반 포트폴리오입니다.<br>(2025 ver.)',
    tags: [
      'React',
      'redux',
      'localStorage',
      'styled-components',
      'EmailJS',
      'CSS-Module',
      'react-router',
      'lottie',
    ],
    style: 'lottie',
  },
  {
    _id: '001',
    link: 'https://duddoi.github.io/todo-app/',
    title: {
      ico: '🗒️',
      text: 'TO-DO APP',
    },
    desc: '리액트 프로젝트 to-do app입니다.',
    tags: ['React', 'localStorage', 'styled-components'],
    style: 'gradient',
  },
  {
    _id: '002',
    link: 'https://duddoi.github.io/blog/',
    title: {
      ico: '✍🏻',
      text: 'BOLG',
    },
    desc: '리액트 프로젝트 블로그 app입니다.',
    tags: [
      'React',
      'redux',
      'localStorage',
      'styled-components',
      'react-router',
    ],
  },
  {
    _id: '003',
    link: 'https://duddoi.github.io/2022_portfolio/',
    title: {
      ico: '🌈',
      text: '2022_PORTFOLIO',
    },
    desc: '이전 진행한 프로젝트 기반으로 만든 포트폴리오입니다.(2022 ver.)',
    tags: ['html', 'css', 'javascript'],
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
