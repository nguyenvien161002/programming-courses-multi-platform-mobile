import { StyleSheet } from 'react-native';
import { STYLES } from '~/constants';

const styles = StyleSheet.create({
    wrapper: {},
    groupLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        text: {
            fontFamily: 'Montserrat-Medium',
            fontSize: 14,
            padding: 8,
            paddingStart: 4,
            paddingEnd: 4,
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
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
            color: STYLES.WHITE_COLOR
        },
    },
});

export default styles;
