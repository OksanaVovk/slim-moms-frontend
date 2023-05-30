import { Backdrop } from 'components/Modal/Modal.styled';
import { Oval } from 'react-loader-spinner';
import { Wrapper } from './Loader.Styled';

export default function Loader() {
  return (
    <Backdrop>
      <Wrapper>
        <Oval
          height={120}
          width={120}
          color="#FC842D"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#9B9FAA"
          strokeWidth={1}
          strokeWidthSecondary={1}
        />
      </Wrapper>
    </Backdrop>
  );
}
