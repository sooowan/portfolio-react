import Lottie from 'react-lottie';
import lottie_hello from './lotties/lottie_hello.json';
import { useEffect, useState } from 'react';

const defaultOptions = {
  loop: 2,
  autoplay: true,
  animationData: lottie_hello,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet',
  },
  speed: 10,
};

const initStyle = {
  width: '100%',
  height: '500px',
  margin: '0 auto',
};

const HomeLottie = () => {
  const [styleTit, setStyleTit] = useState(initStyle);
  const resizeWindow = () => {
    if (matchMedia('screen and (max-width: 768px)').matches) {
      setStyleTit({ ...initStyle, height: '260px' });
    } else {
      setStyleTit(initStyle);
    }
  };
  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);
  return (
    <div>
      <Lottie options={defaultOptions} style={styleTit} />
    </div>
  );
};

export default HomeLottie;
