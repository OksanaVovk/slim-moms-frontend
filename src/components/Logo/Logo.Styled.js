import styled from '@emotion/styled';

export const Box = styled('div')`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1280px) {
    align-items: end;
  }
`;
