import { Animated, View, Dimensions } from 'react-native';
import React from 'react';

import styles from './stylesSlickDot';

const { width } = Dimensions.get('screen');

function SlickDot({ data, scrollX }) {
    return (
        <View style={styles.container}>
            {data.map((_, index) => {
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [20, 36, 20],
                    extrapolate: 'clamp',
                });
                const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ['#dddddd', '#9aa6af', '#dddddd'],
                    extrapolate: 'clamp',
                });
                return <Animated.View key={index} style={[styles.dot, { width: dotWidth, backgroundColor }]} />;
            })}
        </View>
    );
}

export default SlickDot;
