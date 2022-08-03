import React from 'react';
import { Text } from "react-native";

interface LabelProps {
  label: string;
  fontSize: number;
  fontFamily: string;
}

export default function CustomLabel(props: LabelProps) {
  const { label = "", fontSize = 14, fontFamily = "" } = props;
  return (
    <Text style={{
      fontSize: fontSize,
      fontFamily: fontFamily
    }}>{label}</Text>
  )
}
