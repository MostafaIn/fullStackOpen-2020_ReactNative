import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.inputBox,style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;

const styles = StyleSheet.create({
    inputBox:{
        borderWidth: 1,
        borderStyle:'solid',
        borderColor:'#333',
        borderRadius: 3,
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight:10
    }
});
