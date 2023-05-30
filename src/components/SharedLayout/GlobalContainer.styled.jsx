import styled from '@emotion/styled';

export const GlobalContainerStyled = styled.div`
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-right: 0px;
    padding-left: 16px;
  }
`;
