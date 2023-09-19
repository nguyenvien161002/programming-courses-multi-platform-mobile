import { StyleSheet } from 'react-native';

import { STYLES } from '~/constants';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        img: {
            width: 40,
            height: 40,
            borderRadius: 40,
        },
        userName: {
            flex: 1,
            marginLeft: 10,
            fontFamily: STYLES.FONT_SEMIBOLD,
            fontSize: 14,
            color: STYLES.TEXT_COLOR,
        },
    },
});

export default styles;
