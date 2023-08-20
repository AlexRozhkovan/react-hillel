import {ThreeCircles} from 'react-loader-spinner';
import {FC, ReactElement} from "react";

const Loader: FC = (): ReactElement => (
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

// @ts-ignore
export default Loader;