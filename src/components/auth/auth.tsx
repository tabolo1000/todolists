import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Checkbox, FormControlLabel, Input, InputAdornment, TextField } from '@mui/material';
import { AccountCircle, CheckBox } from '@mui/icons-material';
import { useFormik } from 'formik';
import { useAppDispatch } from '../../store/store';
import { loginAuthTC } from './authReducer';
import { theme } from '../../styled/theme';





export const Auth = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "tabola1000@gmail.com",
      password: '2zm_G5HffNWc2gm',
      rememberMe: false,
    },
    onSubmit: values => {
      dispatch(loginAuthTC(values))
     // alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <MainAuth>
      <AuthBlock>
        <TitlePage>Login</TitlePage>
        <Form onSubmit={formik.handleSubmit}>
          <TextField
            id="email"
            name='email'
            label="User name"
            type='text'
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.email}
            required


          />
          <TextField
            id="password"
            name='password'
            label="Password"
            type="password"
            variant="standard"
            value={formik.values.password}
            required
            sx={{ color: "red" }}
          />
          <FormControlLabel
            control={
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
            }
            label="Remember Me"
          />
          <Button
            type='submit'
            variant="contained"
          >Sign In</Button>
        </Form>
      </AuthBlock>
    </MainAuth>
  );
}






const MainAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
`;


const AuthBlock = styled.div`
  width: 350px;
  height: 350px;
  padding: 20px;
  background-color: ${theme.backgroundItems};
  text-align: center;
  border-radius: 5%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;


const TitlePage = styled.h2`
  color: #ECF0F5;
  font-size: 24px;
  margin-bottom: 20px;
  position: relative;
  padding: 10px 0 30px;
  &::after{
    content: "";
    display: inline-block;
    position: absolute;
    height: 5px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #ECF0F5;
    border-radius: 100%;
  }
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;

`;


