import Lottie from 'react-lottie';
import lottie_wave from './lotties/lottie_wave.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: lottie_wave,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
  speed: 2,
};

const initStyle = {
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
};

const BackgroundLottie = () => {
  return <Lottie options={defaultOptions} style={initStyle} />;
};

export default BackgroundLottie;
