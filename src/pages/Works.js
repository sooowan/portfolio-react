import { MainTitle } from '../components/common/Titles';
import { Helmet } from 'react-helmet-async';

export default function Works() {
  return (
    <div>
      <Helmet>
        <title>Works</title>
      </Helmet>
      <MainTitle title="My Works" />
    </div>
  );
}
