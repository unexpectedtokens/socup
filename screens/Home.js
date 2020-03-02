import { ImageBackground, Text, Modal, Animated, Easing } from "react-native";
import styled from "styled-components/native";
import React, { useState, useEffect } from "react";
import Welcome from "../components/screenSpecificComps/Home/Welcome";
import QuickStat from "../components/screenSpecificComps/Home/QuickStat";
import Trophies from "../components/screenSpecificComps/Home/Trophies";
import Intro from "../components/screenSpecificComps/Intro/Intro";
import { connect } from "react-redux";
import { registerUserName } from "../store/actions/actionCreators/userActions";
import { ChallengeSucceededType } from "../store/actions/actionTypes/userTypes";
import Container from "../components/screenSpecificComps/FadeInView";
import { useFocusEffect } from "@react-navigation/native";

const mapDispatchToProps = dispatch => {
  return {
    onEnterUsername: un => dispatch(registerUserName(un)),
    onChallengeSucceeded: () => dispatch({ type: ChallengeSucceededType })
  };
};
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  const [name, setName] = useState("");
  const [mounted, setMounted] = useState(false);
  const [modalOpen, toggleModal] = useState(false);
  const [FadeIn, setFadeIn] = useState(new Animated.Value(0));

  const Initialize = () => {
    if (name) {
      props.onEnterUsername(name);
      toggleModal(false);
    }
  };

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
  useEffect(() => {
    if (!props.user.username) {
      toggleModal(true);
    }
  }, [props.user.username]);
  return (
    <Container
      FadeIn={FadeIn}
      style={{ width: "100%", height: "100%", flex: 1 }}
      key="Home"
    >
      <ImageBackground
        source={require("../assets/background.png")}
        style={{ width: "100%", height: "100%", flex: 1 }}
        resizeMode="cover"
      >
        <HomeScrollView>
          <Welcome name={props.user.username} />
          <QuickStat
            user={props.user}
            Clicked={() => {
              props.navigation.navigate("challenges");
            }}
          />

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
          <Trophies trophies={props.user.trophies} />
        </HomeScrollView>
        <Modal animationType="slide" visible={modalOpen}>
          <Intro name={name} setName={setName} confirm={Initialize} />
        </Modal>
      </ImageBackground>
    </Container>
  );
});

const HomeScrollView = styled.ScrollView``;
