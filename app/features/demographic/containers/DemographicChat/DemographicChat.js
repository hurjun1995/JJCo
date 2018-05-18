import React from "react";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { connect } from "react-redux";
import { View, ScrollView, Modal, Button } from "react-native";
import styles from "./styles";
import MessageBox from "../../components/MessageBox";

class DemographicChat extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        0: ["What is your gender?", "Male", "Female", "other"],
        1: ["How old are you?", "blank"]
      }
      // currentQuestionNumber: 2,
      // needNextQuestion: false,
      // isAnswerTableVisible: false
    };
  }

  createChats = chatData => {
    const chats = [];
    const totalNumOfQuestions = Object.keys(chatData).length;
    for (let i = 0; i < totalNumOfQuestions; i++) {
      const currentQuestion = chatData[i];
      chats.push(<MessageBox left text={currentQuestion[0]} key="0" />);
      for (let j = 1; j < currentQuestion.length; j++) {
        chats.push(
          <MessageBox
            left={false}
            text={currentQuestion[j]}
            key={j.toString()}
          />
        );
      }
    }
    return chats;
  };

  // given: list of strings
  // create modal of answer table
  createAnswerTable = answers => (
    <Modal
      transparent
      visible
      // onRequestClose={() => {
      //   alert("Modal has been closed.");
      // }}
    >
      <View>{answers.map(answer => <Button title={answer} />)}</View>
    </Modal>
  );

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <MessageBox left text="***INITIAL GREETING! :)***" />
        {this.createChats(this.state.data)}
        {this.createAnswerTable(this.state.data[0])}
      </ScrollView>
    );
  }
}

export default DemographicChat;
