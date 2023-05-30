import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from 'hooks/useAuth';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
