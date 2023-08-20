import React, {ChangeEvent, FC, FormEvent, memo, ReactElement} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPlayerImage, setPlayerName} from '../../redux/battle/battle.slice';
import {AppDispatch} from '../../redux/store';

interface IProps {
    id: string;
    label: string;
}

const PlayerInput: FC<IProps> = memo(({id, label}: IProps): ReactElement => {
    const dispatch: AppDispatch = useDispatch();
    const playerName: string = useSelector((state: any) => state.battle[id].name);

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        dispatch(
            setPlayerImage({
                id,
                image: `https://github.com/${playerName}.png?size=200`,
            })
        );
    };

    return (
        <form className="column" onSubmit={handleSubmit}>
            <label className="header" htmlFor="userName">
                {label}
            </label>
            <input
                id="userName"
                type="text"
                autoComplete="off"
                placeholder="GitHub UserName"
                onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                    const name: string = event.target.value;
                    dispatch(setPlayerName({id, name}));
                }}
            />
            <button className="button" type="submit" disabled={!playerName}>
                Submit
            </button>
        </form>
    );
});

export default PlayerInput;
