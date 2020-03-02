import { TouchableOpacity, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Button = styled(TouchableOpacity)`
  padding: 10px 20px;
  background: ${props => props.theme.mainColor};
  border-radius: 50px;
  margin: 10px;
  align-items: center;
`;

export default props => {
  return (
    <Button onPress={props.Clicked}>
      <Text style={{ color: "#fff" }}>{props.Text}</Text>
    </Button>
  );
};
