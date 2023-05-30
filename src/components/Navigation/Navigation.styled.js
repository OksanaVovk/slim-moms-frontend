import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavStyled = styled('nav')`
  padding-top: 18px;
  position: relative;

  @media screen and (min-width: 1280px) {
    &::before {
      content: '';
      top: 57px;
      left: -36px;
      width: 32px;
      rotate: 90deg;
      position: absolute;
      border-bottom: 2px solid #e0e0e0;
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: 17px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 52px;
    margin-left: 40px;
  }
`;

export const Link = styled(NavLink)`
  font-family: Verdana, sans-serif;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  text-transform: uppercase;

  color: ${p => p.theme.colors.textSecond};
  transition: ${p => p.theme.transition.all};

  &:last-of-type {
    margin-left: 14px;

    @media screen and (min-width: 768px) {
      margin-left: 24px;
    }

    @media screen and (min-width: 1280px) {
      margin-left: 18px;
    }
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.textFirst};
  }
  &.active {
    color: ${p => p.theme.colors.textFirst};
  }
`;
