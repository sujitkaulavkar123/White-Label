import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';

interface ButtonProps {
  label: string;
  fontSize?: number;
  fontFamily?: string;
  disabled?: boolean;
  onClick: (event: any) => void;
}

const Button = styled.TouchableOpacity`
  background-color: blue;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-horizontal: 30px;
  border-radius: 23px;
  opacity: ${(props: ButtonProps) => props.disabled ? 0.5 : 1}
`;

const Label = styled.Text`
  color: white;
  font-size: ${(props: ButtonProps) => props.fontSize}px;
  font-family: ${(props: ButtonProps) => props.fontFamily};
`;

export default function CustomButton(props: ButtonProps) {
  const {
    label = "",
    fontSize = 14,
    fontFamily = "roboto",
    onClick = () => { },
    disabled = false
  } = props;

  return (
    <Button disabled={disabled} onPress={onClick}>
      <Label
        fontSize={fontSize}
        fontFamily={fontFamily}
      >{label}</Label>
    </Button >
  )
}
