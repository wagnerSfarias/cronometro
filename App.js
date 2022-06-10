import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/pages/Home';
import Watch from './src/pages/Watch';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

export default function App() {
 return (
         <NavigationContainer>
         <StatusBar backgroundColor="#4b5945" barStyle="light-content" translucent={false}/>

           <Tab.Navigator
           screenOptions={{
        
             tabBarShowLabel:false,
             tabBarActiveTintColor:'#FFF',
             headerTintColor:'#FFF',
             headerTitleAlign:'center',
             headerTitleStyle:{fontSize:25},
             headerStyle:{backgroundColor:'#4b5945'},
             tabBarStyle:{
                        backgroundColor:'#000',
                        borderTopWidth:0,
                        height:60
             }
           }}>

             <Tab.Screen name='Cronômetro' component={Home}
              options={{
                tabBarIcon:({color,size}) =>{
                  return <Icon name="stopwatch" color={color} size={35}/>
                }
              }}/>
             
             <Tab.Screen name='Relógio' component={Watch}
              options={{
                tabBarIcon:({color,size}) =>{
                  return <Icon name="clock" color={color} size={35}/>
                }
              }}/>
           </Tab.Navigator>
         </NavigationContainer>
  );
}
