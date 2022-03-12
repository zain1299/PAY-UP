// import React from 'react';
// import {Text} from 'react-native';
// import {View} from 'react-native-animatable';
// import style from './style';

// const Home = () => {
//   return (
//     <View style={style.mainContainer}>
//       <View style={style.Heading}>
//         <Text style={style.headingText}>Home</Text>
//       </View>
//     </View>
//   );
// };

// export default Home;

/* eslint-disable handle-callback-err */
/* eslint-disable no-alert */
import React, {useState} from 'react';
import {
  Text,
  View,
  Platform,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import {Button} from '../../common';
import {style} from './style';
import {widthPercentageToDP as wp} from 'utils/responsive';
import {launchCamera} from 'react-native-image-picker';
import {useForm} from 'react-hook-form';

const Home = ({route, navigation}) => {
  const [shopImage, setShopImage] = useState(null);
  const [productImage, setProductImage] = useState(null);
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
    if (shopImage.base64 && productImage.base64) {
      setLoading(false);
    }
  };

  return (
    <View style={style.root}>
      <View style={style.container}>
        <View>
          <Text style={style.imageHeading}>ID Card Image</Text>
          <Button
            label="Scan ID Card "
            onPress={() => captureImage(setShopImage)}
            containerStyles={style.itemContainer}
          />
          <Button
            label="Launch Camera for  Image"
            onPress={() => captureImage(setProductImage)}
            containerStyles={style.itemContainer}
          />
          {shopImage && (
            <View style={style.itemContainer}>
              <Text style={style.imageHeading}>ID Card Image</Text>
              <Text style={style.imageName}>{shopImage.fileName}</Text>
            </View>
          )}
          {productImage && (
            <View style={style.itemContainer}>
              <Text style={style.imageHeading}> Image</Text>
              <Text style={style.imageName}>{productImage.fileName}</Text>
            </View>
          )}
        </View>
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
          active={shopImage && productImage}
        />
        {/* <Button
          label="Next"
          active={shopImage && productImage}
          onPress={handleSignOut}
        /> */}
      </View>
    </View>
  );
};

export default Home;
