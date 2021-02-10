import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    View,
    ScrollView,
} from 'react-native';

const DATA = [
    { id: 1, title: 'Hà nội' },
    { id: 2, title: 'Hồ chí minh' },
    { id: 3, title: 'Đà nẵng' },
    { id: 4, title: 'Tây nguyên' },
    { id: 5, title: 'Cần thơ' },
    { id: 6, title: 'Hitech' },
];

const ModalPicker = (props) => {
    const onPressItem = (option) => {
        props.changeModalVisible(false);
        props.setActiveTitle(option.title);
    };

    const option = DATA.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
        );
    });

    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisible(false)}
            style={styles.container}
        >
            <View style={styles.modalSection}>
                <ScrollView>{option}</ScrollView>
            </View>
        </TouchableOpacity>
    );
};
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalSection: {
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',

        width: width * 0.9,
        height: height / 2.5,
        justifyContent: 'center',
    },
    option: {
        alignItems: 'flex-start',
    },
    text: {
        margin: 15,
        fontSize: 18,
    },
});

export default ModalPicker;
