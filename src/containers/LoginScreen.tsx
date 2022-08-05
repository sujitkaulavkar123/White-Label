import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native'
import CustomButton from '../atoms/CustomButton';
import CustomInput from '../atoms/CustomInput';
import { loginUserWith } from '../redux/authReducer';
import { AppDispatch } from '../redux';

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 5%;
  `;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

export default function LoginScreen(props: RouterProps) {

  const dispatch = useDispatch<AppDispatch>();

  const { user } = useSelector((state: any) => state.auth);
  const { navigation } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);

  useEffect(() => {
    user && homePage();
  }, [user]);

  useEffect(() => {
    if (email.length && password.length) {
      setIsLoginDisabled(false);
    } else {
      setIsLoginDisabled(true);
    }
  }, [email, password]);

  function homePage() {
    props.navigation.navigate("Landing");
  }

  function handleEmailAddressChange(value: string) {
    setEmail(value);
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
  }

  function handleLoginAction(_: any) {
    dispatch(loginUserWith({ emailId: email, password: password }));
  }

  function handleRegisterAction() {
    navigation.navigate("Sign Up");
  }

  return (
    <Container>
      <CustomInput value="" placeholderText="Email Address" onBlur={handleEmailAddressChange} />
      <CustomInput value="" secure={true} placeholderText="Password" onBlur={handlePasswordChange} />
      <ButtonContainer>
        <CustomButton label="Login" disabled={isLoginDisabled} onClick={handleLoginAction} />
        <CustomButton label="Register Now" onClick={handleRegisterAction} />
      </ButtonContainer>
    </Container>
  )
}
