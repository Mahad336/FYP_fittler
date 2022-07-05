import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import userImg from '../../../images/user_icon.png';
import database from '@react-native-firebase/database';

class Message extends React.Component {
  state = {
    chatUser: this.props.route.params.chatUser,
    crrUser: this.props.route.params.crrUser,
    chats: [],
    message: '',
  };

  componentDidMount() {
    this.getMessages();
  }

  getMessages = () => {
    database()
      .ref('/')
      .child(`recommendations/${this.state.chatUser.uid}`)
      .on('child_added', m => {
        this.state.chats.push(m.val());
        this.setState({
          chats: this.state.chats,
        });
      });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={25}
            color="white"
            onPress={() => this.props.navigation.goBack()}
          />

          <Image style={styles.usrImg} source={userImg} />

          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.headerTxt}>
            Expert ({this.state.chatUser.name})
          </Text>
        </View>

        <ScrollView>
          {this.state.chats != []
            ? this.state.chats.map((v, k) => {
                return (
                  <View style={styles.inMsg} key={k}>
                    <Text style={styles.inTxt}>{v.message}</Text>
                  </View>
                );
              })
            : null}
        </ScrollView>
      </View>
    );
  }
}
export default Message;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E7BF6',
    height: 60,
    paddingLeft: 15,
    elevation: 8,
    marginBottom: 10,
  },
  usrImg: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 80,
    marginLeft: 10,
    tintColor: 'gray',
  },
  headerTxt: {
    color: '#fff',
    fontWeight: 'bold',
    width: '80%',
    fontSize: 17,
    marginLeft: 20,
  },
  inMsg: {
    backgroundColor: '#1E7BF6',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: '70%',
  },
  inTxt: {
    color: 'white',
  },
  outMsg: {
    backgroundColor: '#1E7BF6',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: '70%',
    alignSelf: 'flex-end',
  },
  outTxt: {
    color: 'white',
  },
  msgBox: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#d0d0d0',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#1E7BF6',
  },
  inputMsg: {
    flex: 1,
    marginRight: 15,
  },
});
