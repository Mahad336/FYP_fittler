import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const dimension = Dimensions.get('screen');
const Card = ({ onPress, image, cardText }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cardContainer}>
          <Image source={image} style={styles.image}></Image>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginVertical: 10,
              textAlign: 'center',
              width: '100%',
              paddingHorizontal: 20,
            }}>
            {cardText}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: dimension.width - 25,
    height: dimension.height / 3,
    borderWidth: 1,
    borderColor: '#00000020',
    borderRadius: 6,
    alignItems: 'flex-end',
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: '85%',
    resizeMode: 'cover',
  },
});

export default Card;
