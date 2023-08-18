import React, {FC, memo, ReactElement} from 'react';
import { useDispatch } from 'react-redux';
import { resetPlayer } from '../../redux/battle/battle.actions';
import {Dispatch} from "redux";

interface IProps {
  id:string
}

const ResetPlayerButton:FC<IProps> = memo(
    ({ id }):ReactElement => {
  const dispatch:Dispatch = useDispatch();

  const handleReset = ():void => {
    dispatch(resetPlayer({ id }));
  };

  return (
    <button className="reset" onClick={handleReset}>
      Reset
    </button>
  );
});

export default ResetPlayerButton;
