import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { signInRequest } from '../../redux/action';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const signin = () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Values',
        text2: 'please fill All Information',
        visibilityTime: 3000,
      });
    } else {
      dispatch(
        signInRequest({
          postData: {
            email,
            password,
          },
        }),
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logoT.png')}
          />
          <Text style={styles.logoText}>Stay Fit and Healthy</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.form}>
            <TextInput
              placeholder="Enter Email"
              lable="Email"
              onChangeText={setEmail}
              value={email}
              iconName="email"
              style={styles.input}
            />

            <TextInput
              placeholder="Enter Password"
              lable="Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
              iconName="lock"
              style={styles.input}
            />
          </View>

          <TouchableOpacity onPress={() => signin()} style={styles.btn}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Jameel Noori Nastaleeq',
                fontSize: 18,
              }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={styles.createAccount}>
            <Text style={styles.createAccountText}>
              Don't have an account? Register Now
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.forgetPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgatPassword')}>
            <Text style={styles.btnBelow}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    backgroundColor: '#1e7bf6',
  },
  logoContainer: {
    paddingVertical: 150,
    paddingBottom: 50,
    backgroundColor: '#1E7BF6',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
  },
  formContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00000060',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    borderRadius: 8,
  },

  btn: {
    color: '#fff',
    backgroundColor: '#1E7BF6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 8,
    marginVertical: 10,
    elevation: 5,
  },
  btnBelow: {
    textAlign: 'center',
    marginBottom: 10,
    color: 'rgba(14, 59, 117, 0.6)',
    fontSize: 16,
  },
  createAccount: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#1e7bf6',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  forgetPassword: {
    backgroundColor: '#fff',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 10,
  },
  createAccountText: {
    color: '#1e7bf6',
  },
});

export default SignIn;
