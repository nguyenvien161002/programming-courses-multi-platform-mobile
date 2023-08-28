import { Image, Text, View } from 'react-native';
import React from 'react';

import styles from './styles';

function AuthButton({ svgIcon, title}) {
    const SvgIcon = svgIcon;
    return (
        <View style={styles.btn}>
            <SvgIcon width={24} height={24} style={styles.icon} />
            <View style={styles.title}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    );
}

export default AuthButton;
