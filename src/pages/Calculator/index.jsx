import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar';
import { CalculatorStyledPage } from './Calculator.styled';
import { bloodSelectors } from '../../redux/bloodDiet/bloodDietSelectors';
import { BarBackground } from 'components/BarBackground';

const Calculator = () => {
  const isLoading = useSelector(bloodSelectors.selectBloodIsLoading);
  return (
    <>
      <BarBackground />
      <CalculatorStyledPage>
        <DailyCaloriesForm />
        {isLoading && <Loader />}
        <RightSideBar />
      </CalculatorStyledPage>
    </>
  );
};

export default Calculator;
