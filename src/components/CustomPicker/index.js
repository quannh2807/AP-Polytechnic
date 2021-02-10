import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Modal } from 'react-native';
import CustomButtom from '../CustomButton';
import ModalPicker from '../ModalPicker';

const CustomPicker = () => {
    const [data, setData] = useState('Chọn cơ sở đào tạo');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const changeModalVisible = (bool) => {
        setIsModalVisible(bool);
    };

    const setActiveTitle = (title) => setData(title);

    return (
        <View style={styles.container}>
            <CustomButtom
                title={data}
                onPress={() => changeModalVisible(true)}
            />

            <Modal
                transparent
                animationType="slide"
                visible={isModalVisible}
                nRequestClose={() => changeModalVisible(false)}
            >
                <ModalPicker
                    changeModalVisible={changeModalVisible}
                    setActiveTitle={setActiveTitle}
                />
            </Modal>
        </View>
    );
};

const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {},
});

export default CustomPicker;
