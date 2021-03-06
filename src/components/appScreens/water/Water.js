import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CircularSlider from 'rn-circular-slider';
import Glass from '../../../images/WaterGlass.png';
import AppPreLoader from '../AppPreLoader';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import waterData from './WaterData';

const Water = () => {
  const [waterValue, setWaterValue] = useState(0);
  const [data, setdata] = useState(waterData);
  const [crrTime, setCrrTime] = useState([]);
  const [nextTime, setNextTime] = useState('');
  const [crrHours, setCrrHours] = useState(new Date().getHours());
  const [crrDate, setCrrDate] = useState(new Date().getDate());
  const [flag, setFlag] = useState(true);

  function getNextTime() {
    for (var i = 0; i < data.schedule.length - 1; i++) {
      if (data.schedule[i] == crrHours) {
        return data.schedule[i] + 1;
      } else if (data.schedule[0] > crrHours) {
        return data.schedule[0];
      } else if (data.schedule[data.schedule.length - 2] < crrHours) {
        return data.schedule[0];
      }
    }
  }

  useEffect(() => {
    getData();
    setNextTime(getNextTime());
    getDrinkedWater();
    getDate();
  }, []);

  const TodayRecord = () => {
    const timeFormat = (hrs, min) => {
      var mints;
      if (min.toString().length == 1) {
        mints = '0' + min;
      } else if (min.toString().length == 2) {
        mints = min;
      }
      var suffix = hrs >= 12 ? 'PM' : 'AM';
      var hours = ((hrs + 11) % 12) + 1;
      return hours + ':' + mints + ' ' + suffix;
    };

    return (
      <View style={{ backgroundColor: '#F5FCFF', flex: 1, paddingTop: 10 }}>
        <ScrollView>
          <View style={styles.card}>
            <Icon name="time-outline" size={25} color="#fff" />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
                {timeFormat(nextTime, 0)}
              </Text>
              <Text style={{ color: '#fff' }}>Next Time</Text>
            </View>
            <Text style={{ position: 'absolute', right: 20, color: '#fff' }}>
              200 ml
            </Text>
          </View>

          {crrTime == []
            ? null
            : crrTime
                .slice(0)
                .reverse()
                .map((val, key) => {
                  return (
                    <View key={key} style={styles.card}>
                      <Icon name="checkbox" size={25} color="#fff" />
                      <View style={{ marginLeft: 20, marginVertical: 10 }}>
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 16,
                          }}>
                          {timeFormat(val.hrs, val.mns)}
                        </Text>
                      </View>
                      <Text
                        style={{
                          position: 'absolute',
                          right: 20,
                          color: '#fff',
                        }}>
                        200 ml
                      </Text>
                    </View>
                  );
                })}
        </ScrollView>
      </View>
    );
  };

  const updateValue = () => {
    var value = waterValue + 200;
    var crrHrs = new Date().getHours();
    var crrMins = new Date().getMinutes();
    let obj = { hrs: crrHrs, mns: crrMins };
    crrTime.push(obj);
    setWaterValue(value);
    storeData(crrTime);
    storeDrinkedWater(value);
    storeDate();
  };

  const storeDate = async () => {
    try {
      const jsonValue = JSON.stringify(crrDate);
      await AsyncStorage.setItem('date', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getDate = async () => {
    try {
      const val = JSON.parse(await AsyncStorage.getItem('date'));
      if (val != crrDate) {
        setWaterValue(0);
        storeDrinkedWater(0);
        setCrrTime([]);
        storeData([]);
      }
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
    setFlag(false);
  };

  const storeDrinkedWater = async v => {
    try {
      const jsonValue = JSON.stringify(v);
      await AsyncStorage.setItem('DrinkedWater', jsonValue);
    } catch (e) {
      // saving error
    }
    getDrinkedWater();
  };

  const getDrinkedWater = async () => {
    try {
      const val = JSON.parse(await AsyncStorage.getItem('DrinkedWater'));
      val !== null ? setWaterValue(parseInt(val)) : setWaterValue(0);
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async val => {
    try {
      await AsyncStorage.setItem('todayDrink', JSON.stringify(val));
    } catch (error) {
      alert('Something Wrong Happened');
    }
    getData();
  };

  const getData = async () => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('todayDrink'));
      value !== null ? setCrrTime(value) : setCrrTime([]);
      if (value !== null) {
      }
    } catch (e) {}
  };

  const Slider = () => {
    return (
      <CircularSlider
        // step={200}
        min={0}
        max={data.totalQuantity}
        value={
          waterValue <= data.totalQuantity ? waterValue : data.totalQuantity
        }
        contentContainerStyle={styles.contentContainerStyle}
        strokeWidth={12}
        buttonBorderColor="#1E7BF6"
        buttonFillColor="#fff"
        buttonStrokeWidth={20}
        openingRadian={Math.PI / 4}
        buttonRadius={0}
        linearGradient={[
          { stop: '0%', color: '#1E7BF6' },
          { stop: '100%', color: '#1E7BF6' },
        ]}>
        <Text style={styles.value}>
          {waterValue}/{data.totalQuantity}ml
        </Text>
        <Text style={styles.txt}>Daily Drink Target</Text>
      </CircularSlider>
    );
  };

  if (flag) {
    return <AppPreLoader />;
  } else {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <View style={{ marginTop: 20 }}>
            <Slider />
          </View>

          <TouchableOpacity style={styles.imgBG} onPress={() => updateValue()}>
            <ImageBackground
              style={styles.glass}
              resizeMode="contain"
              source={Glass}>
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>
                +
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>
            Drink a Glass
          </Text>
        </View>

        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#1E7BF6',
            inactiveTintColor: 'gray',
            indicatorStyle: {
              backgroundColor: '#1E7BF6',
            },
            labelStyle: {
              fontWeight: 'bold',
              textTransform: 'capitalize',
            },
          }}
          style={{ padding: 10 }}>
          <Tab.Screen
            name="TodayRecord"
            component={TodayRecord}
            initialParams={crrTime}
            options={{ title: "Today's Records" }}
          />
          <Tab.Screen
            name="DailySchedule"
            component={DailySchedule}
            initialParams={data}
            options={{ title: 'Daily Schedule' }}
          />
        </Tab.Navigator>
      </View>
    );
  }
};

export default Water;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#fff',
    // height:'100%',
    // width:'100%'
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
    // fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
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
  },
  card: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 6,
    elevation: 2,
    backgroundColor: '#1E7BF6',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
});

// Daily Schedule
const DailySchedule = ({ route }) => {
  const [data, setData] = useState(route.params);

  // format time 24 to 12 hrs
  const timeFormat = (hrs, min) => {
    var mints;
    if (min.toString().length == 1) {
      mints = '0' + min;
    } else if (min.toString().length == 2) {
      mints = min;
    }
    var suffix = hrs >= 12 ? 'PM' : 'AM';
    var hours = ((hrs + 11) % 12) + 1;
    return hours + ':' + mints + ' ' + suffix;
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 10,
        elevation: 5,
      }}>
      <ScrollView>
        {data.schedule.map((val, key) => {
          return (
            <View key={key} style={styles.card}>
              <Icon name="time-outline" size={25} color="#fff" />

              <Text
                style={{
                  marginLeft: 20,
                  marginVertical: 10,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                {timeFormat(val, 0)}{' '}
              </Text>

              <Text style={{ position: 'absolute', right: 20, color: '#fff' }}>
                200 ml
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
