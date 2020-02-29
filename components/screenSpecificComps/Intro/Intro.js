import React from "react";
import styled from "styled-components/native";
import { Text, View, Button, Image, Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const IntroContainer = styled.View`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Input = styled.TextInput`
  background: #fff;
  padding: 10px;
  width: 80%;
  align-self: center;
  border-radius: 5px;
  border: 1px solid #f8f8f8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 10px;
  color: #555;
`;
export default props => {
  return (
    <IntroContainer firstTime={props.firstTime}>
      <LinearGradient
        colors={["#FF005D", "#A3023D"]}
        style={{ flex: 1, paddingBottom: 100, justifyContent: "center" }}
      >
        <View>
          <Image
            source={require("../../../assets/people.png")}
            style={{
              width: "80%",
              height: 200,
              alignSelf: "center",
              marginBottom: 20
            }}
            onPress={() => {
              Keyboard.dismiss();
              console.log("dismissed");
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
              marginBottom: 20
            }}
          >
            What is your name?
          </Text>
          <Input onChangeText={e => props.setName(e)} value={props.name} />
          <View>
            <Button
              onPress={props.confirm}
              title="Confirm"
              style={{ paddingTop: 500 }}
              color="#fff"
            />
          </View>
        </View>
      </LinearGradient>
    </IntroContainer>
  );
};
