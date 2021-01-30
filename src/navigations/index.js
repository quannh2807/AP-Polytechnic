import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTab from './bottomTab';

import WelcomeScreen from '../screens/WelcomeScreen';
import ParentLogin from '../screens/ParentLogin';
import StudentLogin from '../screens/StudentLogin';
import { AppRoute } from '../constants';

const RootStack = createStackNavigator();
const RootNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={AppRoute.WELCOME}>
                <RootStack.Screen
                    name={AppRoute.WELCOME}
                    children={WelcomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <RootStack.Screen
                    name={AppRoute.PARENT_LOGIN}
                    children={ParentLogin}
                />
                <RootStack.Screen
                    name={AppRoute.STUDENT_LOGIN}
                    children={StudentLogin}
                />

                <RootStack.Screen
                    name={AppRoute.HOME}
                    children={HomeBottomTab}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
