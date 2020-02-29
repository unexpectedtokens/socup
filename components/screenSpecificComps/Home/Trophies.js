import styled from "styled-components/native";
import React from "react";
import { View, Image, Text } from "react-native";
import Card from "../../UI/Card";

const TrophiesContainer = styled.View``;
const Trophie = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  opacity: ${props => {
    if (props.completed) {
      return 1;
    }
    return 0.5;
  }};
`;

const TrophieComp = props => {
  return (
    <Trophie completed={props.completed}>
      <View style={{ marginRight: 20 }}>
        <Image
          style={{ height: 35, width: 35 }}
          source={require("../../../assets/trophy.png")}
        />
      </View>
      <View>
        <Text
          style={{
            color: "#E55E8D",
            textTransform: "capitalize",
            fontWeight: "bold",
            fontSize: 20
          }}
        >
          getting started
        </Text>
        <Text style={{ color: "#FFA5C4", textTransform: "capitalize" }}>
          reach level 2
        </Text>
      </View>
    </Trophie>
  );
};

export default props => {
  return (
    <Card delay="500">
      <TrophiesContainer>
        <TrophieComp completed />
        <TrophieComp />
        <TrophieComp />
        <TrophieComp />
        <TrophieComp />
        <TrophieComp />
      </TrophiesContainer>
    </Card>
  );
};
