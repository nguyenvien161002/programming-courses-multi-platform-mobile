import { StyleSheet } from 'react-native';
import { STYLES } from '~/constants';

const styles = StyleSheet.create({
    wrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        backgroundColor: STYLES.WHITE_COLOR,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: '#e8ebed',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
    topBarLeft: {
        flex: 0.8,
    },
    topBarRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrapperLogo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        logo: {},
        title: {
            flex: 1,
            marginLeft: 8,
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
            color: STYLES.TEXT_COLOR,
        },
    },
    wrapperInputSearch: {
        flex: 1,
        height: 34,
        borderWidth: 1,
        borderColor: '#aaaaaa',
        borderRadius: 6,
        backgroundColor: 'white',
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        input: {
            flex: 1,
            height: '100%',
            paddingLeft: 8,
            paddingRight: 8,
            fontFamily: 'Montserrat-Regular',
            fontSize: 13,
        },
        wrapperIcon: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 34,
            paddingLeft: 4,
            paddingRight: 4,
        },
        icon: {
            marginBottom: 6,
            color: '#888888',
        },
    },
    btnSignIn: {
        height: 34,
        marginLeft: 10,
        backgroundColor: 'transparent',
        borderRadius: 6,
        overflow: 'hidden',
        linearGradient: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 8,
            paddingRight: 8,
        },
        text: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 13,
            color: STYLES.WHITE_COLOR,
        },
    },
});

export default styles;
