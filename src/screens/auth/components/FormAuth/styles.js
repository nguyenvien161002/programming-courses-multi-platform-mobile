import { StyleSheet } from 'react-native';
import { STYLES } from '~/constants';

const styles = StyleSheet.create({
    wrapper: {},
    groupLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        text: {
            fontFamily: STYLES.FONT_MEDIUM,
            fontSize: 14,
            padding: 8,
            paddingLeft: 4,
            paddingRight: 4,
        },
    },
    buttonSubmit: {
        width: '100%',
        marginTop: 16,
        backgroundColor: 'transparent',
        height: 44,
        borderRadius: 44,
        overflow: 'hidden',
        linearGradient: {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            fontFamily: STYLES.FONT_SEMIBOLD,
            fontSize: 16,
            color: STYLES.WHITE_COLOR,
        },
    },
    togglePassword: {
        height: '100%',
        paddingLeft: 12,
        paddingRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
        icon: {
            color: '#999',
        }
    },
    msgError: {
        fontFamily: STYLES.FONT_MEDIUM,
        fontSize: 12,
        paddingLeft: 10,
        marginBottom: 10,
        color: STYLES.RED_COLOR,
    },
});

export default styles;
