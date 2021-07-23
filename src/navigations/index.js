import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {

    const isLoggedIn = false

    return (
        <NavigationContainer>
            { isLoggedIn ? <DrawerNavigator /> : <AuthNavigator/>}
        </NavigationContainer>
    )
}

export default AppNavContainer;