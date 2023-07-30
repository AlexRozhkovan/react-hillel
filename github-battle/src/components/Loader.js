import { ThreeCircles } from "react-loader-spinner";

const Loader = () => (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
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
