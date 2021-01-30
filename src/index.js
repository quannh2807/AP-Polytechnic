import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './store';

import RootNavigation from './navigations';

const App = () => {
    return (
        <Provider store={store}>
            <PaperProvider>
                <RootNavigation />
            </PaperProvider>
        </Provider>
    );
};

export default App;
