import {
  View,
  Text,
  ImageBackground,
  Animated,
  Easing,
  Button
} from "react-native";

import React, { useState, useEffect } from "react";
import Container from "../components/screenSpecificComps/FadeInView";
import { useFocusEffect } from "@react-navigation/native";
export default ({ navigation }) => {
  const [mounted, setMounted] = useState(false);
  const [FadeIn, setFadeIn] = useState(new Animated.Value(0));
  useEffect(() => {
    if (mounted) {
      Animated.timing(FadeIn, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease
      }).start();
    } else {
      setFadeIn(new Animated.Value(0));
    }
  }, [mounted]);
  useFocusEffect(
    React.useCallback(() => {
      setMounted(true);
      return () => {
        setMounted(false);
      };
    })
  );
  return (
    <Container
      style={{ width: "100%", height: "100%", flex: 1 }}
      FadeIn={FadeIn}
      key="Profile"
    >
      <ImageBackground
        source={require("../assets/background.png")}
        style={{ width: "100%", height: "100%", flex: 1 }}
        resizeMode="cover"
      >
        <View navigation={navigation}>
          <Text onPress={() => navigation.navigate("Home")}>home</Text>
        </View>
      </ImageBackground>
    </Container>
  );
};
