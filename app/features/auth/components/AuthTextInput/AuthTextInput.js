// import React from 'react';
// import PropTypes from 'prop-types';

// import { View } from 'react-native';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import styles from './styles';

// class AuthTextInput extends React.Component {
//     render() {
//         const { showLabel, placeholder, autoFocus, onChangeText, secureTextEntry } = this.props;

//         return (
//             <Item style={styles.container}>
//                 {
//                     (showLabel) &&
//                     <Label>{this.props.label}</Label>
//                 }
//                 <Input
//                     autoCapitalize='none'
//                     clearButtonMode='while-editing'
//                     underlineColorAndroid="#fff"
//                     placeholder={placeholder}
//                     autoFocus={autoFocus}
//                     onChangeText={onChangeText}
//                     secureTextEntry={secureTextEntry}
//                     style={styles.inputContainer}

//                     value={this.props.value}
//                 />
//                 {/* TODO: Need to handle error */}
//             </Item>
//         )
//     }
// }

// AuthTextInput.propTypes = {
//     label: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number
//     ]),
//     placeholder: PropTypes.string,
//     autoFocus: PropTypes.bool,
//     onChangeText: PropTypes.func.isRequired,
//     secureTextEntry: PropTypes.bool,
//     value: PropTypes.string,
//     error: PropTypes.string
// }

// AuthTextInput.defaultProps = {
//     autoFocus: false,
//     secureTextEntry: false
// }

// export default AuthTextInput;
