import styled from '@emotion/styled';
import DailyCalorieIntake from '../../components/DailyCalorieIntake';

const Box = styled.div`
  padding: 40px 20px 0 20px;
`;

const ModalPage = () => {
  return (
    <Box>
      <DailyCalorieIntake />
    </Box>
  );
};

export default ModalPage;
