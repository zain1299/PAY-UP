import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, SignInScreen, Signup} from '../pages';

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
        {/* <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Signup" component={Signup} /> */}
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppView;
