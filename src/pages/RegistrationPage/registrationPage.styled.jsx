import styled from '@emotion/styled';

export const Text = styled.p`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;
export const Wrap = styled.div`
  padding-top: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 160px;
  }
`;
