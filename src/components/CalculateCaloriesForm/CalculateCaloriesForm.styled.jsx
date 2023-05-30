import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
//   max-width: 610px;
  padding: 32px 20px 41px;
  @media screen and (min-width: 768px) {
    padding: 100px 32px 48px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 145px 139px 111px 16px;
    widht: 763px;
  }
`;

export const Title = styled.h1`
  color: #212121;
  font-size: 18px;
  line-height: 140%;
  margin-bottom: 34px;

  @media (min-width: 768px) {
    font-size: 34px;
    line-height: 1.4;
    margin-bottom: 68px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const WrapBox = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 240px;
    // gap: 32px
    &:first-of-type {
      margin-right: 32px;
      margin-bottom: 60px;
    }
  }
`;

// export const CalcWrap = styled.div`
// @media screen and (min-width: 1280px) {
//     display: flex;
//   flex-flow: column;
//   width: 100%;
//   }
// `;

export const Label = styled.label`
  position: relative;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const LabelBlood = styled.label`
  position: relative;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin-bottom:40px ;
`
export const BloodTypeTitle = styled.p`
margin-bottom: 8px;
@media (min-width: 768px) {
    height: 36px;
    border-bottom: 1px solid #e0e0e0;
}
`;

export const Input = styled.input`
  display: block;
  border: none;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
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

export const TitleRadioBtn = styled.p`
  margin-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
`;

export const BloodList = styled.ul`
  display: inline-flex;
  width: 100%;
  flex-flow: row no-wrap;
`;

export const BloodListItem = styled.li`
  margin-left: 24px;
  &:first-of-type {
    margin-left: 0;
  }
`;

export const RadioButton = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 17px;
    display: inline-block;
    color: #9b9faa;
  }
  &:checked + label:before,
  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 100%;
    background: #ffffff;
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '';
    width: 10px;
    height: 10px;
    background: #fc842d;
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 100%;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
  &:checked + label {
    color: #fc842d;
  }
  &:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const ButtonContainer = styled.div`
  align-self: center;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 339px;
  }
`;
