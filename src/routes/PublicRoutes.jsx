import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from 'hooks/useAuth';

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
