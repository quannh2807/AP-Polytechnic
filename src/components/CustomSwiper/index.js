import React from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import { Colors } from '../../styles';
import img1 from '../../assets/images/giao-tiep-2.png';
import img2 from '../../assets/images/giao-tiep-1.png';
import img3 from '../../assets/images/giao-tiep-3.png';

const { width } = Dimensions.get('window');

const CustomSwiper = () => (
    <Swiper
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={10}
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
    >
        <View style={styles.slide}>
            <Image style={styles.image} source={img1} />
        </View>
        <View style={styles.slide}>
            <Image style={styles.image} source={img2} />
        </View>
        <View style={styles.slide}>
            <Image style={styles.image} source={img3} />
        </View>
    </Swiper>
);

export default CustomSwiper;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },

    image: {
        flex: 1,
        maxWidth: width,
        resizeMode: 'contain',
    },

    dotStyle: {
        borderColor: Colors.PRIMARY,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: 'rgba(255, 0, 0, 0)',
        width: 15,
        height: 15,
    },

    activeDotStyle: {
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        width: 15,
        height: 15,
    },

    paginationStyle: {
        position: 'absolute',
        bottom: 0,
    },
});
