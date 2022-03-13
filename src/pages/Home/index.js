import React, {useState} from 'react';
import {
  Text,
  View,
  Platform,
  PermissionsAndroid,
  ActivityIndicator,
  ScrollView,
  TextInput,
} from 'react-native';
import {Button} from '../../common';
import {style} from './style';
import {widthPercentageToDP as wp} from 'utils/responsive';
import {launchCamera} from 'react-native-image-picker';
import {useForm} from 'react-hook-form';

const Home = ({route, navigation}) => {
  const [idCardImage, setIdCardImage] = useState(null);
  const [parentIdCardImage, setParentIdCardImage] = useState(null);
  const [universityIdCardImage, SetUniversityIdCardImage] = useState(null);
  const [degree, setDegree] = useState('');

  const [isLoading, setLoading] = useState(false);

  const {handleSubmit, formState} = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else {
      return true;
    }
  };

  const captureImage = async type => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      saveToPhotos: true,
      includeBase64: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();

    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          alert('Camera cancelled ');
          return;
        } else if (response.errorCode === 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode === 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode === 'others') {
          alert(response.errorMessage);
          return;
        }
        type(response.assets[0]);
      });
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    if (
      idCardImage.base64 &&
      parentIdCardImage.base64 &&
      universityIdCardImage.base64 &&
      degree
    ) {
      setLoading(false);
    }
  };

  return (
    <View style={style.root}>
      <View style={style.Heading}>
        <Text style={style.headingText}>Stundent Verification</Text>
      </View>

      <View style={style.container}>
        <ScrollView>
          <View>
            <Text style={style.imageHeading}>Student's CNIC</Text>
            <Text>Please scan an image of your National Identity Card</Text>
            <Button
              label="Scan Student's CNIC"
              onPress={() => captureImage(setIdCardImage)}
              containerStyles={style.itemContainer}
            />
            {idCardImage && (
              <View style={style.itemContainer}>
                <Text style={style.imageName}>Image Taken Successfully</Text>
              </View>
            )}

            <Text style={style.imageHeading}>Parent's CNIC</Text>
            <Text>
              Please scan an image of your Parent's National Identity Card
            </Text>
            <Button
              label="Scan Parent's CNIC"
              onPress={() => captureImage(setParentIdCardImage)}
              containerStyles={style.itemContainer}
            />

            {parentIdCardImage && (
              <View>
                <Text style={style.imageName}>Image Taken Successfully</Text>
              </View>
            )}

            <Text style={style.imageHeading}>Student ID Card</Text>
            <Text>Please scan an image of your Student Identity Card</Text>
            <Button
              label="Scan Student ID Card"
              onPress={() => captureImage(SetUniversityIdCardImage)}
              containerStyles={style.itemContainer}
            />

            {universityIdCardImage && (
              <View>
                <Text style={style.imageName}>Image Taken Successfully</Text>
              </View>
            )}

            <Text style={style.imageHeading}>Previous Degree</Text>

            <View style={style.action}>
              <TextInput
                placeholder="Previous Degree"
                style={style.textInput}
                autoCapitalize="none"
                onChangeText={e => setDegree(e)}
              />
            </View>
          </View>

          <View style={style.button}>
            <Button
              label={!isLoading && 'Next'}
              primary={formState.isValid}
              icon={
                isLoading && (
                  <ActivityIndicator
                    style={{position: 'absolute', left: wp('36')}}
                  />
                )
              }
              // active={formState.isValid && !isLoading}
              onPress={handleSubmit(handleSignOut)}
              containerStyles={style.btn}
              active={idCardImage && parentIdCardImage}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
