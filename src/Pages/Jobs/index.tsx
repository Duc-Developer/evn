import { Navigate } from 'react-router';
import { ROUTER_PATHS } from '@src/Routes';

const Jobs = () => {
    return <Navigate to={ROUTER_PATHS.WORK_BASKET} />;
};

export default Jobs;
