import { StyleSheet, Dimensions } from 'react-native';
import { STYLES } from '~/constants';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    keyboardView: {
        flex: 1,
    },
    scroll: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
    },
    scrollIndicator: {
        backgroundColor: STYLES.PRIMARY_COLOR,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: height,
        paddingBottom: 60,
    },
    wrapperLogo: {
        alignItems: 'center',
        logo: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            color: '#333',
            fontFamily: STYLES.FONT_MEDIUM,
            fontSize: 24,
            margin: 40,
            textAlign: 'center',
        },
    },
    body: {
        width: '100%',
        marginBottom: 40,
        mainStep: {
            width: '100%',
            marginTop: 14,
            alignItems: 'center',
        },
    },
    dontHaveAccount: {
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        text: {
            fontFamily: STYLES.FONT_REGULAR,
            fontSize: 14,
        },
        btnAuth: {
            fontFamily: STYLES.FONT_MEDIUM,
            padding: 10,
            paddingLeft: 4,
            color: STYLES.PRIMARY_COLOR,
            fontWeight: '600',
            backgroundColor: 'white',
        },
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'center',
        text: {
            marginTop: 10,
            padding: 10,
            fontFamily: STYLES.FONT_MEDIUM,
            fontSize: 14,
            color: STYLES.PRIMARY_COLOR,
            position: 'absolute',
        },
    },
    acceptTerm: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'transparent',
        text: {
            fontFamily: STYLES.FONT_REGULAR,
            fontSize: 12,
            textAlign: 'center',
            fontWeight: 400,
            lineHeight: 18,
        },
        termsOfUse: {
            fontFamily: STYLES.FONT_REGULAR,
            textDecorationLine: 'underline',
            fontWeight: 500,
        },
    },
});

export default styles;
