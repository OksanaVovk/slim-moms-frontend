import { ThreeDots } from 'react-loader-spinner';
import { Box } from 'components/Box';
export const LoaderDots = () => {
  return (
    <Box flex>
      <ThreeDots
        height="22"
        width="22"
        radius="15"
        color="#FC842D"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ padding: 0, margin: 0 }}
        visible={true}
      />
    </Box>
  );
};
