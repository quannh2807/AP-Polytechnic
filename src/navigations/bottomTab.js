import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppRoute } from '../constants';
import TinTucScreen from '../screens/TinTucScreen';
import BangDiemScreen from '../screens/BangDiemScreen';
import LichHocScreen from '../screens/LichHocScreen';
import ThongTinCaNhanScreen from '../screens/ThongTinCaNhanScreen';

const Tab = createBottomTabNavigator();
const HomeBottomTab = () => (
    <Tab.Navigator initialRouteName={AppRoute.TIN_TUC}>
        <Tab.Screen name={AppRoute.TIN_TUC} component={TinTucScreen} />
        <Tab.Screen name={AppRoute.BANG_DIEM} component={BangDiemScreen} />
        <Tab.Screen name={AppRoute.LICH_HOC} component={LichHocScreen} />
        <Tab.Screen
            name={AppRoute.THONG_TIN_CA_NHAN}
            component={ThongTinCaNhanScreen}
        />
    </Tab.Navigator>
);

export default HomeBottomTab;
