import { NavLink } from 'react-router-dom';
import mystyle from '../../styles/Side.module.css';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Switch from './Switch';
import info from '../pages';
import '../../styles/component.scss';

const cn = classNames.bind(mystyle);
const pages = info.pages;

export default function Side({ title = info.title }) {
  const nowTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(nowTheme);

  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  return (
    <div className={cn('side-wrap')}>
      <header className={cn('header')}>
        <h1>{title}</h1>
      </header>
      <aside className={cn('aside')}>
        {pages.map((page) => (
          <NavLink
            key={page.id}
            to={page.path}
            className={({ isActive }) => (isActive ? cn('active') : '')}
          >
            <span>{page.name}</span>
          </NavLink>
        ))}
      </aside>
      <footer className={cn('footer')}>
        <Switch
          title="Dark Mode"
          defaultChecked={'dark' === theme}
          hanleClickTheme={() => setTheme(theme === 'dark' ? '' : 'dark')}
        />
      </footer>
    </div>
  );
}
