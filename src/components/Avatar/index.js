import { Image, Text, View } from 'react-native';
import React from 'react';

import styles from './stylesAvatar';
import images from '~/assets/images';

function Avatar() {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.wrapper.img} source={images.silentMeow} />
            <Text style={styles.wrapper.userName} numberOfLines={1} ellipsizeMode="tail">Nguyễn Viên</Text>
        </View>
    );
}

export default Avatar;
