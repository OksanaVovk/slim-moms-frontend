import React from 'react';
import {
  Box,
  TextCalorie,
  BoxCalorie,
  NumberCalorie,
  Unit,
  List,
  ListTitle,
  Item,
  BoxList,
  Link,
} from './DailyCalorieIntake.styled';
import { useDispatch, useSelector } from 'react-redux';
import { clearState } from '../../redux/bloodDiet/operations';
import { toggleModal } from 'redux/bloodDiet/operations';
import { bloodSelectors } from 'redux/bloodDiet/bloodDietSelectors';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const DailyCalorieIntake = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dataApi = useSelector(bloodSelectors.selectBloodByDate);
  const dataApiUser = useSelector(state => state.bloodDiet.data.data);

  const { notRecProducts, dailyCalorie } = isLoggedIn
    ? dataApiUser.user
    : dataApi.result;

  const dispatch = useDispatch();

  const onBtnClick = () => {
    dispatch(toggleModal(false));
    dispatch(clearState());
  };

  const mds = window.matchMedia('(min-width: 768px)');

  return (
    <Box>
      {mds.matches ? (
        <TextCalorie>
          Your recommended daily<br></br>calorie intake is
        </TextCalorie>
      ) : (
        <TextCalorie>Your recommended daily calorie intake is</TextCalorie>
      )}
      <BoxCalorie>
        <NumberCalorie>
          {dailyCalorie}
          <Unit>kcal</Unit>
        </NumberCalorie>
      </BoxCalorie>
      <BoxList>
        <ListTitle>Foods you should not eat</ListTitle>
        <List as="ol">
          {notRecProducts.map(product => (
            <Item key={product._id}>{product.title.ua}</Item>
          ))}
        </List>
      </BoxList>
      <Link to="/login" onClick={() => onBtnClick()}>
        Start losing weight
      </Link>
    </Box>
  );
};

export default DailyCalorieIntake;
