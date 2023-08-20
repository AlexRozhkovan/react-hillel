import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {FC, ReactElement} from 'react';
import {RootState} from '../../redux/store';

const BattleLink: FC = (): ReactElement => {
    const playerOneName: string = useSelector(
        (state: RootState) => state.battle.playerOne.name
    );
    const playerTwoName: string = useSelector(
        (state: RootState) => state.battle.playerTwo.name
    );
    return (
        <Link
            className="button"
            to={{
                pathname: 'results',
                search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
            }}
        >
            Battle
        </Link>
    );
};

export default BattleLink;
