import { Dimensions, StyleSheet } from 'react-native';
import { HOME, STYLES } from '~/constants';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 220,
        width: width - HOME.PADDING*2,
        borderRadius: 10,
        padding: 30,
        overflow: 'hidden',
    },
    wrapper: {
        flex: 1,
    },
    heading: {
        fontFamily: STYLES.FONT_EXTRABOLD,
        fontSize: 24,
        color: STYLES.WHITE_COLOR,
        paddingBottom: 14
    },
    desc: { 
        fontFamily: STYLES.FONT_REGULAR,
        lineHeight: 20,
        fontSize: 14,
        color: STYLES.WHITE_COLOR,
    },
    btn: {
        alignSelf: 'flex-start', 
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: STYLES.WHITE_COLOR,
        text: {
            fontFamily: STYLES.FONT_SEMIBOLD,
            fontSize: 14,
            color: STYLES.WHITE_COLOR,
        }
    }

});

export default styles;
