import { useDispatch, useSelector } from 'react-redux';
import EmailForm from '../components/email/EmailForm';
import { changeField, initialize } from '../modules/email';
import { useCallback, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { finishLoading, startLoading } from '../modules/loading';
import AskModal from '../components/common/AskModal';
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
  const loading = useSelector((state) => {
    return state.loading['email/EMAIL_SEND'];
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

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modalMsg, setModalMsg] = useState('메일을 보냈습니다.');
  const onConfirm = () => {
    setModal1(false);
    dispatch(startLoading('email/EMAIL_SEND'));

    // emailjs
    //   .send('service_o7lwk6b', 'template_m3dj4oh', data, {
    //     publicKey: 'aoNhrtEijjgKex6Im',
    //   })
    //   .then(
    //     () => {
    //       dispatch(initialize());
    //       dispatch(finishLoading('email/EMAIL_SEND'));
    //       setModal2(true);
    // dispatch(initialize());
    //     },
    //     (error) => {
    //       console.log('실패...', error);
    //       dispatch(finishLoading('email/EMAIL_SEND'));
    //       setModal2(true);
    //       setModalMsg(error.text);
    // dispatch(initialize());
    //     },
    //   );
    setTimeout(() => {
      dispatch(finishLoading('email/EMAIL_SEND'));
      setModal2(true);
      dispatch(initialize());
    }, 2000);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setModal1(true);
  };

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <div>
      <EmailForm
        subject={subject}
        body={body}
        name={name}
        email={email}
        onChangeField={onChangeField}
        onSubmit={onSubmit}
        loading={loading}
      />
      <AskModal
        visble={modal1}
        description="메일을 보내시겠습니까?"
        cancelTxt="취소"
        confirmTxt="확인"
        onCancel={() => setModal1(false)}
        onConfirm={onConfirm}
        type="confirm"
      />
      <AskModal
        visble={modal2}
        description={modalMsg}
        cancelTxt="취소"
        confirmTxt="확인"
        onCancel={() => setModal2(false)}
        onConfirm={() => setModal2(false)}
        type="confirm"
      />
    </div>
  );
}
