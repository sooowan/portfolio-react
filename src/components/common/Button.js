import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import '/node_modules/open-color/open-color.css';

const buttonStyle = css`
  border: none;
  background: var(--df-bg);
  padding: 8px 12px;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--txt-df-color);
  border-radius: 8px;
  min-width: 72px;
  margin-top: 32px;
  transition: 0.2s;
  cursor: pointer;

  &.small {
    font-size: 1rem;
    padding: 6px;
  }
  &.large {
    font-size: 1.6rem;
    padding: 14px 24px;
    min-width: 120px;
  }
  &:hover {
    background: var(--df-hover);
  }

  &:disabled {
    background: var(--df-bg);
    color: var(--txt-disabled);
    cursor: not-allowed;
  }

  ${(props) =>
    props.$fullwidth &&
    css`
      font-weight: 700;
      width: 100%;
    `}
`;
const StyleButton = styled.button`
  ${buttonStyle}
`;
const StyleLink = styled(Link)`
  ${buttonStyle};
  display: inline-block;
`;

export default function Button({
  fullType,
  children,
  className,
  onClick,
  to,
  disabled,
}) {
  return (
    <>
      {to ? (
        <StyleLink
          $fullwidth={fullType}
          className={className}
          to={to}
          disabled={disabled}
        >
          {children}
        </StyleLink>
      ) : (
        <StyleButton
          $fullwidth={fullType}
          className={className}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </StyleButton>
      )}
    </>
  );
}
