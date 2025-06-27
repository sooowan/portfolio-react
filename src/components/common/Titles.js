import styled from 'styled-components';
import '../../styles/font.scss';

const MainTitleBlock = styled.h1`
  font-family: 'JetBrains Mono', 'Noto Sans KR';
  margin-top: 20px;
  font-size: 2rem;
  line-height: 2.6rem;
`;
const SubTitleBlock = styled.h2`
  font-family: 'JetBrains Mono', 'Noto Sans KR';
  margin-top: 20px;
  font-size: 1.6rem;
  line-height: 2.2rem;
`;
const SubTextBlock = styled.span`
  display: inline-block;
  margin-top: 6px;
  font-size: 1.1rem;
  line-height: 1.2rem;
  opacity: 0.6;
`;

export function MainTitle({ children }) {
  return <MainTitleBlock>{children}</MainTitleBlock>;
}
export function SubTitle({ children }) {
  return <SubTitleBlock>{children}</SubTitleBlock>;
}
export function SubText({ children }) {
  return <SubTextBlock>{children}</SubTextBlock>;
}
