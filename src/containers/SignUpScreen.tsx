import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native'
import CustomAlert from '../atoms/CustomAlert';
import CustomButton from '../atoms/CustomButton';
import CustomInput from '../atoms/CustomInput';
import { registerUserWith } from '../redux/authReducer';

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

export default function SignUpScreen(props: RouterProps) {

  const { navigation } = props;
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterDisabled, setIsRegisterDisabled] = useState(true);

  useEffect(() => {
    user && (
      CustomAlert("", user, [{ text: "Awesome", onPress: () => navigation.goBack() }])
    )
  }, [user]);

  useEffect(() => {
    if (email.length && password.length) {
      setIsRegisterDisabled(false);
    } else {
      setIsRegisterDisabled(true);
    }
  }, [email, password]);

  function handleEmailAddressChange(value: string) {
    setEmail(value);
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
  }

  function handleLoginAction(_: any) {
    navigation.navigate("Login")
  }

  function handleRegisterAction() {
    dispatch(registerUserWith({ emailId: email, password: password }));
  }

  return (
    <Container>
      <CustomInput value="" placeholderText="Email Address" onBlur={handleEmailAddressChange} />
      <CustomInput value="" secure={true} placeholderText="Password" onBlur={handlePasswordChange} />
      <ButtonContainer>
        <CustomButton label="Register" disabled={isRegisterDisabled} onClick={handleRegisterAction} />
        <CustomButton label="Login" onClick={handleLoginAction} />
      </ButtonContainer>
    </Container>
  )
}
