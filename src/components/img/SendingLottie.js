import Lottie from 'react-lottie';
import lottie_sending from './lotties/lottie_sending.json';
import FullScreen from '../common/FullScreen';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: lottie_sending,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet',
  },
};

const initStyle = {
  width: '100%',
  height: '200px',
  pointerEvents: 'none',
};

const SendingLottie = () => {
  return (
    <FullScreen>
      <Lottie options={defaultOptions} style={initStyle} />
    </FullScreen>
  );
};

export default SendingLottie;
