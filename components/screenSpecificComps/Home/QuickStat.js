import styled from "styled-components/native";
import React, { useState } from "react";
import { Text, Button } from "react-native";
import Card from "../../UI/Card";
const Level = styled.View`
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  border: 5px solid #ff005d;
  border-radius: 50px;
  flex-direction: row;
`;
const QuickStat = styled.View`
  flex-direction: row;
  flex-grow: 1;
  margin-bottom: 20px;
  align-items: flex-end;
  justify-content: flex-start;
`;
const Progress = styled.View`
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: ${props => (!props.container ? "#ff005d" : "#FF89B5")};
  margin-bottom: 20px;
`;
export default props => {
  const percentage =
    props.user.level.level !== 10
      ? (props.user.experience / props.user.level.xpNeededForNextLevel) * 100
      : 100;

  return (
    <Card delay="300">
      <QuickStat>
        <Level>
          <Text style={{ color: "#ff005d", fontSize: 15 }}>lvl</Text>
          <Text style={{ color: "#ff005d", fontSize: 30 }}>
            {props.user.level.level}
          </Text>
        </Level>
      </QuickStat>

      <Progress container>
        <Progress style={{ width: `${percentage}%` }} />
      </Progress>
      <Button title="Continue &rarr;" onPress={props.Clicked} color="#ff005d" />
    </Card>
  );
};
