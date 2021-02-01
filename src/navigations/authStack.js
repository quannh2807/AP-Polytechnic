import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from '../constants';

import WelcomeScreen from '../screens/WelcomeScreen';
import ParentLogin from '../screens/ParentLogin';
import StudentLogin from '../screens/StudentLogin';

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
            <Stack.Screen name={AppRoute.PARENT_LOGIN} children={ParentLogin} />
            <Stack.Screen
                name={AppRoute.STUDENT_LOGIN}
                children={StudentLogin}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
