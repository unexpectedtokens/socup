import React from "react";
import { Animated } from "react-native";
const FadinView = props => {
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: props.FadeIn,
        transform: [
          {
            translateY: props.FadeIn.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 0]
            })
          }
        ]
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadinView;
