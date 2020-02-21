import { ImageBackground, Text, Modal } from "react-native";
import styled from "styled-components/native";
import React, { useState } from "react";
import Welcome from "../components/screenSpecificComps/Home/Welcome";
import QuickStat from "../components/screenSpecificComps/Home/QuickStat";
import Trophies from "../components/screenSpecificComps/Home/Trophies";
import Intro from "../components/screenSpecificComps/Intro/Intro";
import { connect } from "react-redux";
import { registerUserName } from "../store/actions/actionCreators/userActions";

const mapDispatchToProps = dispatch => {
  return { onEnterUsername: un => dispatch(registerUserName(un)) };
};

export default connect(mapDispatchToProps)(props => {
  const [FirstTime, setFirstTime] = useState(true);
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={{ width: "100%", height: "100%", flex: 1 }}
      resizeMode="cover"
    >
      <BigBoy>
        <Welcome />
        <QuickStat level="16" />
        <Text>{FirstTime.toString()}</Text>
        <Text
          style={{
            width: "80%",
            marginLeft: "10%",
            color: "#FF699F",
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          Trophies
        </Text>
        <Trophies />
      </BigBoy>
      <Modal animationType="slide" visible={FirstTime}>
        <Intro
          firstTime={FirstTime}
          setNotFirstTime={() => setFirstTime(false)}
        />
      </Modal>
    </ImageBackground>
  );
});

const BigBoy = styled.ScrollView`
  flex: 1;
`;
