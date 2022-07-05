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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import AppPreLoader from '../AppPreLoader';

const ForgatPassword = ({ navigation }) => {
  const [Email, SetEmail] = useState();
  const [msg, setMsg] = useState();
  const [color, setColor] = useState();
  const [loader, setLoader] = useState(false);

  const [emailStyle, setEmailStyle] = useState({
    lable: {
      color: 'gray',
      fontSize: 14,
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });

  const signin = () => {
    setLoader(true);
    if (!Email) {
      alert('Please Enter Email');
      setLoader(false);
    } else {
      auth()
        .sendPasswordResetEmail(Email)
        .then(() => {
          setLoader(false);
          setMsg(
            'Email sent successfully\nPlese check your email and click the link',
          );
          setColor('green');
        })
        .catch(error => {
          setLoader(false);
          if (error.code === 'auth/user-not-found') {
            setMsg('There is no user record corresponding to this email');
          }
          if (error.code === 'auth/invalid-email') {
            setMsg('That email address is invalid!');
          }
          setColor('red');
          // console.error(error);
        });
    }
  };
  if (loader) {
    return <AppPreLoader />;
  }

  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logoT.png')}
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.form}>
            <TextInput
              inputStyle={{ fontSize: 13 }}
              inputContainerStyle={{ height: 40, ...emailStyle.container }}
              placeholder="Enter Email"
              label="Email"
              labelStyle={emailStyle.lable}
              onChangeText={t => SetEmail(t)}
              onFocus={() =>
                setEmailStyle({
                  lable: { color: '#007fcb', fontSize: 14 },
                  container: {
                    borderBottomColor: '#007fcb',
                    borderBottomWidth: 2,
                  },
                })
              }
              style={styles.input}
              onBlur={() =>
                setEmailStyle({
                  lable: { color: 'gray', fontSize: 14 },
                  container: {
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                  },
                })
              }
              containerStyle={styles.inputContainer}
              rightIcon={<Icon name="email" size={24} color="#007fcb" />}
            />

            <Text
              style={{
                color: color,
                fontSize: 12,
                marginBottom: 30,
                marginLeft: 10,
              }}>
              {msg}
            </Text>
          </View>

          <TouchableOpacity onPress={() => signin()} style={styles.btn}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Jameel Noori Nastaleeq',
                fontSize: 18,
              }}>
              Send Mail{' '}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '80%',
              margin: 30,
            }}>
            <Text
              style={{
                color: 'rgb(60, 60, 60)',
                fontFamily: 'Jameel Noori Nastaleeq',
                fontSize: 16,
              }}>
              Return to{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text
                style={{
                  fontFamily: 'Jameel Noori Nastaleeq',
                  color: '#1e7bf6',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginTop: 6,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
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
    paddingVertical: 50,
    paddingBottom: 50,
    backgroundColor: '#1E7BF6',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    height: 100,
    width: '30%',
  },
  formContainer: {
    width: '100%',
    padding: 15,
    paddingVertical: 25,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 200,
  },

  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00000060',
    marginVertical: 10,
    marginTop: 50,
    paddingHorizontal: 20,
    width: '100%',
    borderRadius: 8,
  },
  btn: {
    color: '#fff',
    backgroundColor: '#1E7BF6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    width: '100%',
    borderRadius: 8,
    elevation: 5,
  },
  btnBelow: {
    textAlign: 'center',
    marginBottom: 10,
    color: 'rgba(14, 59, 117, 0.6)',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgatPassword;
