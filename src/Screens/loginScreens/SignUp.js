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
import Toast from 'react-native-toast-message';
import { loginRequest } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { RadioButton } from 'react-native-paper';

const SignUp = ({ navigation }) => {
  const [Gender, setGender] = React.useState('male');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();
  const signup = () => {
    if (password2 != password) {
      Toast.show({
        type: 'error',
        text1: 'Password Error',
        text2: 'Confirm Password does not match with Password',
        visibilityTime: 3000,
      });
    } else if (
      name == '' ||
      email == '' ||
      password == '' ||
      password2 == '' ||
      feet == '' ||
      inches == '' ||
      currentWeight == '' ||
      goalWeight == '' ||
      age == ''
    ) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Values',
        text2: 'Please fill all fields',
        visibilityTime: 3000,
      });
    } else {
      dispatch(
        loginRequest({
          postData: {
            email: email,
            password: password,
            Gender,
            name,
            feet,
            inches,
            currentWeight,
            goalWeight,
            age,
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
        </View>

        <View style={styles.formContainer}>
          <View style={styles.form}>
            <TextInput
              placeholder="Enter Name"
              lable="Name"
              onChangeText={setName}
              value={name}
              style={styles.input}
            />

            {/* Gender Selection input */}
            <Text
              style={{
                width: '90%',
                textAlign: 'left',
                marginLeft: -20,
                fontWeight: 'bold',
                color: '#00000090',
                marginTop: 15,
              }}>
              What is Your Gender
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 40,
                justifyContent: 'flex-end',
                borderBottomWidth: 1,
                borderColor: 'gray',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '75%',
                  marginVertical: 10,
                }}>
                <Text style={{ color: 'black', fontSize: 13 }}>Male</Text>
                <RadioButton
                  color="#1e7bf6"
                  value="male"
                  status={Gender === 'male' ? 'checked' : 'unchecked'}
                  onPress={() => setGender('male')}
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13 }}>Female</Text>
                <RadioButton
                  color="#1e7bf6"
                  value="female"
                  status={Gender === 'female' ? 'checked' : 'unchecked'}
                  onPress={() => setGender('female')}
                />
              </View>
            </View>

            <TextInput
              placeholder="Enter Email"
              lable="Email"
              onChangeText={setEmail}
              type="email"
              value={email}
              keyboardType="email-address"
              style={styles.input}
            />

            <TextInput
              placeholder="Input Password"
              lable="Password"
              onChangeText={setPassword}
              iconName="lock"
              value={password}
              type="password"
              secureTextEntry={true}
              style={styles.input}
            />

            <TextInput
              placeholder="Enter Confirm Password"
              lable="Confirm Password"
              onChangeText={setPassword2}
              iconName="lock"
              value={password2}
              secureTextEntry={true}
              style={styles.input}
            />

            <View>
              <Text style={{ marginTop: 5, fontWeight: 'bold' }}>
                Enter Your Height
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  placeholder="Feets"
                  lable="Enter Your Height"
                  onChangeText={setFeet}
                  value={feet}
                  width="50%"
                  keyboardType="numeric"
                  style={styles.inputHalf}
                />
                <TextInput
                  placeholder="Inches"
                  lable="Inches"
                  onChangeText={setInches}
                  iconName="human-male-height"
                  value={inches}
                  width="50%"
                  keyboardType="numeric"
                  style={styles.inputHalf}
                />
              </View>
            </View>

            <TextInput
              placeholder="Enter Your Weight in KG"
              lable="What is your Current Weight in KG"
              onChangeText={setCurrentWeight}
              value={currentWeight}
              keyboardType="numeric"
              style={styles.input}
            />

            <TextInput
              placeholder="Enter Your Goal Weight in KG"
              onChangeText={setGoalWeight}
              value={goalWeight}
              keyboardType="numeric"
              style={styles.input}
            />

            <TextInput
              placeholder="Enter Your Age in Years"
              lable="What is your Age in Years"
              onChangeText={setAge}
              value={age}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <TouchableOpacity onPress={() => signup()} style={styles.btn}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontFamily: 'Jameel Noori Nastaleeq',
              }}>
              {' '}
              Register{' '}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '80%',
              margin: 30,
            }}>
            <Text style={styles.btnBelow}>Already Have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.btnBelow}> Login </Text>
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
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
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
  inputHalf: {
    borderWidth: 1,
    borderColor: '#00000060',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '45%',
    borderRadius: 8,
    marginRight: 15,
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
    fontWeight: 'bold',
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

export default SignUp;
