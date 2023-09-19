import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import styles from './stylesSlideItem';

function SlideItem({ item }) {
    return (
        <LinearGradient style={styles.container} colors={item.background} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
            <View style={styles.wrapper}>
                <Text style={styles.heading}>{item.heading}</Text>
                <Text numberOfLines={3} ellipsizeMode="tail" style={styles.desc}>
                    {item.desc}
                </Text>
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    Linking.openURL(item.link.href);
                }}
            >
                <Text style={styles.btn.text}>{item.link.title}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export default React.memo(SlideItem);
