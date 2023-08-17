import Repos from './Repos';
import LanguageTabs from './LanguageTabs';
import Loader from '../../styles/Loader';
import { useSelector } from 'react-redux';

const Popular = () => {
  const loading = useSelector((state) => state.popular.loading);
  return (
    <div>
      <LanguageTabs loading={loading} />
      {loading ? <Loader /> : <Repos />}
    </div>
  );
};

export default Popular;
