import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BattleLink = () => {
  const playerOneName = useSelector((state) => state.battle.playerOne.name);
  const playerTwoName = useSelector((state) => state.battle.playerTwo.name);
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
