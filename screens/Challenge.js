import { Text, ImageBackground } from "react-native";
import React from "react";
import Container from "../components/screenSpecificComps/FadeInView";
import Challenge from "../components/screenSpecificComps/Challenge/Challenge";
export default ({ navigation }) => {
  return (
    <Container
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#FFEDEB",
        paddingTop: 300
      }}
    >
      {/* <ImageBackground
        source={require("../assets/background.png")}
        style={{ width: "100%", height: "100%", flex: 1 }}
        resizeMode="cover"
      ></ImageBackground> */}
      <Challenge />
    </Container>
  );
};
