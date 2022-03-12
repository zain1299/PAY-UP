/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import style from './style';
import {Image, View} from 'react-native';
// import {S} from '../../common';

const Welcome = ({navigation}) => {
  return (
    <View style={style.container}>
      {/* <Texture /> */}
      <Image
        // source={require('../../assets/images/activeMedia.png')}
        style={style.logo}
        resizeMode="contain"
      />
      <Image
        // source={require('../../assets/images/national.png')}
        style={style.logo}
        resizeMode="contain"
      />
      {/* <Spinner /> */}
    </View>
  );
};
export default Welcome;
