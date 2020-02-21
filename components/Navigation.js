import styled from "styled-components";
import React from "react";
import { Text } from "react-native";

const NavigationContainer = styled.View`
  width: 100%;
  position: absolute;
  background: #fff;
  bottom: 0;
`;

export default props => {
  return (
    <NavigationContainer>
      <Text>Hello</Text>
    </NavigationContainer>
  );
};
