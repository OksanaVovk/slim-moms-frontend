import styled from '@emotion/styled';

export const List = styled.ul`
  font-family: 'Verdana';
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 130px 49px 58px 10px;
  gap: 8px;
  align-items: stretch;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    gap: 30px;
    grid-template-columns: 240px 107px 106px 12px;
  }
`;

export const ProductListBox = styled.div`
  position: relative;
  width: 314px;
  /* padding-left: 20px;
  padding-right: 20px; */
  height: 252px;
  /* margin-left: auto;
  margin-right: auto; */
  overflow-y: auto;

  &::-webkit-scrollbar {
    position: absolute;
    right: 0;
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: ${p => p.theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    width: 610px;
    height: 244px;
  }
  @media screen and (min-width: 1280px) {
    width: 633px;
    /* margin-left: 0;
    padding-left: 16px; */
    height: 271px;
  }
`;
