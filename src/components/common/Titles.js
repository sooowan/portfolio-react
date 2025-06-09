import styled from 'styled-components';
import '../../styles/font.scss';

const MainTitleBlock = styled.h1`
  font-family: 'JetBrains Mono', 'Nanum Gothic';
  margin-top: 20px;
  font-size: 2rem;
  line-height: 2.6rem;
`;
const SubTitleBlock = styled.h2``;

export function MainTitle({ title }) {
  return <MainTitleBlock>{title}</MainTitleBlock>;
}
export function SubTitle({ title }) {
  return <SubTitleBlock>{title}</SubTitleBlock>;
}
