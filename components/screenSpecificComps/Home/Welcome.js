import React from "react";
import styled from "styled-components/native";
const Welcome = styled.View`
  flex: 1;
  padding: 200px 0 80px;
  background: #ff005d;
  margin-bottom: 20px;
  border-radius: 10px;
  transform: rotate(45deg);
  justify-content: center;
  align-items: center;
`;
const WelcomeText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-size: 30px;
  transform: rotate(-45deg);
  padding-left: 30px;
`;
export default props => {
  return (
    <Welcome>
      <WelcomeText style={{ fontSize: 20, color: "#f0f0f0" }}>
        Hello,
      </WelcomeText>
      <WelcomeText>Welcome {props.name || "user"}</WelcomeText>
    </Welcome>
  );
};
