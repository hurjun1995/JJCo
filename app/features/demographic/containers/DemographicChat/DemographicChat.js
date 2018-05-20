import React from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles";
import MessageBox from "../../components/MessageBox";
import AnswerBox from "../../components/AnswerBox";

class DemographicChat extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        0: {
          type: "multiple",
          question: "What is your gender?",
          options: ["Male", "Female", "other"]
        },
        1: {
          type: "numberInput",
          question: "How old are you?",
          options: ["numberInput", "How old are you?", "blank"]
        }
      },
      answerOptionsVisible: true
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
      // TODO: make below part a modal for user input
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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollviewContainer}>
          <MessageBox left text="***INITIAL GREETING! :)***" />
        </ScrollView>
        {this.state.answerOptionsVisible && (
          <View style={styles.answerBox}>
            <Text style={styles.answerBoxText}>TAP TO RESPOND</Text>
            <AnswerBox data={this.state.data[0]} />
          </View>
        )}
      </View>
    );
  }
}

export default DemographicChat;
