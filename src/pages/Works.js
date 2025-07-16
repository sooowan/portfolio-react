import styled from 'styled-components';
import { MainTitle } from '../components/common/Titles';
import { Helmet } from 'react-helmet-async';
import WorkItem from '../components/works/WorkItem';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
  const [works, setWorks] = useState([]);
  const getWorks = async () => {
    const url =
      'https://raw.githubusercontent.com/sooowan/portfolio-react/master/src/data/works.json';
    try {
      const res = await axios.get(url);
      setWorks(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getWorks();
  }, []);
  // console.log(works);
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
