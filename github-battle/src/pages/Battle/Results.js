import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import Player from "./Player";
import Loader from "../../styles/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getBattleResults } from "../../redux/battle/result.thunk";

const Results = () => {
  const loading = useSelector((state) => state.result.loading);
  const error = useSelector((state) => state.result.error);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const players = queryString.parse(location.search);
    dispatch(getBattleResults(players.playerOneName, players.playerTwoName));
  }, [dispatch, location.search]);

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
          <Player label="Winner" />
          <Player label="Loser" />
        </>
      )}
    </div>
  );
};

export default Results;
