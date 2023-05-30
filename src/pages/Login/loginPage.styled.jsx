import styled from '@emotion/styled';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-top: 160px;
  }
  
`;

export const TitleLogIn = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.s};
`;
