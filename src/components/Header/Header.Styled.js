import styled from '@emotion/styled';

export const HeaderStyled = styled('header')`
  border-bottom: 2px solid #e0e0e0;
  padding-top: 20px;
  padding-bottom: 16px;

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-right: 16px;
    border-bottom: none;
    align-items: baseline;
  }
`;

export const HeaderStyledContent = styled.div`
  display: flex;
  position: relative;

  justify-content: space-between;

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    border-bottom: none;
    align-items: baseline;
  }
`;
