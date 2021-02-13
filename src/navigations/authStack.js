import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from '../constants';

import WelcomeScreen from '../screens/WelcomeScreen';
import ParentLogin from '../screens/ParentLogin';

const Stack = createStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName={AppRoute.WELCOME}>
            <Stack.Screen
                name={AppRoute.WELCOME}
                children={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={AppRoute.PARENT_LOGIN}
                children={ParentLogin}
                options={{
                    headerStyle: { elevation: 0 },
                    title: '',
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
