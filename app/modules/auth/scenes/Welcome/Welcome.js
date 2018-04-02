import React from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Left,
  Body,
  Title,
  Right
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { View } from "react-native";
import styles from "./styles";

import { Actions } from 'react-native-router-flux';

import Form from "../../components/Form"

import { actions as auth } from "../../index"

const { login } = auth;

const fields = [
  {
    key: "email",
    label: "Email Address",
    placeholder: "Email Address",
    autoFocus: false,
    secureTextEntry: false,
    value: "",
    type: "email"
  },
  {
    key: "password",
    label: "Password",
    placeholder: "Password",
    autoFocus: false,
    secureTextEntry: true,
    value: "",
    type: "password"
  }
];

const error = {
  general: "",
  email: "",
  password: ""
};

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      error: error
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  onSubmit(data) {
    this.setState({ error: error }); //clear out error messages

    this.props.login(data, this.onSuccess, this.onError);
  }

  onSuccess({ exists, user }) {
    // if (exists) Actions.Main();
    // else Actions.CompleteProfile({ user });
    console.log("sign in success!");
  }

  onError(error) {
    let errObj = this.state.error;

    if (error.hasOwnProperty("message")) {
      errObj["general"] = error.message;
    } else {
      let keys = Object.keys(error);
      keys.map((key, index) => {
        errObj[key] = error[key];
      });
    }
    this.setState({ error: errObj });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        enableOnAndroid={true}
        scrollEnabled={false}
      >
        <View style={styles.topContainer}>
          <Text style={styles.title}>YOLO</Text>
        </View>
        <Form
          style={styles.formContainer}
          fields={fields}
          showLabel={false}
          onSubmit={this.onSubmit}
          buttonTitle={"Sign in"}
          error={this.state.error}
        />
        <View style={(styles.bottomContainer, styles.formContainer)}>
          <Button iconLeft light style={styles.button}>
            <Icon name="facebook" style={styles.facebookIcon} />
            <Text uppercase={false} style={styles.buttonText}>
              Sign in with Facebook account
            </Text>
          </Button>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default connect(null, { login })(Welcome);
