import styled from '@emotion/styled';

export const BackgroundStyled = styled.div`
  /* width: 100%;
  height: 100%; */
  width: 100%;
    overflow: hidden;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    @media screen and (min-width: 768px) {
    min-height: 1024px;
  }
  @media screen and (min-width: 1280px) {
    min-height: 850px;
  }
`;

export const ImgLeaves = styled.img`
  position: absolute;
  right: -235px;
  top: 35px;
  z-index: 1;
  display: none;
  pointer-events: none;
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

// Tablet----------------------------

export const ImgLeavesTablet = styled.img`
  position: absolute;
  right: -233px;
  bottom: -90px;
  z-index: 1;
  display: none;
  pointer-events: none;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
  }
`;
