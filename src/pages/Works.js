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
  margin-top: 32px;
`;

const works = [
  {
    _id: '001',
    link: 'https://duddoi.github.io/todo-app/',
    title: {
      ico: '😈',
      text: 'TO-DO APP',
    },
    desc: '여기는 설명입니다.',
    tags: ['리액트', 'React'],
    style: 'gradient',
  },
  {
    _id: '002',
    link: 'https://duddoi.github.io/blog/',
    title: {
      ico: '✍🏻',
      text: 'BOLG',
    },
    desc: '여기는 설명입니다.',
    tags: ['리액트', 'React'],
    // style: 'solid_gray',
  },
  {
    _id: '003',
    link: 'https://duddoi.github.io/2022_portfolio/',
    title: {
      ico: '🌈',
      text: '2022_PORTFOLIO',
    },
    desc: '여기는 설명입니다.',
    tags: ['리액트', 'React'],
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
