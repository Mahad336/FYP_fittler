import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';

// component
import ActivityCard from './ActivityCard';
import Header from './Header';

import { data } from '../../utilis/workout';

const Works = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1e7bf6',
      }}>
      <Header title="Daily Home Workouts" nav={navigation.goBack} />

      <ImageBackground
        style={styles.background}
        source={require('../../images/home/home.jpg')}
        resizeMode="cover"
        imageStyle={{
          backgroundColor: 'black',
          opacity: 0.9,
        }}>
        <Text
          style={{
            color: 'white',
            position: 'absolute',
            bottom: 30,
            left: 20,
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Daily Workouts
        </Text>
        <Text
          style={{
            color: '#fff',
            position: 'absolute',
            bottom: 10,
            left: 20,
          }}>
          Do Workout Anywhere Anytime
        </Text>
      </ImageBackground>

      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
          }}>
          <View style={{ paddingHorizontal: 20, backgroundColor: '#1e7bf6' }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginVertical: 10,
                color: '#fff',
              }}>
              All Workouts
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff' }}>
                🏋️ {data.length} Workouts
              </Text>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff' }}>
                ⏱️ 25 min 14 sec
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{ backgroundColor: '#1e7bf6', padding: 10, paddingTop: 20 }}>
          {data?.map(val => {
            return (
              <ActivityCard
                key={val[0]}
                ActivityIcon={val[1]}
                txt={val[2]}
                icon={val[3]}
                img={val[4]}
                duration={val[5]}
                type={val[6]}
                description={val[7]}
                nav={navigation}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 200,
    marginBottom: 5,
  },
});

// navigation....
import Description from './ActivityDescription';
import Activity from './Activity';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Workouts = () => {
  return (
    <Stack.Navigator initialRouteName="Works">
      <Stack.Screen
        name="Works"
        component={Works}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Description"
        component={Description}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default Workouts;
