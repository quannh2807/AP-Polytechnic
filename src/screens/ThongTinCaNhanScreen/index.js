import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { gooogleSignOut } from '../../slices/authSlice';

const ThongTinCaNhanScreen = () => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text>Thong tin ca nhan</Text>

            <Button
                mode="outlined"
                icon={({ color }) => (
                    <Ionicons name="log-out-outline" size={24} color={color} />
                )}
                onPress={() => dispatch(gooogleSignOut())}
            >
                Logout
            </Button>
        </View>
    );
};

export default ThongTinCaNhanScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
