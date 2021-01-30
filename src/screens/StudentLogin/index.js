import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AppRoute } from '../../constants';

const StudentLogin = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Student Login</Text>

            <Button
                mode="contained"
                onPress={() => navigation.navigate(AppRoute.HOME)}
            >
                Home
            </Button>
        </View>
    );
};

export default StudentLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
