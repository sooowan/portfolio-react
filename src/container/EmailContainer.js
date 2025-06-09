import { useDispatch, useSelector } from 'react-redux';
import EmailForm from '../components/email/EmailForm';
import { changeField, initialize } from '../modules/email';
import { useCallback, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// import { useNavigate } from 'react-router-dom';

export default function EmailContainer() {
  const subject = useSelector((state) => {
    return state.email.subject;
  });
  const body = useSelector((state) => {
    return state.email.body;
  });
  const name = useSelector((state) => {
    return state.email.name;
  });
  const email = useSelector((state) => {
    return state.email.email;
  });

  const data = useSelector((state) => {
    return state.email;
  });

  const dispatch = useDispatch();
//   const navigate = useNavigate();
  const onChangeField = useCallback(
    (payload) => {
      dispatch(changeField(payload));
    },
    [dispatch],
  );

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_o7lwk6b', 'template_m3dj4oh', data, {
        publicKey: 'aoNhrtEijjgKex6Im',
      })
      .then(
        () => {
          dispatch(initialize());
          console.log('성공!');
        },
        (error) => {
          console.log('실패...', error);
        },
      );
  };

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <EmailForm
      subject={subject}
      body={body}
      name={name}
      email={email}
      onChangeField={onChangeField}
      onSubmit={onSubmit}
    />
  );
}
