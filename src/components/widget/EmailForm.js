import styled from 'styled-components';
import Button from '../common/Button';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { formatDate } from '../../lib/format';

const EmailFormBlock = styled.form`
  width: 100%;
  max-width: 768px;
  margin: 32px 0 42px;
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

const ErrMsg = styled.span`
  display: inline-block;
  color: var(--oc-pink-6);
  font-size: 0.9rem;
  line-height: 1.2rem;
  padding-top: 8px;
`;

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

export default function EmailForm({ onChangeField, onSubmit, resetForm }) {
  const {
    register,
    handleSubmit, //e.preventDefault();불필요
    formState: { errors },
    reset,
  } = useForm({ mode: 'all' });

  const setValueAndSubmit = async (datas) => {
    Object.keys(datas).map((key) =>
      onChangeField({ key: key, val: datas[key] }),
    );
    onChangeField({ key: 'sendTime', val: currentTime });
    onSubmit();
  };
  useEffect(() => {
    if (resetForm) reset();
    console.log('reset run');
    return () => {
      reset();
      console.log('reset clear');
    };
  }, [resetForm, reset]);

  const [currentTime, setCurrentTime] = useState(formatDate(new Date()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(formatDate(new Date()));
      // console.log(currentTime);
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);
  return (
    <div>
      <EmailFormBlock onSubmit={handleSubmit(setValueAndSubmit)}>
        <input type="hidden" name="timestamp" value={currentTime} />
        <InputBlock>
          <input
            placeholder="이름을 입력하세요..."
            id="name"
            {...register('name', {
              required: '필수 입력 항목입니다.',
              maxLength: { value: 5, message: '6글자 이내로 입력하세요.' },
            })}
            type="text"
          />
          <StyleLabel htmlFor="name">Name</StyleLabel>
          {errors.name && <ErrMsg>{errors.name.message}</ErrMsg>}
        </InputBlock>
        <InputBlock>
          <input
            placeholder="이메일을 입력하세요..."
            id="email"
            {...register('email', {
              required: '필수 입력 항목입니다.',
              pattern: {
                value: emailRegEx,
                message: '이메일 형식에 맞지 않습니다. 다시 확인 해주삼.',
              },
            })}
            type="email"
          />
          <StyleLabel htmlFor="email">E-mail</StyleLabel>
          {errors.email && <ErrMsg>{errors.email.message}</ErrMsg>}
        </InputBlock>
        <InputBlock>
          <input
            placeholder="제목을 입력하세요..."
            id="subject"
            {...register('subject', { required: '필수 입력 항목입니다.' })}
            type="text"
          />
          <StyleLabel htmlFor="subject">Subject</StyleLabel>
          {errors.subject && <ErrMsg>{errors.subject.message}</ErrMsg>}
        </InputBlock>
        <TextAreaBlock>
          <textarea id="text" {...register('body')} />
          <StyleLabel htmlFor="text">Message</StyleLabel>
        </TextAreaBlock>
        <Button func={true} fullType={true} type="submit">
          이메일 보내기
        </Button>
      </EmailFormBlock>
    </div>
  );
}
