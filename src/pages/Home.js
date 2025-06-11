import styled from 'styled-components';
import HomeLottie from '../components/img/HomeLottie';
import '../styles/font.scss';
import Button from '../components/common/Button';
import { Helmet } from 'react-helmet-async';

const HomeBlock = styled.div`
  text-align: center;
  font-family: 'JetBrains Mono', 'Nanum Gothic';
  h1 {
    font-size: 3rem;
    line-height: 3.6rem;
  }
`;

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>이영애 | REACT</title>
      </Helmet>
      <HomeBlock>
        <HomeLottie />
        <h1>Welcome to my page!</h1>
        <Button to="/contact" className="large">
          CONTACT
        </Button>
      </HomeBlock>
    </div>
  );
}
