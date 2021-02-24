import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from '../styles';
import { AppRoute } from '../constants';
import TinTucScreen from '../screens/TinTucScreen';
import BangDiemScreen from '../screens/BangDiemScreen';
import LichHocScreen from '../screens/LichHocScreen';
import ThongTinCaNhanScreen from '../screens/ThongTinCaNhanScreen';

const Tab = createMaterialBottomTabNavigator();
const AppStack = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
                let iconName;
                switch (route.name) {
                    case AppRoute.TIN_TUC:
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                        break;
                    case AppRoute.LICH_HOC:
                        iconName = focused ? 'calendar' : 'calendar-outline';
                        break;
                    case AppRoute.BANG_DIEM:
                        iconName = focused ? 'book' : 'book-outline';
                        break;
                    case AppRoute.THONG_TIN_CA_NHAN:
                        iconName = focused ? 'person' : 'person-outline';
                        break;
                }

                return <Ionicons name={iconName} size={21} color={color} />;
            },
        })}
        shifting
        activeColor={Colors.PRIMARY}
        inactiveColor={Colors.GRAY_DARK}
        barStyle={{
            backgroundColor: '#f1f1f1',
            borderTopColor: '#ccc',
            borderTopWidth: 0.25,
        }}
        initialRouteName={AppRoute.TIN_TUC}
    >
        <Tab.Screen
            name={AppRoute.TIN_TUC}
            component={TinTucScreen}
            options={{
                tabBarLabel: 'Tin tức',
            }}
        />
        <Tab.Screen
            name={AppRoute.BANG_DIEM}
            component={BangDiemScreen}
            options={{
                tabBarLabel: 'Bảng điểm',
            }}
        />
        <Tab.Screen
            name={AppRoute.LICH_HOC}
            component={LichHocScreen}
            options={{
                tabBarLabel: 'Lịch học',
            }}
        />
        <Tab.Screen
            name={AppRoute.THONG_TIN_CA_NHAN}
            component={ThongTinCaNhanScreen}
            options={{
                tabBarLabel: 'Cá nhân',
            }}
        />
    </Tab.Navigator>
);

export default AppStack;
