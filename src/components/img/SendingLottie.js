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
  position: 'absolute',
  left: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '100%',
  height: '200px',
  margin: '0 auto',
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
