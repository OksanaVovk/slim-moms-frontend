import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { bloodSelectors } from 'redux/bloodDiet/bloodDietSelectors';

const ErrorRoute = ({ children }) => {
  const error = useSelector(bloodSelectors.selectBloodError);

  return error ? <Navigate to="*" replace /> : children;
};

ErrorRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorRoute;
