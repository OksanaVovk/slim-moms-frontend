import { Logo } from 'components/Logo';
import { HeaderStyled, HeaderStyledContent } from './Header.Styled';
import { UserInfo } from 'components/UserInfo';
import { Navigation } from 'components/Navigation';
import { useAuth } from 'hooks/useAuth';
import { GlobalContainerStyled } from 'components/SharedLayout/GlobalContainer.styled';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <HeaderStyled>
        <GlobalContainerStyled>
          <HeaderStyledContent>
            <Logo />
            {isLoggedIn ? <UserInfo /> : <Navigation />}
          </HeaderStyledContent>
        </GlobalContainerStyled>
      </HeaderStyled>
    </>
  );
};
