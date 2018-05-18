import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  FormInput,
  FormValidationMessage,
  Icon,
  SocialIcon
} from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import styles from "./styles";

// import Form from "../../components/Form";

import { actions as a } from "../../index";

// const error = {
//   general: "",
//   email: "",
//   password: ""
// };

class Welcome extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   error
    // };

    this.onSubmit = this.onSubmit.bind(this);
    // this.onSuccess = this.onSuccess.bind(this);
    // this.onError = this.onError.bind(this);
  }

  onSubmit(data) {
    // this.setState({ error }); // clear out error messages

    this.props.login(data, this.onSuccess, this.onError);
  }

  onPressButton = () => {
    this.props.navigation.navigate("DemographicChat");
  };

  // onSuccess({ exists, user }) {
  //   // if (exists) Actions.Main();
  //   // else Actions.CompleteProfile({ user });
  //   console.log("sign in success!");
  // }

  // onError(error) {
  //   let errObj = this.state.error;

  //   if (error.hasOwnProperty("message")) {
  //     errObj["general"] = error.message;
  //   } else {
  //     let keys = Object.keys(error);
  //     keys.map((key, index) => {
  //       errObj[key] = error[key];
  //     });
  //   }
  //   this.setState({ error: errObj });
  // }

  render() {
    const { authError, requestSignInWithFacebook } = this.props;
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        enableOnAndroid
        scrollEnabled={false}
      >
        <View style={styles.topContainer}>
          <Text style={styles.title}>YOLO</Text>
        </View>
        <View style={styles.authContainer}>
          <View style={styles.formContainer}>
            <View style={styles.singleFormInputContainer}>
              <Icon name="email" />
              <FormInput
                placeholder="Email Address"
                underlineColorAndroid="transparent"
              />
              {/* // TODO: Error message doesn't work! */}
            </View>
            <FormValidationMessage>{authError}</FormValidationMessage>
            <View style={styles.singleFormInputContainer}>
              <Icon name="key" type="foundation" />
              <FormInput
                placeholder="Password"
                secureTextEntry
                underlineColorAndroid="transparent"
              />
            </View>
            <FormValidationMessage>{authError}</FormValidationMessage>
          </View>
          <Button
            containerViewStyle={styles.buttonContainer}
            buttonStyle={styles.signInButton}
            title="SIGN IN"
            onPress={this.onPressButton}
            fontFamily="DosisLight"
          />
          <SocialIcon
            title="SIGN IN WITH FACEBOOK"
            button
            type="facebook"
            style={[styles.buttonContainer, styles.socialIconButton]}
            onPress={requestSignInWithFacebook}
            // need to fix fontstyle
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.authError
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(a.login()),
  requestSignInWithFacebook: () => dispatch(a.requestSignInWithFacebook())
});

Welcome.propTypes = {
  authError: PropTypes.string,
  requestSignInWithFacebook: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

Welcome.defaultProps = {
  authError: ""
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
