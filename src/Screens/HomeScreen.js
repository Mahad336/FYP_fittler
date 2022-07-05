import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text>HomeScreen </Text>
      <Button
        title="Logout"
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}
      />
      <Button
        title="Goto"
        onPress={() => {
          navigation.navigate('EditProfile');
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
