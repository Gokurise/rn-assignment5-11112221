import { View, Text ,Image, SafeAreaView} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Components/HomeScreen';
import SettingsScreen from './Components/SettingsScreen';
import StatisticsScreen from './Components/StatisticsScreen';
import CardsScreen from './Components/CardsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen name="Home" component={HomeScreen}
      options={{
        tabBarIcon: () => <Image source={require("./assets/home.png")}/>
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} 
       options={{
        tabBarIcon: () => <Image source={require("./assets/settings.png")}/>
      }}/>
      <Tab.Screen name="Statistics" component={StatisticsScreen} 
       options={{
        tabBarIcon: () => <Image source={require("./assets/statictics.png")}/>
      }}/>
      <Tab.Screen name="CardsScreen" component={CardsScreen} 
       options={{
        tabBarIcon: () => <Image source={require("./assets/myCards.png")}/>
      }}/>
    </Tab.Navigator>
    </NavigationContainer>
  
  )
}

export default App
