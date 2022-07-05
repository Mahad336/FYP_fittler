import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import LogoutButtomSheet from '../../components/LogoutButtomSheet/LogoutButtomSheet';
import HomeCard from '../HomeCard/Card';

// images
import workout from '../../images/workout.jpg';
import ranking from '../../images/ranking.jpg';
import foot from '../../images/steps.jpg';
import calories from '../../images/calories.jpg';
import diet from '../../images/diet.jpg';
import weekly from '../../images/weekly.jpg';
import recommended from '../../images/recommended.jpg';
import water from '../../images/water.jpg';
import bmi from '../../images/bmi.jpg';
import chat from '../../images/chats.jpg';
import mental from '../../images/mental.jpg';

import footSteps from '../../images/footStep.png';
import diets from '../../images/diets.png';
import workouts from '../../images/workouts.png';
import mentalHealth from '../../images/mentalHealth.png';
import waterImage from '../../images/water.png';
import bmi2 from '../../images/bmi.png';
import logout from '../../images/logout.png';
import userIcon from '../../images/user_icon.png';

export default function Main({ navigation }) {
  const Drawer = () => {
    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : 200,
      duration: 250,
      useNativeDriver: true,
    }).start();
    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -30 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
    setShowMenu(!showMenu);
  };

  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: 'flex-start',
          backgroundColor: '#1E7BF6',
          paddingTop: 20,
          paddingLeft: 10,
        }}>
        <View>
          <Image
            source={require('../../assets/images/logoT.png')}
            style={{ width: 70, height: 70, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ flexGrow: 1, marginTop: 30 }}>
          {TabBtns(
            currentTab,
            setCurrentTab,
            'Workouts',
            workouts,
            navigation,
            Drawer,
          )}
          {TabBtns(
            currentTab,
            setCurrentTab,
            'Diets',
            diets,
            navigation,
            Drawer,
          )}
          {TabBtns(
            currentTab,
            setCurrentTab,
            'MentalHealth',
            mentalHealth,
            navigation,
            Drawer,
          )}
          {TabBtns(
            currentTab,
            setCurrentTab,
            'Water',
            waterImage,
            navigation,
            Drawer,
          )}
          {TabBtns(currentTab, setCurrentTab, 'BMI', bmi2, navigation, Drawer)}
          {TabBtns(
            currentTab,
            setCurrentTab,
            'Footsteps Counter',
            footSteps,
            navigation,
            Drawer,
          )}
          {TabBtns(
            currentTab,
            setCurrentTab,
            'Profile',
            userIcon,
            navigation,
            Drawer,
          )}

          {/* {TabBtns(currentTab, setCurrentTab, "Smart Recommendations", chat, navigation, Drawer)} */}
        </View>
        <View style={{ marginBottom: 10 }}>
          {TabBtns(currentTab, setCurrentTab, 'LogOut', logout)}
        </View>
      </View>
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          // transformaing view
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}>
        <Animated.View
          style={{
            flex: 1,
            paddingTop: showMenu ? 15 : 0,
            alignItems: 'center',
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          {/************* Header ***********/}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#1E7BF6',
              height: 60,
              width: '100%',
            }}>
            {/*********** Menu Button *********/}
            <TouchableOpacity onPress={Drawer}>
              <Icon
                name={showMenu ? 'close' : 'menu'}
                color="white"
                size={30}
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                marginLeft: 10,
              }}>
              Home
            </Text>
          </View>

          {/* -----------------Home Screen Buttons----------------- */}

          <ScrollView>
            <View
              style={{
                paddingVertical: 20,
                width: '100%',
                backgroundColor: '#1e7bf7',
              }}>
              <Text style={{ fontSize: 16, marginLeft: 15, color: '#ffffff' }}>
                Welcome
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  marginLeft: 15,
                  letterSpacing: 0.5,
                  color: '#fff',
                }}>
                Take the Next Step to
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  marginLeft: 15,
                  color: '#fff',
                  marginVertical: 5,
                  fontWeight: 'bold',
                }}>
                FITNESS
              </Text>
            </View>
            <View
              style={{
                marginVertical: 20,
                marginLeft: 5,
                backgroundColor: '#ffffff70',
                padding: 10,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                paddingLeft: 0,
              }}>
              <HomeCard
                onPress={() => {
                  if (showMenu) {
                    Drawer();
                  }
                  navigation.navigate('Workouts');
                }}
                image={workout}
                cardText="Workouts for Home"
              />
              <HomeCard
                onPress={() => {
                  if (showMenu) {
                    Drawer();
                  }
                  navigation.navigate('Diets');
                }}
                image={diet}
                cardText="Receipes for Diet"
              />

              <HomeCard
                onPress={() => {
                  if (showMenu) {
                    Drawer();
                  }
                  navigation.navigate('MentalHealth');
                }}
                image={mental}
                cardText="Mental Health"
              />

              <HomeCard
                onPress={() => {
                  if (showMenu) {
                    Drawer();
                  }
                  navigation.navigate('CaloriesCount');
                }}
                image={calories}
                cardText="Calories Count"
              />

              <HomeCard
                onPress={() => {
                  if (showMenu) {
                    Drawer();
                  }
                  navigation.navigate('Footsteps Counter');
                }}
                image={foot}
                cardText="Footsteps Tracking"
              />

              <HomeCard
                onPress={() => {
                  if (showMenu) {
                    Drawer();
                  }
                  navigation.navigate('Ranking');
                }}
                image={ranking}
                cardText="Global Ranking"
              />

              <HomeCard
                onPress={() => {
                  if (showMenu) {
                    Drawer();
                  }
                  navigation.navigate('DietPlan');
                }}
                image={weekly}
                cardText="Weekly Diet Chart"
              />

              <HomeCard
                onPress={() => {
                  if (showMenu) {
                    Drawer();
                  }
                  navigation.navigate('RecommendedDiets');
                }}
                image={recommended}
                cardText="Recommended Diet"
              />
              <HomeCard
                onPress={() => {
                  if (showMenu) {
                    Drawer();
                  }
                  navigation.navigate('Water');
                }}
                image={water}
                cardText="Water Tracker"
              />

              <HomeCard
                onPress={() => {
                  if (showMenu) {
                    Drawer();
                  }
                  navigation.navigate('BMI');
                }}
                image={bmi}
                cardText="Find Your BMI"
              />

              <HomeCard
                onPress={() => {
                  if (showMenu) {
                    Drawer();
                  }
                  navigation.navigate('Chats');
                }}
                image={chat}
                cardText="Bot"
              />
            </View>
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E7BF6',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 90,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    paddingHorizontal: 9,
    elevation: 3,
  },
  cardImg: {
    resizeMode: 'contain',
    width: '12%',
    height: '100%',
    tintColor: '#1E7BF6',
  },
  cardTxt: {
    fontSize: 14,
    width: '60%',
    fontWeight: 'bold',
    color: 'rgb(80, 80, 80)',
  },
});

// Navigation buttons...
const TabBtns = (
  currentTab,
  setCurrentTab,
  title,
  image,
  navigation,
  Drawer,
) => {
  const refRBSheet = useRef();
  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          if (title == 'LogOut') {
            rbsheetOpen();
          } else {
            Drawer();
            navigation.navigate(title);
          }
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 5,
            backgroundColor: currentTab == title ? '#469433' : 'transparent',
            paddingLeft: 5,
            // paddingRight: 10,
            marginTop: 10,
          }}>
          <Image
            source={image}
            style={{
              width: 30,
              height: title == 'Footsteps Counter' ? 35 : 30,
              tintColor: 'white',
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              color: '#fff',
              paddingLeft: 5,
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        keyboardAvoidingViewEnabled={true}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: { backgroundColor: 'rgba(0,0,0,0.4)' },
          draggableIcon: { backgroundColor: '#D7DADF' },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#FFFFFF',
            height: 273,
          },
        }}>
        <LogoutButtomSheet
          onPress={() => refRBSheet.current.close()}
          cancel={() => refRBSheet.current.close()}
        />
      </RBSheet>
    </>
  );
};
