import { AuthBackground } from 'components/AuthBackground';
import { RegistrationForm } from 'components/RegistrationForm';
import { Text, Wrap } from './registrationPage.styled';

const RegistrationPage = () => {
  const errorMessage = localStorage.getItem('error-message');

  if (errorMessage) {
    return (
      <Wrap>
        <Text>
          No user found with this email. Please enter a random password to
          complete registration on the site.
        </Text>
        <AuthBackground />
        <RegistrationForm />
      </Wrap>
    );
  }
  return (
    <Wrap>
      <AuthBackground />
      <RegistrationForm />
    </Wrap>
  );
};

export default RegistrationPage;
