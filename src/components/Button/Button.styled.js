import styled from '@emotion/styled';
import { theme } from '../Theme';

export const StyledButton = styled.button`
  display: grid;
  place-content: center;
  width: ${({ width }) => width || '210px'};
  height: ${({ height }) => height || '43px'};
  line-height: 17px;
  letter-spacing: 0.04em;
  font-weight: ${theme.fontWeights.bold};
  border-radius: ${({ radius }) => radius || '30px'};
  border: 2px solid ${theme.colors.accent};
  color: ${({ color }) => color || theme.colors.white};
  font-size: ${({ font }) => font || theme.fontSizes.s};
  background: ${({ bg }) => bg || theme.colors.accent};
  box-shadow: ${({ shadow }) => shadow || '0px 4px 10px 0px #fc842d80'};
  transition: ${theme.transition.all};
  cursor: pointer;

  &:hover,
  :focus {
    color: ${({ bg }) => bg || theme.colors.accent};
    background: ${({ color }) => color || theme.colors.white};
    box-shadow: ${({ shadowHover }) => shadowHover || 'none'};
  }
`;
