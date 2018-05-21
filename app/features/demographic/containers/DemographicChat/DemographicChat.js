import React from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles";
import MessageBox from "../../components/MessageBox";
import AnswerBox from "../../components/AnswerBox";

const surveyData = require("../../../../assets/data/surveyQuestions.json");

class DemographicChat extends React.Component {
  constructor() {
    super();

    this.addNewQuestion = this.addNewQuestion.bind(this);
  }

  componentWillMount() {
    this.setState({
      survey: surveyData,
      messagesToRender: {
        0: {
          question: "What is your gender?",
          answer: ""
        }
      },
      isAnswerTableVisible: true,
      currentQuestionNumber: 0
    });
  }

  // Callback function to be called when answer is selected in AnswerBox
  addNewQuestion = selectedOption => {
    const { survey, currentQuestionNumber } = this.state;
    const nextQuestionNumber = currentQuestionNumber + 1;
    const newMessagesToRender = Object.assign({}, this.state.messagesToRender);

    // Update answer with selected option
    newMessagesToRender[currentQuestionNumber].answer = selectedOption;

    // Update next question to render
    newMessagesToRender[nextQuestionNumber] = {};
    newMessagesToRender[nextQuestionNumber].question =
      survey[nextQuestionNumber].question;
    newMessagesToRender[nextQuestionNumber].answer = "";

    this.setState(prevState => ({
      currentQuestionNumber: prevState.currentQuestionNumber + 1,
      messagesToRender: newMessagesToRender
    }));
  };

  // Generates all messages to show on Demographics chat
  generateMessages = messages => {
    const arrayOfMessageBox = [];
    const messagesLength = Object.keys(messages).length;

    // Generate all messages with both question and answer
    for (let i = 0; i < messagesLength - 1; i++) {
      const curMessage = messages[i];
      arrayOfMessageBox.push(<MessageBox left text={curMessage.question} />);
      arrayOfMessageBox.push(
        <MessageBox left={false} text={curMessage.answer} />
      );
    }

    // Generate last message which has only question
    arrayOfMessageBox.push(
      <MessageBox left text={messages[messagesLength - 1].question} />
    );

    return arrayOfMessageBox;
  };

  render() {
    const { survey, currentQuestionNumber } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.scrollViewOuterContainer}>
          <ScrollView contentContainerStyle={styles.scrollViewInnerContainer}>
            {this.generateMessages(this.state.messagesToRender)}
          </ScrollView>
        </View>
        {this.state.isAnswerTableVisible && (
          <View style={styles.answerBox}>
            <Text style={styles.answerBoxText}>TAP TO RESPOND</Text>
            <AnswerBox
              data={survey[currentQuestionNumber]}
              onAnswered={this.addNewQuestion}
            />
          </View>
        )}
      </View>
    );
  }
}

export default DemographicChat;
