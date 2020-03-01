import React from "react";
import Card from "../../UI/Card";
import { Text } from "react-native";
import styled from "styled-components/native";
export default props => {
  return (
    <Card delay="100">
      <Text>{props.curChal}</Text>
    </Card>
  );
};
