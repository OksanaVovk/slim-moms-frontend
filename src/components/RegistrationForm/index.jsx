import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { register } from 'redux/auth/auth-operations';
import * as yup from 'yup';
import { ButtonAuth, ButtonLinkAuth } from 'components/Button';
import { Link } from 'react-router-dom';

import {
  Title,
  FormList,
  FormItem,
  Label,
  Input,
  ButtonsContainer,
  FormReg,
  MessageErr,
} from './RegistrationForm.styled';
import { ShowPasswordButton } from 'components/Button/ShowPasswordButton';

export const RegistrationForm = () => {
  const [showPassword, setShow] = useState(false);
  const [localMessage, setLocalMessage] = useState(
    JSON.parse(localStorage.getItem('error-message'))
  );

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem('error-message');
    setLocalMessage('');
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      name: localMessage ? localMessage.name : '',
      email: localMessage ? localMessage.email : '',
      password: '',
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .min(3, 'Name must be at least 3 characters')
        .max(15, 'Name must be at most 8 characters')
        .required('Name is a required field'),
      email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email is a required field'),
      password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(100, 'Password must be at most 100 characters')
        .required('Password is a required field'),
    }),
    onSubmit: ({ name, email, password }, { resetForm }) => {
      dispatch(register({ name, email, password }));
      console.log({ name, email, password });
      resetForm();
    },
  });

  const handleClick = () => setShow(!showPassword);

  return (
    <>
      <div>
        <Title>Register</Title>

        <FormReg autoComplete="off" onSubmit={formik.handleSubmit}>
          <FormList>
            <FormItem>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <MessageErr className="error">{formik.errors.name}</MessageErr>
              ) : null}
            </FormItem>
            <FormItem>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <MessageErr className="error">{formik.errors.email}</MessageErr>
              ) : null}
            </FormItem>

            <FormItem>
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                name="password"
                type={showPassword ? 'true' : 'password'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <MessageErr className="error">
                  {formik.errors.password}
                </MessageErr>
              ) : null}
              <ShowPasswordButton
                handleClick={handleClick}
                show={showPassword}
              />
            </FormItem>
          </FormList>
          <ButtonsContainer>
            <ButtonAuth text="Register"></ButtonAuth>
            <Link to="/login">
              <ButtonLinkAuth text="Log in"></ButtonLinkAuth>
            </Link>
          </ButtonsContainer>
        </FormReg>
      </div>
    </>
  );
};
