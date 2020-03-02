import React from "react";
import Card from "../../UI/Card";
import { Text, View } from "react-native";
import Button from "../../UI/Button";
import styled from "styled-components/native";
const ModifiersContainer = styled.View`
  background: #eee;
  border-radius: 15px;
  padding: 10px;
`;
const Title = styled.Text`
  font-size: 30px;
  color: ${props => props.theme.mainColor};
`;
export default props => {
  return (
    <Card
      delay="100"
      key={props.curChallenge.challenge.toString()}
      style={{ minHeight: "70%", justifyContent: "space-around" }}
    >
      <Title>Your daily challenge</Title>
      <Text style={{ color: "#555" }}>
        {props.curChallenge.challenge.toString()}
      </Text>
      <ModifiersContainer>
        <View>
          {props.modifiers.map(mod => {
            return (
              <Text style={{ color: "#555" }} key={mod}>
                - {mod}
              </Text>
            );
          })}
        </View>
      </ModifiersContainer>
      <Button Text="Completed Challenge &#10003;" Clicked={props.Clicked} />
    </Card>
  );
};
