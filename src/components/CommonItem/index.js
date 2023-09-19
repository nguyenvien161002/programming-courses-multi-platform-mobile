import { ImageBackground, Linking, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import styles from './stylesCommonItem';
import images from '~/assets/images';

function CommonItem({ item }) {
    const { CrownIconCourse } = images;

    const handlePress = () => {
        Linking.openURL('https://fullstack.edu.vn/');
    };

    const formattedNumber = (number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'decimal',
        }).format(number);
    };

    return (
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={handlePress}>
            <View style={styles.wrapper}>
                <ImageBackground source={{ uri: item.image_url }} resizeMode="cover" style={styles.imageBackground} alt={item.title}>
                    {item.is_pro && (
                        <View style={styles.wrapperIconCrownCourse}>
                            <CrownIconCourse style={styles.wrapperIconCrownCourse.icon} height={20} width={20} />
                        </View>
                    )}
                    {item.is_published && (
                        <View style={styles.price}>
                            {item.old_price !== 0 && item.old_price && <Text style={styles.price.old}>{formattedNumber(item.old_price)}đ</Text>}
                            {item.price !== 0 && item.price  && <Text style={styles.price.main}>{formattedNumber(item.price)}đ</Text>}
                        </View>
                    )}
                </ImageBackground>
                <View style={styles.wrapperBody}>
                    <Text style={styles.wrapperBody.title} numberOfLines={1} ellipsizeMode="tail">
                        {item.title}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default React.memo(CommonItem);
