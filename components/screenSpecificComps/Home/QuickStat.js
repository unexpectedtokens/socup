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
  background: #ff005d;
  transform: translateY(${props => (props.color ? "-50px" : 0)});
`;
export default props => {
  const [showColor, toggle] = useState(false);
  return (
    <Card>
      <QuickStat>
        <Level>
          <Text style={{ color: "#ff005d", fontSize: 15 }}>lvl</Text>
          <Text style={{ color: "#ff005d", fontSize: 30 }}>{props.level}</Text>
        </Level>
      </QuickStat>
      <Progress color={showColor ? true : false} />
      <Button
        title="Continue &rarr;"
        onPress={e => toggle(cur => !cur)}
        color="#ff005d"
      />
    </Card>
  );
};
