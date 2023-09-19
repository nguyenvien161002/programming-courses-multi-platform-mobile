import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { STYLES } from '~/constants';
import Avatar from '~/components/Avatar';
import styles from './stylesTopBar';
import images from '~/assets/images';

function TopBar() {
    const { Logo } = images;
    const navigation = useNavigation();
    const [isSignedIn, setIsSignedIn] = useState(false);
    
    return (
        <View style={styles.wrapper}>
            <View style={styles.content}>
                <View style={styles.topBarLeft}>
                    {!isSignedIn ? (
                        <View style={styles.wrapperLogo}>
                            <Logo style={styles.wrapperLogo.logo} width={40} height={40} />
                            <Text style={styles.wrapperLogo.title} numberOfLines={1} ellipsizeMode="tail">
                                V3D8
                            </Text>
                        </View>
                    ) : (
                        <Avatar />
                    )}
                </View>
                <View style={styles.topBarRight}>
                    <View style={styles.wrapperInputSearch}>
                        <TextInput style={styles.wrapperInputSearch.input} placeholder='Search...' />
                        <View style={styles.wrapperInputSearch.wrapperIcon}>
                            <EvilIcons name="search" style={styles.wrapperInputSearch.icon} size={26} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnSignIn} onPress={() => navigation.navigate('Login')}>
                        <LinearGradient
                            colors={STYLES.BUTTON_GRADIENT}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            style={styles.btnSignIn.linearGradient}
                        >
                            <Text style={styles.btnSignIn.text}>Sign in</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default TopBar;
