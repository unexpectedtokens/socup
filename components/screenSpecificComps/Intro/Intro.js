import React from "react";
import styled from "styled-components/native";
import { Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const IntroContainer = styled.View`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(${props => (props.firstTime ? "0px" : "1000px")});
`;

export default props => {
  return (
    <IntroContainer firstTime={props.firstTime} style={{}}>
      <LinearGradient colors={["#FF005D", "#A3023D"]} style={{ flex: 1 }}>
        <Text>Hell yes</Text>
        <Button
          onPress={props.setNotFirstTime}
          title={props.firstTime.toString()}
          style={{ paddingTop: 500 }}
        />
      </LinearGradient>
    </IntroContainer>
  );
};
