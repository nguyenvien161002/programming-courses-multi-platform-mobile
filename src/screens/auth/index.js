import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { AUTH } from '~/constants';
import { authSlice, getContentScreen, getSignInWithEmail, getSignInWithNumberPhone } from '~/redux/auth';
import styles from './styles';
import images from '~/assets/images';
import AuthButton from '~/components/AuthButton';
import FormSignIn from './components/FormSignIn';
import FormSignUp from './components/FormSignUp';

function AuthScreen() {
    const dispatch = useDispatch();
    const contentModal = useSelector(getContentScreen);
    const Logo = images.logo;
    const signInWNPhone = useSelector(getSignInWithNumberPhone);
    const signInWithEmail = useSelector(getSignInWithEmail);

    const handleChangeContentScreen = () => {
        dispatch(authSlice.actions.handleSignInWithNumberPhone(false));
        dispatch(
            contentModal.unique === 1
                ? authSlice.actions.handleSetContentScreen({
                      unique: 2,
                      titleAuth: 'Sign up for V3D8',
                      dontHaveAcc: {
                          title: `You already have an account?`,
                          titleLink: 'Sign in',
                      },
                  })
                : authSlice.actions.handleResetContentScreen(),
        );
    };

    const handleOnPressBtn = (_id) => {
        if (_id === 1) {
            dispatch(authSlice.actions.handleSignInWithNumberPhone(!signInWNPhone));
        } else if (_id === 2) {
            console.log(2);
        } else if (_id === 3) {
            console.log(3);
        } else {
            console.log(4);
        }
    };

    const btnAuths = AUTH.btns.map((btn) => ({
        ...btn,
        onPress: () => handleOnPressBtn(btn._id),
    }));

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.wrapper}>
                    <View style={styles.wrapperLogo}>
                        <Logo width={90} height={90} style={styles.wrapperLogo.logo} />
                        <Text style={styles.wrapperLogo.title}>{contentModal.titleAuth}</Text>
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
                        ) : contentModal.unique === 1 ? (
                            <FormSignIn />
                        ) : (
                            <FormSignUp />
                        )}
                    </View>
                    <View style={styles.dontHaveAccount}>
                        <Text style={styles.dontHaveAccount.text}>{contentModal.dontHaveAcc.title}</Text>
                        <View style={styles.dontHaveAccount.wrapperBtnAuth}>
                            <Text style={styles.dontHaveAccount.btnAuth} onPress={handleChangeContentScreen}>
                                {contentModal.dontHaveAcc.titleLink}
                            </Text>
                        </View>
                    </View>
                    {signInWithEmail && contentModal.unique === 1 && (
                        <TouchableOpacity>
                            <Text style={styles.forgotPassword}>Forgot your password?</Text>
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
        </SafeAreaView>
    );
}

export default AuthScreen;
