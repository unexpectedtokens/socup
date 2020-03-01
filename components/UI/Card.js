import styled from "styled-components/native";
import React, { useState } from "react";
import { Animated } from "react-native";

const Card = styled(Animated.View)`
  width: 80%;
  margin: 20px auto 50px;
  background: #ffffff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
`;
export default props => {
  // const [FadeIn] = useState();
  const FadeIn = new Animated.Value(0);
  React.useEffect(() => {
    Animated.timing(FadeIn, {
      toValue: 1,
      duration: 500,
      delay: props.delay
    }).start();
    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <Card style={{ ...props.style, opacity: FadeIn }}>{props.children}</Card>
  );
};
