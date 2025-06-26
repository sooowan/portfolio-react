import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.small {
    font-size: 1rem;
    line-height: 1.2rem;
    padding: 6px;
  }
  &.large {
    font-size: 1.4rem;
    line-height: 1.8rem;
    padding: 12px 18px;
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
      font-size: 1.4rem;
      line-height: 2.2rem;
      font-weight: 700;
      width: 100%;
      height: 56px;
    `}
  ${(props) =>
    props.$func &&
    css`
      font-weight: 700;
      background: var(--oc-indigo-9);
      color: var(--oc-white);
      &:hover {
        background: var(--oc-indigo-8);
      }
    `}
`;
const StyleButton = styled.button`
  ${buttonStyle}
`;
const StyleLink = styled(Link)`
  ${buttonStyle};
  display: inline-flex;
`;

export default function Button({
  fullType,
  children,
  className,
  onClick,
  to,
  disabled,
  func,
}) {
  return (
    <>
      {to ? (
        <StyleLink
          $fullwidth={fullType}
          className={className}
          $func={func}
          to={to}
          disabled={disabled}
        >
          {children}
        </StyleLink>
      ) : (
        <StyleButton
          $fullwidth={fullType}
          $func={func}
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
