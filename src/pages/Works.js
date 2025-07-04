import styled from 'styled-components';
import { MainTitle } from '../components/common/Titles';
import { Helmet } from 'react-helmet-async';
import WorkItem from '../components/works/WorkItem';
import { works } from '../components/data';

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
