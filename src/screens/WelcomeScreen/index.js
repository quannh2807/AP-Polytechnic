import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AppRoute } from '../../constants';

import CustomSwiper from '../../components/CustomSwiper';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CustomSwiper />
            </View>

            <View style={styles.body}>
                <Button
                    mode="contained"
                    icon="play"
                    style={styles.button}
                    onPress={() => navigation.navigate(AppRoute.STUDENT_LOGIN)}
                >
                    Student login
                </Button>
                <Button
                    mode="contained"
                    icon="play"
                    style={styles.button}
                    onPress={() => navigation.navigate(AppRoute.PARENT_LOGIN)}
                >
                    Parent login
                </Button>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Phiên bản 0.1</Text>
                <Text style={styles.footerText}>Bản quyền FPT</Text>
                <Text style={styles.footerText}>Giúp đỡ</Text>
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    header: {
        flex: 40,
    },

    body: {
        flex: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
    },

    footer: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
    },
    footerText: {},
});
