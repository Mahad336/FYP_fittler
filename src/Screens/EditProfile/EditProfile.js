import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { EditProfileCircle } from '../../Svgs/Profile/ProfileVectors';
import Button from '../../components/Button/button';
import styles from './style';
import ImagePicker from 'react-native-image-crop-picker';
import { CrossIcon } from '../../components/Svgs/Icons';
import PickerButton from '../../components/Button/pickerButton';
import storage from '@react-native-firebase/storage';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import { profileUpdateRequest } from '../../redux/action';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

const EditProfile = ({ route }) => {
  const userData = useSelector(state => state.profileReducer.user);
  const [text, setText] = useState('Edit Profile');
  const [Gender, setGender] = React.useState(userData.gender);
  const [name, setName] = useState(userData.name);
  const [role, setRole] = useState(userData.role);
  const [email, setEmail] = useState(userData.email);
  const [feet, setFeet] = useState(userData.feet);
  const [inches, setInches] = useState(userData.inches);
  const [currentWeight, setCurrentWeight] = useState(userData.currentWeight);
  const [goalWeight, setGoalWeight] = useState(userData.goalWeight);
  const [age, setAge] = useState(userData.age);
  const [image, setImage] = useState('');
  const [visible, setVisible] = useState(false);
  const [ImageURL, setImageURL] = useState(userData.img ? userData.img : '');

  const takePhotoFromCamera = () => {
    setVisible(false);
    ImagePicker.openCamera({
      width: 96,
      height: 96,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      const storageRef = storage().ref().child(`/userprofile/${Date.now()}`);

      const uploadTask = storageRef.putFile(String(image.path));

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress == 100) alert('image uploaded');
        },
        error => {
          // Handle unsuccessful uploads
          alert('error uploading image');
        },
        () => {
          storageRef.getDownloadURL().then(downloadURL => {
            setImageURL(downloadURL);
          });
        },
      );
    });
  };
  const takePhotoFromGallery = () => {
    setVisible(false);
    ImagePicker.openPicker({
      width: 96,
      height: 96,
      cropping: true,
    }).then(image => {
      setImage(image.path);

      const storageRef = storage().ref().child(`/userprofile/${Date.now()}`);
      const uploadTask = storageRef.putFile(String(image.path));
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress == 100) alert('image uploaded');
        },
        error => {
          // Handle unsuccessful uploads
          alert('error uploading image');
        },
        () => {
          storageRef.getDownloadURL().then(downloadURL => {
            setImageURL(downloadURL);
          });
        },
      );
    });
  };
  const dispatch = useDispatch();
  const updateData = () => {
    if (ImageURL === '') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please Select an Image',
        visibilityTime: 3000,
      });
    } else if (
      name == '' ||
      email == '' ||
      role == '' ||
      feet == '' ||
      inches == '' ||
      currentWeight == '' ||
      goalWeight == '' ||
      age == ''
    ) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill all fields',
        visibilityTime: 3000,
      });
    } else {
      dispatch(
        profileUpdateRequest({
          postData: {
            name: name,
            email: email,
            role: role,
            gender: Gender,
            age: age,
            feet: feet,
            inches: inches,
            currentWeight: currentWeight,
            goalWeight: goalWeight,
            img: ImageURL,
            uid: userData.uid,
          },
        }),
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          {ImageURL === '' ? (
            <View
              style={{
                overflow: 'hidden',
                width: 100,
                height: 100,
                borderRadius: 100,
              }}>
              <EditProfileCircle style={styles.circle} />
            </View>
          ) : (
            <>
              <View
                style={{
                  overflow: 'hidden',
                  borderRadius: 100,
                  width: 100,
                  height: 100,
                }}>
                <Image source={{ uri: ImageURL }} style={styles.circle} />
              </View>
            </>
          )}
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={styles.addLogo}>{text}</Text>
          </TouchableOpacity>
        </View>

        {/* input fields form edit data */}
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Enter Your Name: </Text>
            <TextInput
              placeholder="Enter Your Name: "
              onChangeText={setName}
              value={name}
              keyboardType="default"
              style={styles.input}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Email: </Text>
            <TextInput
              placeholder="Email: "
              onChangeText={setEmail}
              value={email}
              keyboardType="default"
              style={styles.input}
            />
          </View>
          <View style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
            <Text
              style={{
                textAlign: 'left',
                // marginLeft: 0,
                fontWeight: 'bold',
                color: '#000',
                marginBottom: 5,
              }}>
              Gender
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 40,
                justifyContent: 'flex-end',
                // width: '90%',
                borderBottomWidth: 1,
                borderColor: 'gray',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 30,
                }}>
                <Text
                  style={{ color: 'black', fontSize: 13, fontWeight: 'bold' }}>
                  Male
                </Text>
                <RadioButton
                  color="#007fcb"
                  value="male"
                  status={Gender === 'male' ? 'checked' : 'unchecked'}
                  onPress={() => setGender('male')}
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{ color: 'black', fontSize: 13, fontWeight: 'bold' }}>
                  Female
                </Text>
                <RadioButton
                  color="#007fcb"
                  value="female"
                  status={Gender === 'female' ? 'checked' : 'unchecked'}
                  onPress={() => setGender('female')}
                />
              </View>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>
              Enter Your Age in Years:{' '}
            </Text>
            <TextInput
              placeholder="Enter Your Age: "
              onChangeText={setAge}
              value={age}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <Text style={{ fontWeight: 'bold' }}>Enter Your Heights: </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{ width: '45%', marginRight: '5%' }}>
              <TextInput
                placeholder="Enter Feets: "
                onChangeText={setFeet}
                value={feet}
                keyboardType="numeric"
                style={styles.input}
              />
            </View>

            <View style={{ width: '45%' }}>
              <TextInput
                placeholder="Enter Inches: "
                onChangeText={setInches}
                value={inches}
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Enter Your Weight: </Text>
            <TextInput
              placeholder="Enter Current Weight                                         KG: "
              onChangeText={setCurrentWeight}
              value={currentWeight}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Enter Your Goal Weight: </Text>
            <TextInput
              placeholder="Enter Goal Weight                                              88KG: "
              onChangeText={setGoalWeight}
              value={goalWeight}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <View style={{ marginVertical: 20 }}>
            <Button
              text={'Update Detail'}
              color={'#fff'}
              fontSize={15}
              fontWeight="bold"
              height={50}
              width={'80%'}
              marginBottom={10}
              backgroundColor={'#1e7bf6'}
              onPress={updateData}
            />
          </View>
        </View>

        <Modal isVisible={visible}>
          <View style={styles.ModalView}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.modalIcon}>
              <CrossIcon style={styles.modalIcon} />
            </TouchableOpacity>

            <Text style={{ color: '#08101F' }}>
              {' '}
              Click your desired Button{' '}
            </Text>
            <View style={styles.ModalBtnView}>
              <PickerButton
                text={'Open camera'}
                color={'#08101F'}
                fontSize={15}
                height={45}
                width={'40%'}
                marginTop={50}
                backgroundColor="#fff"
                borderWidth={1}
                borderColor="#9BA2AE"
                marginBottom={10}
                onPress={takePhotoFromCamera}
              />

              <PickerButton
                text={'Open Gallery'}
                color={'#08101F'}
                fontSize={15}
                height={45}
                width={'40%'}
                marginTop={50}
                backgroundColor="#fff"
                borderWidth={1}
                borderColor="#9BA2AE"
                marginBottom={10}
                onPress={takePhotoFromGallery}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
