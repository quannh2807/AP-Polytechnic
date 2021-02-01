import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { gooogleSignOut } from '../../slices/authSlice';
import { useDispatch } from 'react-redux';

const TinTucScreen = () => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text>Tin tuc</Text>

            <Button
                mode="outlined"
                icon={({ color, size }) => (
                    <Ionicons name="log-out-outline" size={24} color={color} />
                )}
                onPress={() => dispatch(gooogleSignOut())}
            >
                Logout
            </Button>
        </View>
    );
};

export default TinTucScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
