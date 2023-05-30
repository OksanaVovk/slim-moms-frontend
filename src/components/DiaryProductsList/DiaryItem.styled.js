import styled from '@emotion/styled';

export const ProductTitle = styled.div`
  position: relative;
  text-align: left;
  color: ${p => p.theme.colors.textSecond}; //#212121
  &::after {
    content: '';
    bottom: -8px;
    left: 0;
    width: 100%;
    position: absolute;
    border-bottom: 2px solid #e0e0e0;

    @media screen and (min-width: 768px) {
      bottom: -20px;
    }
  }
`;
export const ProductProp = styled.div`
  position: relative;
  text-align: left;
  color: ${p => p.theme.colors.textSecond}; //#212121
  &::after {
    content: '';
    bottom: -8px;
    left: 0;
    width: 100%;
    position: absolute;
    border-bottom: 2px solid #e0e0e0;

    @media screen and (min-width: 768px) {
      bottom: -20px;
    }
  }
  @media screen and (min-width: 768px) {
    text-align: right;
  }
`;

export const ExitBtn = styled.button`
  background: none;
  cursor: pointer;
  margin-left: 10px;
`;

export const Unit = styled.span`
  font-size: 10px;
`;
