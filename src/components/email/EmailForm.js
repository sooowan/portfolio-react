import styled from 'styled-components';
import Button from '../common/Button';
// import SendingLottie from '../img/SendingLottie';
// import { useRef, useState } from 'react';

const EmailFormBlock = styled.form`
  width: 100%;
  max-width: 768px;
  margin: 80px auto 0;
  @media (max-width: 768px) {
    margin: 32px auto 40px;
  }
`;

const StyleLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1rem;
  line-height: 1.4rem;
  color: var(--oc-gray-6);
`;

const InputBlock = styled.div`
  position: relative;
  padding-top: 24px;
  margin-bottom: 32px;
  input {
    font-size: 1.1rem;
    line-height: 1.4rem;
    outline: none;
    padding: 8px 0;
    border: none;
    border-bottom: 1px solid var(--bd-lv-1);
    width: 100%;
    background: none;
    color: var(--txt-df-color);
  }
`;
const TextAreaBlock = styled.div`
  position: relative;
  padding-top: 24px;
  textarea {
    font-size: 1rem;
    line-height: 1.4rem;
    outline: none;
    padding: 12px;
    border: 1px solid var(--bd-lv-1);
    width: 100%;
    height: 240px;
    resize: none;
    background: none;
    color: var(--txt-df-color);
  }
`;

export default function EmailForm({
  subject,
  email,
  name,
  body,
  onChangeField,
  onSubmit,
}) {
  const onChangeName = (e) => {
    onChangeField({ key: 'name', val: e.target.value });
  };
  const onChangeEmail = (e) => {
    onChangeField({ key: 'email', val: e.target.value });
  };
  const onChangeSubject = (e) => {
    onChangeField({ key: 'subject', val: e.target.value });
  };
  const onChangeBody = (e) => {
    onChangeField({ key: 'body', val: e.target.value });
  };
  return (
    <div>
      <EmailFormBlock onSubmit={onSubmit}>
        <InputBlock>
          <input
            placeholder="이름을 입력하세요..."
            onChange={onChangeName}
            value={name}
            id="name"
          />
          <StyleLabel htmlFor="name">Name</StyleLabel>
        </InputBlock>
        <InputBlock>
          <input
            placeholder="이메일을 입력하세요..."
            onChange={onChangeEmail}
            value={email}
            id="email"
          />
          <StyleLabel htmlFor="email">Email</StyleLabel>
        </InputBlock>
        <InputBlock>
          <input
            placeholder="제목을 입력하세요..."
            onChange={onChangeSubject}
            value={subject}
            id="subject"
          />
          <StyleLabel htmlFor="subject">Subject</StyleLabel>
        </InputBlock>
        <TextAreaBlock>
          <textarea value={body} id="text" onChange={onChangeBody} />
          <StyleLabel htmlFor="text">Message</StyleLabel>
        </TextAreaBlock>
        <Button type="submit">이메일 보내기</Button>
      </EmailFormBlock>
    </div>
  );
}
