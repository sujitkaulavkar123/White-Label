import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native'
import CustomButton from '../atoms/CustomButton';
import CustomInput from '../atoms/CustomInput';
import { loginUserWith } from '../redux/authReducer';
import { AppDispatch } from '../redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

type RootStackParamList = {
  Landing: undefined;
  SignUp: undefined;
  Login: undefined;
};

type AuthNavProps = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function LoginScreen() {

  const { user } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<AuthNavProps>();

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

  const homePage = () => {
    navigation.navigate("Landing");
  }

  function handleEmailAddressChange(value: string) {
    setEmail(value);
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
  }

  async function handleLoginAction(_: any) {
    dispatch(loginUserWith({ emailId: email, password: password }));
  }

  function handleRegisterAction() {
    navigation.navigate("SignUp");
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
