import styled from "styled-components/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const Level = styled.View`
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  border: 5px solid #ff005d;
  border-radius: 50px;
  flex-direction: row;
  margin-right: 10px;
`;
const QuickStat = styled.View`
  flex-direction: row;
  flex-grow: 1;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
`;
const Progress = styled.View`
  height: 15px;
  border-radius: 50px;
  background: ${props => (!props.container ? "#ff005d" : "#FF89B5")};
  margin-bottom: 40px;
`;
const StyledText = styled.Text`
  color: ${props => props.theme.mainColor};
  font-size: 15px;
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
        <View>
          <StyledText>You have completed</StyledText>
          <StyledText>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {props.user.ChallengesComplete}
            </Text>{" "}
            challenges
          </StyledText>
        </View>
      </QuickStat>

      <Progress container>
        <Progress style={{ width: `${percentage}%` }} />
      </Progress>
      <Button Text="Continue &rarr;" Clicked={props.Clicked} color="#ff005d" />
    </Card>
  );
};
