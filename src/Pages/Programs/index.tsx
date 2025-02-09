import { Navigate } from 'react-router';
import { ROUTER_PATHS } from '@src/Routes';

const Programs = () => {
    return <Navigate to={ROUTER_PATHS.PROGRAMS_MANAGEMENT} />;
};

export default Programs;
