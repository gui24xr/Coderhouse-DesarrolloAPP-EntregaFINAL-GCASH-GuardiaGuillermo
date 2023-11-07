import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/constants';
import { NavigationContainer } from '@react-navigation/native';
import  TabNavigator  from './TabNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScr,RegisterScr,HomeScr, AccountDataScr, TransferSelectScr, ProfileScr } from '../screens';
import { LoginBarElements } from '../components';


configOptionsScreen= {
  headerStyle: {
    backgroundColor: colors.headBarColor,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  
  headerTitle: ()=><LoginBarElements/>
}


const Stack= createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:true}}>
         <Stack.Screen   
          name='Home'  
          component={TabNavigator}  
          options={configOptionsScreen}
        />

      <Stack.Screen 
        name='Login' 
        component={LoginScr}  
        />
      
      <Stack.Screen 
        name='Register' 
        component={RegisterScr} 
      />
      
      <Stack.Screen 
      name='AccountDataScr' 
      component={AccountDataScr} 
      options={configOptionsScreen}
      />

      <Stack.Screen 
      name='TransferSelectScr' 
      component={TransferSelectScr} 
      options={configOptionsScreen}
      />

      <Stack.Screen 
      name='ProfileScr' 
      component={ProfileScr} 
      options={configOptionsScreen}
      />
    
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})




