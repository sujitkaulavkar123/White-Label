import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../containers/LoginScreen";
import SignUpScreen from "../containers/SignUpScreen";
import SplashScreen from "../containers/SplashScreen";
import LandingScreen from '../containers/LandingScreen';

function AuthNavigator() {

  const AuthStack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <AuthStack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} />
        <AuthStack.Screen name="Landing" component={LandingScreen} />
        <AuthStack.Screen name="Splash" component={SplashScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
