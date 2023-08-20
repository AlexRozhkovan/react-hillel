import {useSelector} from 'react-redux';
import Profile from './Profile';
import {FC, ReactElement} from 'react';

interface IProps {
    label: string;
}

const Player: FC<IProps> = ({label}: IProps): ReactElement => {
    const score: number = useSelector(
        (state: any) => state.result[label.toLowerCase()].score
    );
    return (
        <div>
            <h1 className="header">{label}</h1>
            <h3 style={{textAlign: 'center'}}>Score: {score}</h3>
            <Profile player={label.toLowerCase()}/>
        </div>
    );
};

export default Player;
