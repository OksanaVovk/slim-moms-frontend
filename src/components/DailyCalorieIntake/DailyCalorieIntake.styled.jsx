import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../Theme';

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TextCalorie = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  font-size: 18px;
  line-height: 1.4;
  color: ${theme.colors.textSecond};
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const BoxCalorie = styled.div`
  text-align: center;
`;

export const NumberCalorie = styled.sub`
  font-size: 48px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  line-height: 58px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${theme.colors.blue};
`;

export const Unit = styled.span`
  font-size: 20px;
  letter-spacing: 0.02em;
  margin-left: 10px;
`;

export const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 40px;
`;

export const ListTitle = styled.p`
  display: block;
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.s};
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${theme.colors.textSecond};
  text-align: start;

  @media screen and (min-width: 768px) {
    padding-top: 12px;
  }
`;

export const List = styled('ul')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-position: inside;
  margin: 0;
  padding: 0;
  max-height: 130px;
    overflow-y: scroll;
  scroll-behavior: smooth;

  }
`;

export const Item = styled.li`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.s};
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${theme.colors.textFirst};
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Link = styled(NavLink)`
  display: grid;
  place-content: center;
  width: 210px;
  height: 43px;
  line-height: 17px;
  letter-spacing: 0.04em;
  font-weight: 700;
  border-radius: 30px;
  border: 2px solid #fc842d;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.s};
  background: ${theme.colors.accent};
  box-shadow: 0px 4px 10px 0px #fc842d80;
  transition: all 250ms easy;
  cursor: pointer;

  &:hover,
  :focus {
    color: ${theme.colors.accent};
    background: ${theme.colors.white};
  }
`;
