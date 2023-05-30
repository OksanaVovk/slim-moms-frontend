import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Field, Form } from 'formik';

export const MessageErr = styled.p`
  color: red;
  width: 300px;
  text-align: justify;
  font-weight: 700;
`;

export const Wrap = styled.div`
  padding-top: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 160px;
   
  }

`;

export const Title = styled.h1`
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #fc842d;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

export const FormReg = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
  @media screen and (min-width: 768px) {
    align-items: start;
  }
 
`;

export const FormList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
   margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const FormItem = styled.li`
  position: relative;
  width: 280px;
`;

export const Label = styled.label`
  display: flex;
  height: 16px;
  color: #9b9faa;
  letter-spacing: 0.04em;
  font-weight: 700;
`;

export const Input = styled(Field)`
  height: 20px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  @media screen and (min-width: 768px) {
    max-width: 240px;
  }
    &:focus,
  &:hover {
    outline: none;
  }
  &:focus,
  :hover {
    border-bottom: 1px solid #fc842d;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 32px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  letter-spacing: 0.04em;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 13px 25px;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: 2px solid #fc842d;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 250ms, color 250ms;
  &:hover,
  &:focus {
    color: #fc842d;
    background: transparent;
  }
  &:disabled {
    background: #9b9faa;
    box-shadow: 0px 4px 10px #9b9faa;
  }
  max-width: 180px;
`;

export const StyledNavLink = styled(Link)`
  font-weight: 700;
  letter-spacing: 0.04em;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 13px 25px;
  background-color: transparent;
  border-radius: 30px;
  border: 2px solid #fc842d;
  color: #fc842d;
  cursor: pointer;
  transition: background-color 250ms, color 250ms;
  &:hover,
  &:focus {
    color: #ffffff;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    background: #fc842d;
  }
  &:disabled {
    background: #9b9faa;
    box-shadow: 0px 4px 10px #9b9faa;
  }
  max-width: 180px;
`;
