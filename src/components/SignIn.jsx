import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import AuthStorage from '../utils/authStorage';

const initialValues = {
  username: '',
  password: '',
};

const authStorage = new AuthStorage();

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'username must more than 3 characters!')
    .required('Username is required!'),
  password: yup
    .string()
    .min(6, 'password must more than 6 characters!')
    .required('Password is required!'),
});

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
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      authStorage.setAccessToken(data.authorize.accessToken);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
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
