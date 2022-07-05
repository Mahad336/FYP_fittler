import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ActivityCard = ({
  ActivityIcon,
  txt,
  icon,
  img,
  duration,
  type,
  description,
  nav,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate('Description', {
          im: img,
          des: description,
          dur: duration,
          tx: txt,
          type: type,
        });
      }}
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginVertical: 8,
        padding: 15,
        backgroundColor: '#ffffff',
        elevation: 4,
        borderRadius: 10,
      }}>
      <Image
        source={ActivityIcon}
        style={{
          width: '18%',
          height: 70,
          resizeMode: 'contain',
          tintColor: '#1e7bf6',
        }}
      />

      <Text
        style={{
          fontSize: 14,
          width: '60%',
          fontWeight: 'bold',
          color: '#000',
          marginLeft: 19,
        }}>
        {txt}
      </Text>

      <Icon
        name={icon}
        size={25}
        color="#1e7bf6"
        style={{ position: 'absolute', right: 10 }}
      />
    </TouchableOpacity>
  );
};

export default ActivityCard;
