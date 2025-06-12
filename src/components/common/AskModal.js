import styled from 'styled-components';
import Button from './Button';
import FullScreen from './FullScreen';

const AskModalBlock = styled.div`
  width: 320px;
  background: var(--main-bg);
  padding: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  &.confirm {
    width: 240px;
  }
  h2 {
    margin-top: 12px;
  }
  p {
    padding-top: 12px;
    padding-bottom: 32px;
    font-size: 1.1rem;
    line-height: 1.6rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    button {
      min-width: 56px;
      margin-top: 12px;
    }
  }
`;

export default function AskModal({
  visble,
  title,
  description,
  cancelTxt = '취소',
  confirmTxt,
  onCancel,
  onConfirm,
  type,
}) {
  if (!visble) return null;
  return (
    <FullScreen>
      <AskModalBlock className={type === 'confirm' ? 'confirm' : ''}>
        {type !== 'confirm' && <h2>{title}</h2>}
        <p>{description}</p>
        <div className="buttons">
          <Button className="small" onClick={onCancel}>
            {cancelTxt}
          </Button>
          <Button className="small" onClick={onConfirm}>
            {confirmTxt}
          </Button>
        </div>
      </AskModalBlock>
    </FullScreen>
  );
}
