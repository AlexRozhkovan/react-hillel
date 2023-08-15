import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { battle } from "../../app/github-api";
import queryString from "query-string";
import Player from "./Player";
import Loader from "../../styles/Loader";

const Results = () => {
  const [winner, setWinner] = useState(null);
  const [loser, setLoser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const players = queryString.parse(location.search);

    battle([players.playerOneName, players.playerTwoName])
      .then(([winner, loser]) => {
        setWinner(winner);
        setLoser(loser);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [location.search]);

  if (error) {
    console.log(error.message);
    return (
      <div className="middle">
        <h2>Ooops... Something went wrong!</h2>
        <Link className="button" onClick={() => navigate(-1)}>
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="row">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Player
            label="Winner"
            score={winner.score}
            profile={winner.profile}
          />
          <Player label="Loser" score={loser.score} profile={loser.profile} />
        </>
      )}
    </div>
  );
};

export default Results;
