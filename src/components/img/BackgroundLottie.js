import Lottie from 'react-lottie';
import lottie_bubble from './lotties/lottie_bubble.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: lottie_bubble,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
  speed: 2,
};

const initStyle = {
  width: '50%',
  height: '100%',
  pointerEvents: 'none',
};

const BackgroundLottie = () => {
  return <Lottie options={defaultOptions} style={initStyle} />;
};

export default BackgroundLottie;
