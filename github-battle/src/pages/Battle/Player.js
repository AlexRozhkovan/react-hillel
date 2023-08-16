import { useSelector } from "react-redux";
import Profile from "./Profile";

const Player = ({ label }) => {
  const score = useSelector((state) => state.result[label.toLowerCase()].score);
  return (
    <div>
      <h1 className="header">{label}</h1>
      <h3 style={{ textAlign: "center" }}>Score: {score}</h3>
      <Profile player={label.toLowerCase()} />
    </div>
  );
};

export default Player;
