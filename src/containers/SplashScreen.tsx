import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';

interface RouterProps {
  navigation: NavigationProp<any, any>
}

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

function SplashScreen(props: RouterProps) {

  const { navigation } = props;

  const [initializing, setInitializing] = useState<boolean>(true);
  const { user } = useSelector((state: any) => state.auth)

  function onAuthStateChanged(user: any) {
    // setCurrentUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (initializing === false) {
      if (!user) {
        navigation.navigate("Login");
      } else {
        navigation.navigate("Sign Up");
      }
    }
  }, [initializing]);

  return <Container>

  </Container>;
}

export default SplashScreen;
