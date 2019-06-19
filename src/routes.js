import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Home from './pages/Home';

import logo from './assets/logo.png';


export default createAppContainer(
    createStackNavigator(
        {
            Home,
            Login
        },
        {
            initialRouteName: 'Home',
            defaultNavigationOptions: {
                headerTintColor: '#000',
                headerTitle: <Image style={{ marginHorizontal: 20 }} source= { logo } />,
                headerBackTitle: null

            }, 
            mode: 'modal'
        }
    )
);