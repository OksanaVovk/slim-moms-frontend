import styled from '@emotion/styled';
import Datetime from 'react-datetime';
import { theme } from '../Theme';
export const Container = styled.div`
  display: flex;
  gap: 21px;
  align-items: baseline;
  font-family: 'Verdana';
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.textSecond};
  line-height: 17px;
  @media screen and (min-width: 768px) {
    margin-bottom: 49px;
  }
`;

export const DatetimeStyled = styled(Datetime)`
  .form-control {
    border: none;
    margin-bottom: 32px;
    width: 116px;
    color: ${theme.colors.textSecond};
    font-weight: ${theme.fontWeights.bold};
    font-size: 18px;
    padding: 0;
    background: transparent;

    @media screen and (min-width: 768px) {
      font-size: 34px;
      width: 219px;
    }
  }
  .rdtPicker td.rdtToday:before {
    border-bottom-color: ${theme.colors.accent};
  }
  .rdtPicker td.rdtActive {
    background-color: ${theme.colors.accent};
  }
  .rdtPicker td.rdtActive:hover {
    background-color: ${theme.colors.accent};
  }
`;

export const IconCalendarStyled = styled.svg`
  width: 20px;
  height: 18px;
  & :hover {
    cursor: pointer;
  }
`;
