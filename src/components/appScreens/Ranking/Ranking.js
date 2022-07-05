import { Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Ranking = () => {
  const [allUsers, setAllUsers] = useState([]);

  const getRanking = async () => {
    var date = new Date();
    var dateToday = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    try {
      const querySnap = await firestore()
        .collection('calories_burned')
        .orderBy('caloriesBurned', 'desc')
        .get();
      const allusers = querySnap.docs.map(docsnap => docsnap.data());

      setAllUsers(allusers);
    } catch (e) {
      console.log('message==>', e.message);
    }
  };
  const renderItem = ({ item, index }) => {
    return (
      <>
        <View
          style={{
            margin: 10,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: 10,
              height: 60,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'grey',
                  fontSize: 16,
                  paddingLeft: 4,
                  color: '#1E7BF6',
                }}>
                {index + 1}.
              </Text>
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 16,
                  paddingLeft: 10,
                  color: '#1E7BF6',
                }}>
                {item.name}
              </Text>
            </View>

            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                color: 'black',
                fontSize: 18,
                color: '#1E7BF6',
              }}>
              {item.caloriesBurned}
            </Text>
          </View>
        </View>
      </>
    );
  };
  useEffect(() => {
    getRanking();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList data={allUsers} renderItem={renderItem} />
    </View>
  );
};

export default Ranking;
