import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { data } from '../../../utilis/mentalHealth';

const MentalHealth = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 10 }}>
      <ScrollView>
        {data.map(({ heading, points }, index) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
                fontWeight: 'bold',
                color: '#1E7BF6',
              }}>
              {heading}
            </Text>

            {points?.map(({ point, subPoint }, index) => (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginLeft: 10,
                    marginRight: 20,
                    marginBottom: 5,
                  }}
                  key={index + 10}>
                  <Text
                    style={{ fontSize: 10, marginTop: 3, color: '#1E7BF6' }}>
                    {'\u2B24'}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'justify',
                      marginLeft: 5,
                      fontSize: 16,
                    }}>
                    {point}
                  </Text>
                </View>
                {subPoint?.map((value, index) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      marginLeft: 30,
                      marginRight: 20,
                      marginVertical: 3,
                    }}
                    key={index + 20}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#1E7BF6',
                      }}>
                      {index + 1})
                    </Text>
                    <Text
                      style={{
                        textAlign: 'justify',
                        marginLeft: 5,
                        fontSize: 16,
                      }}>
                      {value}
                    </Text>
                  </View>
                ))}
              </>
            ))}
          </View>
        ))}

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            marginVertical: 10,
          }}>
          <View
            style={{
              width: '100%',
              padding: 30,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Meditation')}
              style={styles.btn}>
              <Text style={styles.btnTxt}>Meditation Techniques</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Quotes')}
              style={styles.btn}>
              <Text style={styles.btnTxt}>Quotes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MentalHealth;

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#1E7BF6',
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});
