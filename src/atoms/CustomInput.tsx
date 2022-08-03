import React, { useState } from 'react';
import { TextInput, TextStyle } from "react-native";
import styled from 'styled-components/native';

interface InputProps {
  value: string;
  placeholderText: string;
  secure?: boolean;
  validator?: RegExp;
  onBlur?: (value: string) => void;
  onChange?: (event: any) => number;
  customStyle?: TextStyle | null;
}

const CustomTextInput = styled.TextInput`
  width: 100%;
  height: 45px;
  padding-horizontal: 10px;
  margin-horizontal: 10%;
  margin-vertical: 20px;
  border-width: 2px;
  border-color: gray;
  border-radius: 23px;
`

export default function CustomInput(props: InputProps) {
  const {
    value = "",
    placeholderText = "",
    secure = false,
    validator = "",
    customStyle = {},
    onBlur = () => { },
    onChange = () => { }
  } = props;

  const [text, setText] = useState(value);

  function handleTextChange(inputString: string) {
    inputString = inputString.trimStart()
    if (validator && validator.test(inputString) === false) return;
    setText(inputString);
    onChange(inputString);
  }

  function handleOnBlur() {
    onBlur(text);
  }

  return (
    <CustomTextInput
      style={customStyle}
      onChangeText={handleTextChange}
      onBlur={handleOnBlur}
      value={text}
      placeholder={placeholderText}
      secureTextEntry={secure}
    />
  )
}
