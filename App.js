import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider,DefaultTheme} from "react-native-paper";
import Home from "./screens/home";
import Details from "./screens/details";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppBar from "./components/appBar";

export default function App() {
    const Stack=createStackNavigator()

  return (
      <Provider theme={DefaultTheme}>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Heroes" screenOptions={{
                  header:(props)=><AppBar {...props}/>
              }}>
                  <Stack.Screen name="Heroes" component={Home} />
                  <Stack.Screen name="Details" component={Details} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
