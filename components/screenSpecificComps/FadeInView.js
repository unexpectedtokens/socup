import React, { useEffect, useState } from "react";

import { Animated, Easing, Text } from "react-native";

class FadinView extends React.Component {
  constructor(props) {
    super(props);
    this.FadeIn = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.FadeIn, { toValue: 1, duration: 500 }).start();
  }
  componentDidUpdate() {
    Animated.timing(this.FadeIn, { toValue: 1, duration: 500 }).start();
  }
  // Animated.timing(FadeIn, {
  //   toValue: 1,
  //   duration: 500,
  //   easing: Easing.linear
  // }).start();
  // return () => {
  //   FadeIn.setValue(0.3);
  // };
  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.FadeIn,
          transform: [
            {
              translateY: this.FadeIn.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0]
              })
            }
          ]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
export default FadinView;
