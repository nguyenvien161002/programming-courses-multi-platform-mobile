import { StyleSheet } from 'react-native';
import { STYLES } from '~/constants';

const styles = StyleSheet.create({
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
        disabled: {
            opacity: 0.6,
        },
    },
});

export default styles;
