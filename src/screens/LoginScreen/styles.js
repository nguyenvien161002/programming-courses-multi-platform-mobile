import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingStart: 24,
        paddingEnd: 24,
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
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        text: {
            fontFamily: 'Montserrat-Regular',
            fontSize: 14,
        },
        wrapperBtnAuth: {
            padding: 10,
            paddingStart: 4,
        },
        btnAuth: {
            color: '#00badf',
            fontWeight: '600',
        },
    },
    acceptTerm: {
        position: 'absolute',
        bottom: 20,
        paddingStart: 24,
        paddingEnd: 24,
        text: {
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 18,
            fontFamily: 'Montserrat-Regular',
        },
        termsOfUse: {
            textDecorationLine: 'underline',
            fontWeight: 500,
        },
    },
});

export default styles;
