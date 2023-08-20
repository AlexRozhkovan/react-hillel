import React, {FC, memo, ReactElement} from 'react';
import {useDispatch} from 'react-redux';
import {resetPlayer} from '../../redux/battle/battle.slice';
import {AppDispatch} from '../../redux/store';

interface IProps {
    id: string;
}

const ResetPlayerButton: FC<IProps> = memo(({id}: IProps): ReactElement => {
    const dispatch: AppDispatch = useDispatch();

    const handleReset = (): void => {
        dispatch(resetPlayer({id}));
    };

    return (
        <button className="reset" onClick={handleReset}>
            Reset
        </button>
    );
});

export default ResetPlayerButton;
