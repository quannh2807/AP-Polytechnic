import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { Colors } from '../../styles';

const CustomButtom = ({ onPress, title, icon, color }) => (
    <Button
        mode="outlined"
        icon={icon ? icon : null}
        color={color ? color : Colors.BLACK}
        uppercase={false}
        onPress={onPress}
        style={[
            styles.button,
            {
                borderColor: color,
                borderWidth: 2,
            },
        ]}
        labelStyle={{ color: color ? color : Colors.BLACK, fontSize: 15 }}
        contentStyle={styles.content}
    >
        {title}
    </Button>
);

export default CustomButtom;

const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        width: width * 0.9,
    },
    content: {
        paddingVertical: 5,
    },
});
