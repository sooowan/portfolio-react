import { NavLink } from 'react-router-dom';
import mystyle from '../../styles/Side.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Toggle from './Toggle';
import '../../styles/component.scss';
import axios from 'axios';

const cn = classNames.bind(mystyle);

export default function Side() {
  const nowTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(nowTheme);
  const [info, setInfo] = useState({ title: '', pages: [] });

  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const getInfo = async () => {
    const url =
      'https://raw.githubusercontent.com/sooowan/api/master/data/info.json';
    try {
      const res = await axios.get(url);
      setInfo(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <div className={cn('side-wrap')}>
      <header className={cn('header')}>
        <h1>
          <span>{info.name}</span>의 Portfolio
        </h1>
      </header>
      <aside className={cn('aside')}>
        {info.pages.map((page) => (
          <NavLink
            key={page.id}
            to={page.path}
            className={({ isActive }) => (isActive ? cn('active') : '')}
          >
            <span>{page.name}</span>
          </NavLink>
        ))}
      </aside>
      <div className={cn('footer')}>
        <Toggle
          darkmode="true"
          defaultChecked={'dark' === theme}
          hanleClickTheme={() => setTheme(theme === 'dark' ? '' : 'dark')}
        />
      </div>
    </div>
  );
}
