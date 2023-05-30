import styled from '@emotion/styled';
import { theme } from '../Theme';

export const ContainerForm = styled.form`
  display: flex;
  width: 100%;
  gap: 48px;
  align-items: center;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.s};
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${theme.colors.textFirst};

  @media screen and (max-width: 767px) {
    margin-left: 20px;
    padding-top: 80px;
    flex-direction: column;
  }
`;

export const WeightInputStyled = styled.input`
  display: inline-block;
  height: 48px;
  width: 280px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.s};
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${theme.colors.textFirst};
  border-bottom: ${theme.borders.normal} ${theme.colors.grey};
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  &::placeholder {
    color: ${theme.colors.textFirst};
  }
  @media screen and (min-width: 768px) {
    width: 106px;
  }
  &:focus,
  &:hover {
    outline: none;
  }
  &:focus,
  :hover {
    border-bottom: ${theme.borders.normal} ${theme.colors.accent};
  }
`;
