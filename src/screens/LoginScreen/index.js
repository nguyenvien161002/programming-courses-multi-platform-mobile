import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

import styles from './styles';
import images from '~/assets/images';
import AuthButton from '~/components/AuthButton';

function LoginScreen() {
    const Logo = images.logo;
    const authBtns = [
        {
            id: 1,
            icon: images.social.personal,
            title: 'Use email/phone number',
        },
        {
            id: 2,
            icon: images.social.google,
            title: 'Continue with Google',
        },
        {
            id: 3,
            icon: images.social.facebook,
            title: 'Continue with Facebook',
        },
        {
            id: 4,
            icon: images.social.github,
            title: 'Continue with Github',
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapperLogo}>
                <Logo width={90} height={90} style={styles.wrapperLogo.logo} />
                <Text style={styles.wrapperLogo.title}>Sign in to V3D8</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body.mainStep}>
                    {authBtns.map((btn) => (
                        <AuthButton key={btn.id} svgIcon={btn.icon} title={btn.title} />
                    ))}
                </View>
            </View>
            <View style={styles.dontHaveAccount}>
                <Text style={styles.dontHaveAccount.text}>Don't have an account yet?</Text>
                <View style={styles.dontHaveAccount.wrapperBtnAuth}>
                    <Text style={styles.dontHaveAccount.btnAuth}>Sign up</Text>
                </View>
            </View>
            <View style={styles.acceptTerm}>
                <Text style={styles.acceptTerm.text}>
                    Your continued use of this website constitutes your agreement to our{' '}
                    <Text style={styles.acceptTerm.termsOfUse}>Terms of Use.</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;
