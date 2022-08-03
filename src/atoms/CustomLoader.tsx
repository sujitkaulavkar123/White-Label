import React from 'react'
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.15);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export default function CustomLoader() {
  return (
    <Container>
      <ActivityIndicator size="large" color="#0000ff" />
    </Container>
  )
}
