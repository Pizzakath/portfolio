import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
    const { progress } = useProgress();
    return <Html center>{Math.trunc(progress)} % loaded</Html>;
};

export default Loader;
