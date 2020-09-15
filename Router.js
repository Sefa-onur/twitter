import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Login from './Pages/Login';
import CreateUser from './Pages/CreateUser';
import Info from './Pages/Info';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={null} >               
                <Stack.Screen component={Info} name='Info' />
                <Stack.Screen component={Login} name='Login' />
                <Stack.Screen component={CreateUser} name='CreateUser' />
                <Stack.Screen name = 'Tabs'>
                   {() => (
                       <Tab.Navigator initialRouteName = 'Tab1' tabBarOptions = {{ activeTintColor:'#08a0e9', inactiveTintColor:'gray' }} >
                           <Tab.Screen name = 'Tab1' component = {Tab1} options = {{tabBarIcon:({color}) => <Icon name = 'home' size = {25} color = {color} />}} />
                           <Tab.Screen name = 'Tab2' component = {Tab2} options = {{tabBarIcon:({color}) => <Icon name = 'search' size = {25} color = {color} />}} />
                           <Tab.Screen name = 'Tab3' component = {Tab3} options = {{tabBarIcon:({color}) => <Icon name = 'message-circle' size = {25} color = {color} />}}/>
                           <Tab.Screen name = 'Tab4' component = {Tab4} options = {{tabBarIcon:({color}) => <Icon name = 'user' size = {25} color = {color} />}}/>
                       </Tab.Navigator>
                   )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;