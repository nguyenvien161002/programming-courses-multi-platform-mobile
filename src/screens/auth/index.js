import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { authSelectors } from '~/redux/auth';
import { authSlice } from '~/redux/auth';
import { AUTH } from '~/constants';
import AuthButton from '~/components/AuthButton';
import FormAuth from './components/FormAuth';
import styles from './styles';
import images from '~/assets/images';

function AuthScreen() {
    const dispatch = useDispatch();
    const Logo = images.logo;
    
    const { getContentScreen, getSignInWithEmail, getSignInWithNumberPhone } = authSelectors;
    const contentScreen = useSelector(getContentScreen);
    const signInWNPhone = useSelector(getSignInWithNumberPhone);
    const signInWithEmail = useSelector(getSignInWithEmail);

    const handleChangeContentScreen = () => {
        if (signInWithEmail) dispatch(authSlice.actions.handleResetContentFormAuth());
        dispatch(authSlice.actions.handleSignInWithEmail(false));
        dispatch(authSlice.actions.handleSignInWithNumberPhone(false));
        dispatch(
            contentScreen.unique === 1
                ? authSlice.actions.handleSetContentScreen(AUTH.contentScreenSignUp)
                : authSlice.actions.handleResetContentScreen(),
        );
    };

    const handleOnPressBtn = (_id) => {
        if (_id === 1) {
            dispatch(authSlice.actions.handleSignInWithNumberPhone(!signInWNPhone));
        } else if (_id === 2) {
            console.log('Login with Google');
        } else if (_id === 3) {
            console.log('Login with Facebook');
        } else {
            console.log('Login with GitHub');
        }
    };

    const btnAuths = AUTH.btns.map((btn) => ({
        ...btn,
        onPress: () => handleOnPressBtn(btn._id),
    }));

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.keyboardView} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <ScrollView
                    style={styles.scroll}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.wrapper}>
                        <View style={styles.wrapperLogo}>
                            <Logo width={90} height={90} style={styles.wrapperLogo.logo} />
                            <Text style={styles.wrapperLogo.title}>{contentScreen.titleAuth}</Text>
                        </View>
                        <View style={styles.body}>
                            {!signInWNPhone ? (
                                <View style={styles.body.mainStep}>
                                    {btnAuths.map((btn) => (
                                        <AuthButton
                                            key={btn._id}
                                            svgIcon={btn.icon}
                                            title={btn.title}
                                            onPress={btn.onPress}
                                        />
                                    ))}
                                </View>
                            ) : (
                                <FormAuth />
                            )}
                        </View>
                        <View style={styles.dontHaveAccount}>
                            <Text style={styles.dontHaveAccount.text}>{contentScreen.dontHaveAcc.title}</Text>
                            <View style={styles.dontHaveAccount.wrapperBtnAuth}>
                                <Text style={styles.dontHaveAccount.btnAuth} onPress={handleChangeContentScreen}>
                                    {contentScreen.dontHaveAcc.titleLink}
                                </Text>
                            </View>
                        </View>
                        {signInWithEmail && contentScreen.unique === 1 && (
                            <TouchableOpacity style={styles.forgotPassword}>
                                <Text style={styles.forgotPassword.text}>Forgot your password?</Text>
                            </TouchableOpacity>
                        )}
                        <View style={styles.acceptTerm}>
                            <Text style={styles.acceptTerm.text}>
                                Your continued use of this website constitutes your agreement to our{' '}
                                <Text style={styles.acceptTerm.termsOfUse}>Terms of Use.</Text>
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default AuthScreen;
