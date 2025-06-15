import { MainTitle } from '../components/common/Titles';
import EmailContainer from '../container/EmailContainer';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <MainTitle>Contact me</MainTitle>
      <EmailContainer />
    </div>
  );
}
