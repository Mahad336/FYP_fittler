import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import AppPreLoader from '../AppPreLoader';
import { useSelector, useDispatch } from 'react-redux';
import { addCalories, updatedCalories } from '../../../redux/action';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

const Water = ({ navigation }) => {
  const [crrDate, setCrrDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [calo, setCalo] = useState([]);
  const [flag, setFlag] = useState(true);
  const [totalcalories, setTotalCalories] = useState('');
  const [food, setFood] = useState('');
  const [serving, setServing] = useState('');
  const [calories, setCalories] = useState('');
  const [unit, setUnit] = useState('');

  const dispatch = useDispatch();

  const getCaloriesData = async () => {
    const { uid } = auth().currentUser;
    let date = new Date().toISOString().slice(0, 10);

    try {
      const res = await firestore()
        .collection('calories')
        .doc(uid + ':' + date)
        .get();

      const response = await firestore().collection('calories_data').get();

      const data = response._docs;
      let tempArray = [];
      data.forEach(item => {
        tempArray.push(item._data);
      });

      console.log('response', tempArray);

      setCalo(tempArray);
      const cal = res?._data?.cal;
      // setCalo(res?._data?.cal);
      dispatch(updatedCalories(cal));
    } catch (e) {
      console.log(e);
    }
  };

  const addCalorieToDB = async () => {
    if (!food || !serving || !calories || !unit) {
      Alert.alert('Please Provide all Values');
      return;
    }

    const totalCalories = `${calories} ${unit}`;
    const data = {
      Food: food,
      Serving: serving,
      Calories: calories,
      Unit: unit,
      total_Calories: totalCalories,
    };
    await firestore().collection('calories_data').add(data);
    setCalo(previous => [...previous, data]);
    setFood('');
    setServing('');
    setCalories('');
    setUnit('');
    setTotalCalories('');

    setModalVisible(false);
  };

  const allCalories = useSelector(state => state.testReducer.allCalories);

  useEffect(() => {
    setFlag(false);
    getCaloriesData();
  }, []);

  const check = async data => {
    console.log('eeeee', data);
    const res = await dispatch(
      addCalories({
        postData: {
          data,
        },
      }),
    );
    navigation.navigate('CaloriesCount');
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          let num = parseInt(item.Calories);
          check(num);
        }}
        key={item.food}
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'white',
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>
            {item.Food}
          </Text>
          <Text style={{ color: 'grey', fontSize: 11 }}>{item.Serving}</Text>
        </View>
        <Text style={{ fontWeight: 'bold', color: 'black', color: '#1E7BF6' }}>
          {item.total_Calories}
        </Text>
      </TouchableOpacity>
    );
  };

  if (flag) {
    return <AppPreLoader />;
  } else {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  width: '100%',
                  padding: 5,
                }}>
                <Text style={{ fontWeight: 'bold' }}>Enter Food Name: </Text>
                <TextInput
                  placeholder="Enter Food Name: "
                  onChangeText={setFood}
                  value={food}
                  style={styles.input}
                />
              </View>

              <View
                style={{
                  width: '100%',
                  padding: 5,
                }}>
                <Text style={{ fontWeight: 'bold' }}>Enter Serving: </Text>
                <TextInput
                  placeholder="Enter Serving: "
                  onChangeText={setServing}
                  value={serving}
                  style={styles.input}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  padding: 5,
                }}>
                <Text style={{ fontWeight: 'bold' }}>Enter Calories: </Text>
                <TextInput
                  placeholder="Enter Calories: "
                  onChangeText={setCalories}
                  value={calories}
                  style={styles.input}
                />
              </View>

              <View
                style={{
                  width: '100%',
                  padding: 5,
                }}>
                <Text style={{ fontWeight: 'bold' }}>Enter Unit: </Text>
                <TextInput
                  placeholder="Enter Unit: "
                  onChangeText={setUnit}
                  value={unit}
                  style={styles.input}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  width: '100%',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={addCalorieToDB}>
                  <Text style={styles.textStyle}>Add </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.red]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              alignItems: 'center',
              height: 100,
            }}>
            <Text style={{ color: '#000', fontWeight: 'bold' }}>
              Total Calories Gain Today:
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: '#1E7BF6' }}>
              {allCalories}
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Add Item</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#F5FCFF', flex: 1, paddingTop: 10 }}>
          {/* <FlatList data={CaloriesData} renderItem={renderItem} /> */}
          <FlatList data={calo} renderItem={renderItem} />
        </View>
      </View>
    );
  }
};

export default Water;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 15,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#1E7BF6',
  },
  txt: {
    fontSize: 15,
    color: '#1E7BF6',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00000060',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '97%',
    borderRadius: 8,
  },
  imgBG: {
    position: 'absolute',
    bottom: 20,
  },
  glass: {
    width: 60,
    resizeMode: 'contain',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  card: {
    width: '94%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 6,
    elevation: 2,
    backgroundColor: 'white',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  centeredView: {
    minHeight: 800,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '90%',
    height: '70%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '40%',
    marginBottom: 20,
  },
  buttonOpen: {
    backgroundColor: '#1E7BF6',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  red: {
    backgroundColor: 'gray',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
