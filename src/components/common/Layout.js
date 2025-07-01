import styled from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import mystyle from '../../styles/Main.module.scss';
import '../../styles/font.scss';
import Side from './Side';
import Intro from '../../pages/Intro';
import Works from '../../pages/Works';
import Contact from '../../pages/Contact';
import info from '../pages';
import { useSelector } from 'react-redux';
import SendingLottie from '../img/SendingLottie';
import { useEffect, useRef } from 'react';

const cn = classNames.bind(mystyle);
const pages = info.pages;
const LayoutBlock = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Layout() {
  const location = useLocation();
  const path = location.pathname;
  const scrollRef = useRef(null);

  const tabName = pages.map((page) => {
    if (page.path === path) {
      return page.name;
    } else {
      return '';
    }
  });

  const loading = useSelector((state) => {
    return state.loading['email/EMAIL_SEND'];
  });

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, [path]);

  return (
    <LayoutBlock>
      <Side />
      <div className={cn('main-wrap')}>
        <div className={cn('tab-wrap')}>
          <span className={cn('tab-on')}>{tabName}</span>
        </div>
        <div
          className={cn('content-wrap', path === '/' && 'attach')}
          style={loading ? { overflow: 'hidden' } : { overflow: 'auto' }}
          ref={scrollRef}
        >
          <Routes>
            <Route path="/" index element={<Intro />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {loading === true && <SendingLottie />}
        </div>
      </div>
    </LayoutBlock>
  );
}
