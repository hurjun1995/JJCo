// import React from "react";
// import PropTypes from "prop-types";

// import { View } from "react-native";
// import {
//   Container,
//   Header,
//   Content,
//   Form,
//   Button,
//   Text,
//   Left,
//   Body,
//   Title,
//   Right
// } from "native-base";
// import {
//   FormLabel,
//   FormInput,
//   FormValidationMessage
// } from "react-native-elements";
// import styles from "./styles";

// import AuthTextInput from "../AuthTextInput";

// import { isEmpty, validate } from "../../utils/validate";

// class Form extends React.Component {
//   constructor(props) {
//     super(props);

//     const { fields, error } = props;

//     this.state = this.createState(fields, error);

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   createState(fields, error) {
//     // create the state
//     const state = {};
//     fields.forEach(field => {
//       const { key, type, value } = field;
//       state[key] = { type, value };
//     });

//     state.error = error;
//     return state;
//   }

//   onSubmit() {
//     const data = this.state;
//     const result = validate(data);

//     if (!result.success) this.setState({ error: result.error });
//     else this.props.onSubmit(this.extractData(data));
//   }

//   extractData(data) {
//     const retData = {};

//     Object.keys(data).forEach((key) => {
//       if (key !== "error") {
//         const { value } = data[key];
//         retData[key] = value;
//       }
//     });

//     return retData;
//   }

//   onChange(key, text) {
//     const state = this.state;
//     state[key].value = text;
//     this.setState(state);
//   }

//   render() {
//     const { fields, showLabel, buttonTitle, onForgotPassword } = this.props;

//     return (
//       <View style={styles.container}>
//         <View style={styles.formContainer}>
//           {!isEmpty(this.state.error.general) && (
//             <Text style={styles.errorText}>{this.state.error.general}</Text>
//           )}
//           {fields.map((data, idx) => {
//             const { key, label, placeholder, autoFocus, secureTextEntry } = data;
//             return (
//               <AuthTextInput
//                 key={key}
//                 label={label}
//                 showLabel={showLabel}
//                 placeholder={placeholder}
//                 autoFocus={autoFocus}
//                 onChangeText={text => this.onChange(key, text)}
//                 secureTextEntry={secureTextEntry}
//                 value={this.state[key].value}
//                 error={this.state.error[key]}
//               />
//             );
//           })}
//         </View>
//         <View>
//           <Button
//             title={buttonTitle}
//             onPress={this.onSubmit}
//             style={styles.button}
//           >
//             <Text style={styles.buttonText}>{buttonTitle}</Text>
//           </Button>
//         </View>
//       </View>
//     );
//   }
// }

// Form.propTypes = {
//   showLabel: PropTypes.bool,
//   error: PropTypes.object,
//   onSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// };

// export default Form;
