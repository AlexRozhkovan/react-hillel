import Repos from './Repos';
import LanguageTabs from './LanguageTabs';
import Loader from '../../styles/Loader';
import {useSelector} from 'react-redux';
import {FC, ReactElement} from "react";
import {RootState} from "../../redux/store";

const Popular: FC = (): ReactElement => {
    const loading: boolean = useSelector((state: RootState) => state.popular.loading);
    return (
        <div>
            <LanguageTabs loading={loading}/>
            {loading ? <Loader/> : <Repos/>}
        </div>
    );
};

export default Popular;
