import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

function LandingScreen() {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default LandingScreen;
