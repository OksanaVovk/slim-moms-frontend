import { NavStyled, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavStyled>
      <Link to="/login">Sign IN</Link>
      <Link to="/registration">Registration</Link>
    </NavStyled>
  );
};
