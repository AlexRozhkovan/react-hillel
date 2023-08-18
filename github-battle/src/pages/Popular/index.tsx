import Repos from './Repos';
import LanguageTabs from './LanguageTabs';
import Loader from '../../styles/Loader';
import { useSelector } from 'react-redux';
import {FC, ReactElement} from "react";

const Popular: FC = (): ReactElement => {
  const loading:boolean = useSelector((state:any) => state.popular.loading );
  return (
    <div>
      <LanguageTabs loading={loading} />
      {loading ? <Loader /> : <Repos />}
    </div>
  );
};

export default Popular;
