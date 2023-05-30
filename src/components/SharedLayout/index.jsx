import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header';
// import { Box } from '../Box';
import Loader from 'components/Loader/Loader';
import { GlobalContainerStyled } from './GlobalContainer.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <GlobalContainerStyled>
          <Outlet />
        </GlobalContainerStyled>
      </Suspense>
    </>
  );
};
