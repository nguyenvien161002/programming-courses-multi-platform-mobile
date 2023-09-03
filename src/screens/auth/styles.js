import { StyleSheet } from 'react-native';
import { STYLES } from '~/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 24,
        paddingEnd: 24,
        backgroundColor: 'white',
    },
    scroll: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 80,
        position: 'relative',
    },
    wrapperLogo: {
        alignItems: 'center',
        logo: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            color: '#333',
            fontFamily: 'Montserrat-Medium',
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
            fontFamily: 'Montserrat-Regular',
            fontSize: 14,
        },
        btnAuth: {
            fontFamily: 'Montserrat-Medium',
            padding: 10,
            paddingStart: 4,
            color: STYLES.PRIMARY_COLOR,
            fontWeight: '600',
            backgroundColor: 'white',
        },
    },
    forgotPassword: {
        marginTop: 10,
        padding: 10,
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: STYLES.PRIMARY_COLOR,
    },
    acceptTerm: {
        position: 'absolute',
        bottom: 20,
        paddingStart: 24,
        paddingEnd: 24,
        text: {
            fontFamily: 'Montserrat-Regular',
            fontSize: 12,
            textAlign: 'center',
            fontWeight: 400,
            lineHeight: 18,
        },
        termsOfUse: {
            fontFamily: 'Montserrat-Regular',
            textDecorationLine: 'underline',
            fontWeight: 500,
        },
    },
});

export default styles;
