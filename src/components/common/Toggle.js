import styled, { css } from 'styled-components';
import '../../styles/component.scss';
import darkmodeIcon from '../img/dark-mode.svg';

const ToggleBlock = styled.div`
  ${(props) =>
    props.$darkmode &&
    css`
      .switch-btn .switch-label::before {
        background-image: url(${darkmodeIcon});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 22px 22px;
      }
      .switch-btn input[type='checkbox']:checked + .switch-label::before {
        background-image: url(${darkmodeIcon});
      }
    `}
`;

export default function Toggle({
  children,
  defaultChecked,
  hanleClickTheme,
  darkmode,
}) {
  return (
    <ToggleBlock className="switch-wrap" $darkmode={darkmode}>
      <span className="switch-name">{children}</span>
      <div className="switch-btn">
        <input
          type="checkbox"
          id="switch_theme"
          defaultChecked={defaultChecked}
          onChange={hanleClickTheme}
        />
        <label htmlFor="switch_theme" className="switch-label">
          <span className="hidden">{children}</span>
        </label>
      </div>
    </ToggleBlock>
  );
}
