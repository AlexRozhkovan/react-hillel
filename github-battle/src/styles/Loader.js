import { ThreeCircles } from "react-loader-spinner";

const Loader = () => (
  <div className="middle">
    <ThreeCircles
      height="65"
      width="65"
      innerCircleColor="#d15c6a"
      middleCircleColor="#d13649"
      outerCircleColor="#d0021b"
    />
  </div>
);

export default Loader;
