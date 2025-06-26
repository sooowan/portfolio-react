import styled from 'styled-components';
import { MainTitle, SubText, SubTitle } from '../components/common/Titles';
import EmailContainer from '../container/EmailContainer';
import { Helmet } from 'react-helmet-async';

const InfoBlock = styled.ul`
  list-style: none;
  padding-top: 12px;
  padding-bottom: 42px;
  font-family: 'JetBrains Mono';
  li {
    display: flex;
    justify-content: flex-start;
    margin-top: 12px;
    font-size: 14px;
    span {
      font-weight: 700;
      width: 80px;
    }
  }
`;

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <MainTitle>Contact me</MainTitle>
      <InfoBlock>
        <li>
          <span>Name</span>
          <span>이영애</span>
        </li>
        <li>
          <span>Moblie</span>
          <a href="tel:01057158408">010-5715-8408</a>
        </li>
        <li>
          <span>E-mail</span>
          <a href="mailto:iseeuhh@gmail.com">iseeuhh@gmail.com</a>
        </li>
      </InfoBlock>
      <SubTitle>Send Email</SubTitle>
      <SubText>이메일을 전송해 보세요!</SubText>
      <EmailContainer />
    </div>
  );
}
