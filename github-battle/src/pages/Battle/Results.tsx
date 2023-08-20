import {FC, ReactElement, useEffect} from 'react';
import {Link, Location, NavigateFunction, useLocation, useNavigate,} from 'react-router-dom';
import queryString from 'query-string';
import Player from './Player';
import Loader from '../../styles/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {getBattleResults} from '../../redux/battle/result.requests';
import {AppDispatch, RootState} from '../../redux/store';

const Results: FC = (): ReactElement => {
    const loading: boolean = useSelector(
        (state: RootState) => state.result.loading
    );
    const error: unknown = useSelector((state: RootState) => state.result.error);

    const dispatch: AppDispatch = useDispatch();
    const location: Location = useLocation();
    const navigate: NavigateFunction = useNavigate();

    useEffect((): void => {
        const {playerOneName, playerTwoName} = queryString.parse(location.search);
        // @ts-ignore
        dispatch(
            getBattleResults({
                playerOneName: String(playerOneName),
                playerTwoName: String(playerTwoName),
            })
        );
    }, [dispatch, location.search]);

    if (error) {
        return (
            <div className="middle">
                <h2>Ooops... Something went wrong!</h2>
                <Link className="button" onClick={() => navigate(-1)} to={''}>
                    Go back
                </Link>
            </div>
        );
    }

    return (
        <div className="row">
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <Player label="Winner"/>
                    <Player label="Loser"/>
                </>
            )}
        </div>
    );
};

export default Results;
