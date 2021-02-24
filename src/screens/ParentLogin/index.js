import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Headline, TextInput } from 'react-native-paper';

import { Colors } from '../../styles';
import CustomButton from '../../components/CustomButton';

const ParentLogin = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Headline style={{ fontSize: 28, fontWeight: 'bold' }}>
                    Đăng nhập phụ huynh
                </Headline>
            </View>

            <View style={styles.body}>
                <View>
                    <View style={styles.textInputSection}>
                        <TextInput
                            mode="outlined"
                            selectionColor={Colors.GRAY_LIGHT}
                            label="Số điện thoại phụ huynh"
                            style={styles.textInput}
                            dense
                            theme={{
                                colors: {
                                    primary: 'red',
                                },
                            }}
                        />
                    </View>
                    <View style={styles.textInputSection}>
                        <TextInput
                            mode="outlined"
                            selectionColor={Colors.PRIMARY}
                            label="Mật khẩu"
                            style={styles.textInput}
                            dense
                        />
                    </View>
                    <View style={styles.buttonSubmitSection}>
                        <CustomButton
                            title="Đăng nhập"
                            color={Colors.PRIMARY}
                            onPress={() => {}}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.footerTextSection}>
                    <Text>
                        - Phụ huynh sử dụng số điện thoại đã đăng kí với nhà
                        trường để đăng nhập
                    </Text>
                    <Text>
                        - Để lấy mật khẩu truy cập phụ huynh soạn tin nhắn theo
                        cú pháp POLY MK gửi về đầu số 8100.
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ParentLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    head: {
        flex: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    body: {
        flex: 40,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputSection: {
        marginBottom: 15,
        width: Dimensions.get('screen').width * 0.9,
    },
    buttonSubmitSection: {
        marginTop: 15,
    },

    footer: {
        flex: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerTextSection: {
        width: Dimensions.get('screen').width * 0.9,
        justifyContent: 'space-around',
    },
});
