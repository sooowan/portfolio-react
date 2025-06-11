import styled from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import mystyle from '../../styles/Main.module.css';
import '../../styles/font.scss';
import Side from './Side';
import Home from '../../pages/Home';
import Works from '../../pages/Works';
import Contact from '../../pages/Contact';
import info from '../pages';

const cn = classNames.bind(mystyle);
const pages = info.pages;
const LayoutBlock = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Layout() {
  const location = useLocation();
  const path = location.pathname;
  // 잠ㄱ깐만
  const tabName = pages.map((page) => {
    if (page.path === path) {
      return page.name;
    } else {
      return '';
    }
  });
  return (
    <LayoutBlock>
      <Side />
      <div className={cn('main-wrap')}>
        <div className={cn('tab-wrap')}>
          <span className={cn('tab-on')}>{tabName}</span>
        </div>
        <div className={cn('content-wrap')}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </LayoutBlock>
  );
}
