import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { resetPlayer } from '../../redux/battle/battle.actions';

const ResetPlayerButton = memo(({ id }) => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetPlayer({ id }));
  };

  return (
    <button className="reset" onClick={handleReset}>
      Reset
    </button>
  );
});

export default ResetPlayerButton;
