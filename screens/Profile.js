import { View, Text, ImageBackground } from "react-native";
import React from "react";
import Container from "../components/screenSpecificComps/FadeInView";

export default ({ navigation }) => {
  return (
    <Container style={{ width: "100%", height: "100%", flex: 1 }}>
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
