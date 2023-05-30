import { FiEyeOff, FiEye } from 'react-icons/fi';
import styled from 'styled-components';

export const PasswordButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0px;
  top: 0px;
  border: none;
  background: transparent;
  @media screen and (min-width: 768px) {
    left: 215px;
  }
`;
export const ShowPasswordIcon = styled(FiEye)`
  color: #9B9FAA;
  font-size: 20px;
  background: transparent;
`;

export const HidePasswordIcon = styled(FiEyeOff)`
  color: #9B9FAA;
  font-size: 20px;
  background: transparent;
`;
