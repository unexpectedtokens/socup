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
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;
const WelcomeText = styled.Text`
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
      <WelcomeText>{props.name || "user"}</WelcomeText>
    </Welcome>
  );
};
