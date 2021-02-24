import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from '../navigations/authStack';
import AppStack from '../navigations/appStack';

const RootNavigation = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const checkAsyncStorage = async () => {
            try {
                const value = await AsyncStorage.getItem('loggedUser');
                if (value !== null) {
                    // value previously stored
                    setUser(value);
                }
            } catch (e) {
                // error reading value
            }
        };

        checkAsyncStorage();
    }, []);

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default RootNavigation;
