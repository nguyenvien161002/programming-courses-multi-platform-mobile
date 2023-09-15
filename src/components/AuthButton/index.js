import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import styles from './stylesAuthButton';

function AuthButton({ svgIcon, title, onPress }) {
    const SvgIcon = svgIcon;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.btn}>
                <SvgIcon width={24} height={24} style={styles.icon} />
                <View style={styles.title}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default AuthButton;
