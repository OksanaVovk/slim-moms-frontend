import styled from '@emotion/styled';
import { theme } from '../Theme';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
  background-color: ${theme.colors.backdrop};
  opacity: 1;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opaсity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 100%;
  height: 100%;
  padding: 40px 20px 0 20px;
  background-color: ${theme.colors.white};

  @media screen and (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    width: 672px;
    height: auto;
    padding: 64px 82px 80px 82px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      opaсity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ModalButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  display: block;
  background-color: #11ffee00;
  border:${theme.borders.none};;
  color: ${theme.colors.black};;
  transition:  fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
  cursor: pointer;

  &:hover,
  &:focus {
    fill: ${theme.colors.accent};
  }
`;

export const ModalButtonIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const NotFound = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  font-size: 36px;
  line-height: 1.4;
  color: ${theme.colors.textSecond};
  text-align: center;
`;
