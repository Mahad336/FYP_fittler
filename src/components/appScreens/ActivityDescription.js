import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const Description = props => {
  var data = props.route.params;

  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: '#F7F8F8',
        position: 'absolute',
        zIndex: 1,
        top: 70,
        left: 20,
        right: 20,
        bottom: 100,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 5,
      }}>
      <Image
        source={data.im}
        style={{
          width: '100%',
          height: 350,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />

      <Text
        style={{
          fontSize: 14,
          color: '#000',
          margin: 25,
          textAlign: 'justify',
        }}>
        {data.des}
      </Text>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Activity', {
            img: data.im,
            des: data.des,
            dur: data.dur,
            type: data.type,
            txt: data.tx,
          });
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#1E7BF6',
          width: '100%',
          height: 40,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Description;
