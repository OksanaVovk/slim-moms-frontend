import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { GoogleLogin } from '@react-oauth/google';
import { logInGoogle } from 'redux/auth/auth-operations';
import * as yup from 'yup';
import {
  FormLogIn,
  Input,
  Label,
  ErrorText,
  BoxGoogle,
} from './LoginForm.styled';
import { logIn } from 'redux/auth/auth-operations';
import { ButtonAuth, ButtonLinkAuth } from 'components/Button';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
import 'react-toastify/dist/ReactToastify.css';
import { ShowPasswordButton } from 'components/Button/ShowPasswordButton';
import { Navigate } from 'react-router-dom';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(3, 'Password must be at least 3 characters')
    .required('Password is a required field'),
});

const initialValues = {
  email: '',
  password: '',
};

export const FormLogin = () => {
  const [showPassword, setShow] = useState(false);
  const [user, setUser] = useState('');

  const handleClick = () => setShow(!showPassword);
  const dispatch = useDispatch();

  const responseMessage = response => {
    setUser(response);
    console.log(response);
  };
  const errorMess = error => {
    console.log(error);
  };

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  useEffect(() => {
    if (user) {
      dispatch(logInGoogle({ credentail: user.credential }));
    }
  }, [user, dispatch]);

  const errorMessage = localStorage.getItem('error-message');
  if (errorMessage) {
    return <Navigate to="/registration" />;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormLogIn autoComplete="off">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="55px"
            gridGap="40px"
          >
            <Label htmlFor="email">
              Email *<Input type="email" name="email"></Input>
              <FormError name="email" component="p" />
            </Label>
            <Label htmlFor="password">
              Password *
              <Input
                name="password"
                type={showPassword ? 'true' : 'password'}
              ></Input>
              <FormError name="password" component="p" />
              <ShowPasswordButton
                handleClick={handleClick}
                show={showPassword}
              />
            </Label>
          </Box>
          <Box
            display="flex"
            flexDirection={['column', 'row']}
            alignItems="center"
            gridGap={['20px', '32px']}
          >
            <ButtonAuth text="Log in"></ButtonAuth>
            <Link to="/registration">
              <ButtonLinkAuth text="Register"></ButtonLinkAuth>
            </Link>
          </Box>
        </FormLogIn>
      </Formik>
      <BoxGoogle>
        <GoogleLogin
          onSuccess={responseMessage}
          onError={errorMess}
          shape="circle"
          text="Sign in with Google"
        />
      </BoxGoogle>
    </>
  );
};
