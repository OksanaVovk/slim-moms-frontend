import { Button } from 'components/Button';
import {
  Wrap,
  Title,
  Form,
  Label,
  Input,
  BloodList,
  RadioButton,
  ButtonContainer,
  BloodListItem,
  WrapBox,
} from './DailyCaloriesForm.styled';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { changeUserDate } from '../../redux/bloodDiet/operations';
// import { toggleModal } from '../../redux/bloodDiet/operations';
import { getDiet, getDietUser, toggleModal, changeUserDate } from '../../redux/bloodDiet/operations';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { bloodSelectors } from 'redux/bloodDiet/bloodDietSelectors'; 
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import calculatorSchema from '../../utils/schemas/CalculatorSchema';

export const DailyCaloriesForm = () => {
  const [apiSuccess, setApiSuccess] = useState(false);
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [bloodType, setBloodType] = useState('1');

  const dispatch = useDispatch();
  const savedFormData = useSelector(bloodSelectors.selectUserDate);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const mds = window.matchMedia('(min-width: 768px)');

  useEffect(() => {
    if (isLoggedIn) {
      setHeight(savedFormData.height);
      setAge(savedFormData.age);
      setCurrentWeight(savedFormData.curWeight);
      setDesiredWeight(savedFormData.desWeight);
      setBloodType(savedFormData.bloodType);
    }
  }, [isLoggedIn, savedFormData]);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'height':
        setHeight(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'currentWeight':
        setCurrentWeight(value);
        break;
      case 'desiredWeight':
        setDesiredWeight(value);
        break;
      default:
        return;
    }
  };

  const handleRadioChange = event => {
    setBloodType(event.target.value);
    localStorage.setItem('bloodType', JSON.stringify(event.target.value));
  };

  const reset = () => {
    setHeight('');
    setAge('');
    setCurrentWeight('');
    setDesiredWeight('');
    setBloodType('1');
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (isLoggedIn) {
      try {
        await dispatch(
          getDietUser({
            height: Number(height),
            age: Number(age),
            curWeight: Number(currentWeight),
            desWeight: Number(desiredWeight),
            bloodType: Number(bloodType),
          })
        );
        if (mds.matches) {
          dispatch(toggleModal(true));
        } else {
          setApiSuccess(true);
        }
      } catch {
        throw new Error();
      }
    } else {
      try {
        await dispatch(
          getDiet({
            height: Number(height),
            age: Number(age),
            curWeight: Number(currentWeight),
            desWeight: Number(desiredWeight),
            bloodType: Number(bloodType),
          })
        );
        dispatch(
          changeUserDate({
            height: height,
            age: age,
            curWeight: currentWeight,
            desWeight: desiredWeight,
            bloodType: bloodType,
          })
        );

        if (mds.matches) {
          dispatch(toggleModal(true));
        } else {
          setApiSuccess(true);
        }
      } catch {
        throw new Error();
      }
    }
    reset();
  };

  if (apiSuccess) return <Navigate to="/modal" />;

  return (
    <Wrap>
      <Title>Calculate your daily calorie intake right now</Title>
      <Form validationSchema={calculatorSchema} onSubmit={handleSubmit}>
        <WrapBox>
          <Label htmlFor="height">
            Height *
            <Input
              pattern="[0-9]"
              required
              id="height"
              type="number"
              name="height"
              value={height}
              onChange={handleInputChange}
            />
          </Label>
          <Label htmlFor="age">
            Age *
            <Input
              pattern="[0-9]"
              id="age"
              required
              type="number"
              name="age"
              value={age}
              onChange={handleInputChange}
            />
          </Label>
          <Label htmlFor="currentWeight">
            Current weight *
            <Input
              pattern="[0-9]"
              required
              id="currentWeight"
              type="number"
              name="currentWeight"
              value={currentWeight}
              onChange={handleInputChange}
            />
          </Label>
        </WrapBox>
        <WrapBox>
          <Label htmlFor="desiredWeight">
            Desired weight *
            <Input
              pattern="[0-9]"
              id="desiredWeight"
              required
              name="desiredWeight"
              type="number"
              value={desiredWeight}
              onChange={handleInputChange}
            />
          </Label>
          <Label htmlFor="bloodType" required>
            <p style={{ marginBottom: '8px' }}>Blood type *</p>
            <BloodList>
              <BloodListItem>
                <RadioButton
                  type="radio"
                  // checked
                  name="bloodType"
                  id="blood-inp-1"
                  value={1}
                  checked={bloodType === '1' ? true : false}
                  onChange={handleRadioChange}
                />
                <label htmlFor="blood-inp-1">1</label>
              </BloodListItem>
              <BloodListItem>
                <RadioButton
                  type="radio"
                  name="bloodType"
                  id="blood-inp-2"
                  value={2}
                  checked={bloodType === '2' ? true : false}
                  onChange={handleRadioChange}
                />
                <label htmlFor="blood-inp-2">2</label>
              </BloodListItem>
              <BloodListItem>
                <RadioButton
                  type="radio"
                  name="bloodType"
                  id="blood-inp-3"
                  value={3}
                  checked={bloodType === '3' ? true : false}
                  onChange={handleRadioChange}
                />
                <label htmlFor="blood-inp-3">3</label>
              </BloodListItem>
              <BloodListItem>
                <RadioButton
                  type="radio"
                  name="bloodType"
                  id="blood-inp-4"
                  value={4}
                  checked={bloodType === '4' ? true : false}
                  onChange={handleRadioChange}
                />
                <label htmlFor="blood-inp-4">4</label>
              </BloodListItem>
            </BloodList>
          </Label>
        </WrapBox>
        <ButtonContainer>
          <Button type="submit" text="Start losing weight" />
        </ButtonContainer>
      </Form>
    </Wrap>
  );
};
