import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './app/store';
import { GoogleSignin } from '@react-native-community/google-signin';

import RootNavigation from './navigations';

const App = () => {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                '441262431943-slhhh3etc3mtaem41fg1mvp7mlum9im1.apps.googleusercontent.com',
        });
    }, []);

    return (
        <Provider store={store}>
            <PaperProvider>
                <RootNavigation />
            </PaperProvider>
        </Provider>
    );
};

export default App;
