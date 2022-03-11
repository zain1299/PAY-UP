import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen, Signup} from '../pages';

const Stack = createNativeStackNavigator();

function AppView() {
  const options = {
    header: () => {
      return null;
    },
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppView;
