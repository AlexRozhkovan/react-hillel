import React, {ChangeEvent, FC, FormEvent, memo, ReactElement} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    setPlayerName,
    setPlayerImage,
} from '../../redux/battle/battle.actions';
import {Dispatch} from "redux";

interface IProps {
    id: string,
    label: string
}

const PlayerInput: FC<IProps> = memo(({id, label}): ReactElement => {
    const dispatch: Dispatch = useDispatch();
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
