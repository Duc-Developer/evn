import { Navigate } from 'react-router';
import { ROUTER_PATHS } from '@src/Routes';

const Systems = () => {
    return <Navigate to={ROUTER_PATHS.ACCOUNT_MANAGEMENT} />;
};

export default Systems;
