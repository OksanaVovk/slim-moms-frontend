import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'components/Theme';

export const DiaryStyledPage = styled('div')`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;
export const DiaryStyled = styled('div')`
  padding-top: 80px;
  // padding-left: 20px;
  // padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-left: 32px;
    align-items: start;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 145px;
  }
`;

export const Wrapper = styled('div')`
  @media screen and (min-width: 768px) {
    padding-top: 60px;
  }
`;

export const DiaryAdd = styled('div')`
  padding-bottom: 60px;
`;

export const DiaryCalendar = styled('div')`
  margin-right: 120px;
`;

export const MobileWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MobileButton = styled(Link)`
  margin: 30px 0px;
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radii.round};
  width: 50px;
  height: 50px;
  font-size: ${theme.fontSizes.l};
  background: ${theme.colors.accent};
  box-shadow: 0px 4px 10px 0px #fc842d80;
`;
