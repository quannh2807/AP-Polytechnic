import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AuthStack from '../navigations/authStack';
import AppStack from '../navigations/appStack';

const RootNavigation = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default RootNavigation;
