import Lottie from 'react-lottie';
import lottie_hello from './lotties/lottie_hello.json';
// import { useEffect, useState } from 'react';

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
  height: '100%',
  margin: '0 auto',
  pointerEvents: 'none',
};

const HomeLottie = () => {
  // const [styleTit, setStyleTit] = useState(initStyle);
  // const resizeWindow = () => {
  //   if (matchMedia('screen and (max-width: 375px)').matches) {
  //     setStyleTit({ ...initStyle, height: '200px' });
  //   } else {
  //     setStyleTit(initStyle);
  //   }
  // };
  // useEffect(() => {
  //   resizeWindow();
  //   window.addEventListener('resize', resizeWindow);
  //   return () => {
  //     window.removeEventListener('resize', resizeWindow);
  //   };
  // }, []);
  return <Lottie options={defaultOptions} style={initStyle} />;
};

export default HomeLottie;
