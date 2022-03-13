import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';
import {Dropdown} from '../../common';
import {useForm} from 'react-hook-form';

const Signup = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const [fullName, setFullName] = useState('');
  const [IdCard, setIdCard] = useState('');
  const [number, setNumber] = useState('');

  const gender = [
    {name: 'Select', id: null},
    {name: 'Male', id: 1},
    {name: 'Female', id: 2},
  ];

  const {control, handleSubmit, formState} = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const {errors} = formState;

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  // const dispatch = useDispatch();

  const signup = val => {
    if (
      fullName?.length == 0 ||
      data.email?.length == 0 ||
      data.password?.length == 0 ||
      data.confirm_password?.length == 0
    ) {
      Alert.alert('Wrong Input!', 'All field must be filled', [{text: 'Okay'}]);
      return;
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#aa833d" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 10,
              },
            ]}>
            Full Name
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Full Name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={e => setFullName(e)}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 10,
              },
            ]}>
            Gender
          </Text>
          <View style={styles.action}>
            <Dropdown
              control={control}
              name="gender"
              error={!!errors?.activity_id}
              message={errors?.activity_id?.message}
              containerStyles={styles.action}
              items={gender}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 30,
              },
            ]}>
            I'd Card
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="ID Card"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={e => setFullName(e)}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Mobile No.
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your number"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={e => setFullName(e)}
              keyboardType="numeric"
              maxLength={11}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our{' '}
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={handleSubmit(signup)}>
              <LinearGradient
                colors={['#aa833d', '#aa833d']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#000',
                    },
                  ]}>
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: '#aa833d',
                  borderWidth: 2,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#aa833d',
                  },
                ]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Signup;
