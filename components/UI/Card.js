import styled from "styled-components/native";
import React, { useState } from "react";
import { Animated } from "react-native";

const Card = styled(Animated.View)`
  width: 90%;
  margin: 20px auto 50px;
  background: #ffffff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
`;
export default props => {
  const [FadeIn, setFadeIn] = useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(FadeIn, {
      toValue: 1,
      duration: 500,
      delay: props.delay
    }).start();
  }, []);

  return (
    <Card
      style={{
        ...props.style,
        opacity: FadeIn,
        transform: [
          {
            translateY: FadeIn.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0]
            })
          }
        ]
      }}
    >
      {props.children}
    </Card>
  );
};
