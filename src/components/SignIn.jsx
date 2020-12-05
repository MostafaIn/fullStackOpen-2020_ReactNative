import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="username" placeholder="User Name" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={styles.singInButton}>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};
const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  form: {
    flexGrow: 1,
    marginTop: 30,
  },
  singInButton: {
    backgroundColor: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    color: '#fff',
    textAlign: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
    borderRadius: 3,
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
