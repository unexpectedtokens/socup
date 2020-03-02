import React, { useEffect, useState } from "react";
import Container from "../components/screenSpecificComps/FadeInView";
import Challenge from "../components/screenSpecificComps/Challenge/Challenge";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import {
  ChallengeSucceededType,
  PickNewChallenge
} from "../store/actions/actionTypes/userTypes";
import { Animated, Easing, Button } from "react-native";
const mapDispatchToProps = dispatch => {
  return {
    onPickNewChallenge: () => dispatch({ type: PickNewChallenge }),
    onChallengeSucceeded: () => dispatch({ type: ChallengeSucceededType }),
    onPressReset: () => dispatch({ type: "RESET" })
  };
};
const mapStateToProps = state => {
  return {
    user: state.user,
    curChallenge: state.curChallenge,
    modifiers: state.modifiers
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  const [mounted, setMounted] = useState(false);
  const [FadeIn, setFadeIn] = useState(new Animated.Value(0));
  useEffect(() => {
    if (!props.curChallenge) {
      props.onPickNewChallenge();
    }
  });
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

  const CompletedChallenge = () => {
    props.onChallengeSucceeded();
    props.onPickNewChallenge();
  };
  return (
    <Container
      FadeIn={FadeIn}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#FFEDEB",
        paddingTop: 50
      }}
      key="Challenge"
    >
      <Challenge
        curChallenge={props.curChallenge}
        modifiers={props.modifiers}
        Clicked={CompletedChallenge}
      />
      <Button title="resest" onPress={props.onPressReset} />
    </Container>
  );
});
