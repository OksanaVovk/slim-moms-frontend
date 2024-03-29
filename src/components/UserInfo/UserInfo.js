import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logOut } from 'redux/auth/auth-operations';
import sprite from 'images/icons.svg';
import { useAuth } from 'hooks/useAuth';
import {
  UserName,
  ExitBtn,
  UserNameContainer,
  ModalContent,
  ModalBox,
  MenuButton,
  NameBox,
  Bar,
  BackArrow,
  BackLink,
  UserNavLink,
  NavLinkBox,
  UserContainer,
} from './UserInfo.styled';

const UserInfoModal = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <MenuButton
        className={menuActive ? 'active' : ''}
        type="button"
        onClick={() => setMenuActive(!menuActive)}
      >
        <Bar />
        <Bar />
        <Bar />
      </MenuButton>
      <UserInfoNav active={menuActive} setActive={setMenuActive} />
    </>
  );
};

const UserInfoNav = ({ active, setActive }) => {
  return (
    <ModalBox className={active ? 'active' : ''}>
      <ModalContent>
        <UserNavLink to={'./diary'} onClick={() => setActive(!active)}>
          Diary
        </UserNavLink>
        <UserNavLink to={'./calculator'} onClick={() => setActive(!active)}>
          Calculator
        </UserNavLink>
      </ModalContent>
    </ModalBox>
  );
};

export const UserInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { user } = useAuth();

  const isLogout = () => {
    dispatch(logOut());
  };

  return (
    <UserContainer>
      <NavLinkBox>
        <UserNavLink to={'./diary'}>Diary</UserNavLink>
        <UserNavLink to={'./calculator'}>Calculator</UserNavLink>
      </NavLinkBox>

      <UserNameContainer>
        <BackLink to={location.state?.from ?? '/diary'}>
          <BackArrow>
            <use href={sprite + '#icon-enter-arrow'}></use>
          </BackArrow>
        </BackLink>

        <NameBox>
          <UserName>{user.name}</UserName>
          <ExitBtn type="button" onClick={isLogout}>
            Exit
          </ExitBtn>
        </NameBox>
      </UserNameContainer>

      <UserInfoModal className="modal" />
    </UserContainer>
  );
};
