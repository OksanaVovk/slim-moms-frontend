import { AuthBackground } from 'components/AuthBackground';
import Loader from 'components/Loader/Loader';
import { FormLogin } from 'components/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { LoginPage, TitleLogIn } from './loginPage.styled';

const Login = () => {
  const { isLoading } = useAuth();
  return (
    <>
    <AuthBackground/>
    <LoginPage>
      <TitleLogIn>LOG IN</TitleLogIn>
      <FormLogin />
      {isLoading && <Loader />}
      </LoginPage>
      {/* // </AuthBackground> */}
      </>
  );
};

export default Login;
