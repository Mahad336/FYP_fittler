import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import { BmiContext } from '../../../global/BmiContext';

const BMI = () => {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState();

  const [, setBMI] = useContext(BmiContext);

  const cal = () => {
    if (feet == '' || inches == '' || weight == '') {
      alert('Invalid Input');
    } else {
      var ft = parseInt(feet) * 0.3048;
      var ich = parseInt(inches) * 0.0254;
      var mt = ft + ich;
      var mtSq = mt * mt;
      var BMI = parseInt(weight) / mtSq;
      setBmi(BMI.toFixed(1));
      setBMI(BMI.toFixed(1));
    }
  };

  const [feetStyle, setFeetStyle] = useState({
    lable: {
      color: 'gray',
      fontSize: 14,
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });
  const [inchesStyle, setInchesStyle] = useState({
    lable: {
      color: 'gray',
      fontSize: 14,
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });
  const [weightStyle, setWeightStyle] = useState({
    lable: {
      color: 'gray',
      fontSize: 14,
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center', paddingTop: 30 }}>
        <Text style={{ color: '#1E7BF6', fontWeight: 'bold', fontSize: 18 }}>
          Enter Your Height
        </Text>
        <View style={styles.form}>
          <View style={{ paddingVertical: 15 }}>
            <TextInput
              placeholder="Enter Feet"
              lable="Feet"
              onChangeText={setFeet}
              value={feet}
              iconName="email"
              style={styles.input}
              keyboardType="number-pad"
            />
            <TextInput
              placeholder="Enter Inches"
              lable="Inches"
              onChangeText={setInches}
              value={inches}
              iconName="email"
              style={styles.input}
              keyboardType="number-pad"
            />
          </View>

          <Text
            style={{
              color: '#1E7BF6',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
            }}>
            Enter Your Weight
          </Text>

          <TextInput
            placeholder="Enter Weight in KG's"
            lable="Inches"
            onChangeText={setWeight}
            value={weight}
            iconName="email"
            style={styles.input}
            keyboardType="number-pad"
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => cal()}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}> Calculate </Text>
        </TouchableOpacity>

        {isNaN(bmi) ? null : (
          <View style={styles.div}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#fff' }}>
              BMI: {bmi}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginTop: 24,
                color: '#fff',
              }}>
              {bmi <= 18.4
                ? 'Under Weight'
                : bmi >= 18.5 && bmi <= 24.9
                ? 'Healthy Weight'
                : bmi >= 25
                ? 'Over Weight'
                : null}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default BMI;

const styles = StyleSheet.create({
  form: {
    width: '90%',
  },
  HeigntContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },
  inputContainer: {
    height: 75,
    justifyContent: 'flex-end',
  },
  btn: {
    color: '#fff',
    backgroundColor: '#1E7BF6',
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    elevation: 5,
    marginTop: 20,
  },
  card: {
    height: 50,
    elevation: 4,
    backgroundColor: '#f0f0f0',
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    width: Dimensions.get('window').width,
    backgroundColor: '#1E7BF6',
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2,
    padding: 20,
    color: '#fff',
    height: 500,
    alignItems: 'center',
    paddingTop: 90,
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
});
