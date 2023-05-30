// import { Box } from '../Box';
import { NavStyled, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavStyled>
      {/* <Box
        display="flex"
        ml="20px"
        pl="20px"
        borderLeft="1px solid rgb(224, 224, 224)"
      > */}
      <Link to="/login">Sign IN</Link>
      <Link to="/registration">Registration</Link>
      {/* </Box> */}
    </NavStyled>
  );
};
