import styles from './TabNavigator.styles'
//import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScr,NotificationsScr,ActivitiesScr, MenuGeneralScr,QrScanScr } from '../screens';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../constants/constants';

const Tab = createBottomTabNavigator();

import { Button, Text, View } from 'react-native'
import React from 'react'

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBarStyle}}>
      <Tab.Screen 
      name="Home" component={HomeScr} 
      options={{
        tabBarIcon:()=> <ButtonTab nameIcon='home' nameButton='Home' />
      }} />
      
      <Tab.Screen name="Activities" component={ActivitiesScr}
      options={{
        tabBarIcon:()=> <ButtonTab nameIcon='book-clock-outline' nameButton='Actividad' />
      }} />
      <Tab.Screen name="QR" component={QrScanScr} 
      options={{
        tabBarIcon:()=> <ButtonTab nameIcon='qrcode-scan' nameButton='QR' />
      }}/>
      <Tab.Screen name="Notifications" component={NotificationsScr} 
      options={{
        tabBarIcon:()=> <ButtonTab nameIcon='bell' nameButton='Notificaciones' />
      }}/>
      <Tab.Screen name="MenuGeneral" component={MenuGeneralScr} 
       options={{
        tabBarIcon:()=> <ButtonTab nameIcon='menu' nameButton='Menu' />
      }}/>
    </Tab.Navigator>
  )
}


export default TabNavigator


//-----------------------------------------------------------------------

const ButtonTab = ({focused,nameIcon,nameButton}) => {
  return (
    <View style={styles.buttonTabcontainer}>
      <MaterialCommunityIcons style={styles.iconTab} name={nameIcon} size={24} color={focused ? colors.buttonTabActive : colors.buttonTabInactive} />
      <Text style={styles.buttonTabText}>{nameButton}</Text>
  </View>
  )
}
