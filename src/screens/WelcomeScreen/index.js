import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

import { AppRoute } from '../../constants';
import { Colors } from '../../styles';
import CustomSwiper from '../../components/CustomSwiper';
import CustomButton from '../../components/CustomButton';
import { googleSignIn } from '../../slices/authSlice';

const WelcomeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onGoogleButtonPress = () => dispatch(googleSignIn());

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CustomSwiper />
            </View>

            <View style={styles.body}>
                <View style={styles.buttonSection}>
                    <CustomButton
                        title="Chọn cơ sở đào tạo"
                        onPress={() =>
                            navigation.navigate(AppRoute.STUDENT_LOGIN)
                        }
                    />
                </View>
                <View style={styles.buttonSection}>
                    <CustomButton
                        title="Đăng nhập bằng tài khoản Google"
                        icon={({ color }) => (
                            <Ionicons
                                name="logo-google"
                                size={24}
                                color={color}
                            />
                        )}
                        color={Colors.PRIMARY}
                        onPress={onGoogleButtonPress}
                    />
                </View>
                <Divider style={styles.divider} />
                <View style={styles.buttonSection}>
                    <CustomButton
                        title="Đăng nhập bằng tài khoản phụ huynh"
                        color={Colors.BLACK}
                        onPress={() =>
                            navigation.navigate(AppRoute.PARENT_LOGIN)
                        }
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <View>
                    <Text style={styles.footerDescript}>Phiên bản 0.1</Text>
                    <Text style={styles.footerDescript}>Bản quyền FPT</Text>
                </View>
                <Text style={styles.footerHelp}>Giúp đỡ</Text>
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
        flex: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
    },
    buttonSection: {
        marginBottom: 20,
    },
    divider: {
        width: Dimensions.get('screen').width * 0.9,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
    },

    footer: {
        flex: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    footerDescript: {
        color: Colors.GRAY_DARK,
    },
    footerHelp: {
        color: 'blue',
        fontWeight: 'bold',
    },
});
