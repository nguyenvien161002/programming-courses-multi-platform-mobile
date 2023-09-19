import { Dimensions, StyleSheet } from 'react-native';
import { COURSE, HOME, STYLES } from '~/constants';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width - HOME.PADDING * 2,
    },
    wrapper: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        borderRadius: 10,
        height: COURSE.HEIGHT,
        overflow: 'hidden',
    },
    wrapperIconCrownCourse: {
        position: 'absolute',
        top: 14,
        left: 14,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 6,
        backgroundColor: '#0000004d',
        icon: {},
    },
    wrapperBody: {
        marginTop: 10,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        title: {
            flex: 1,
            fontFamily: STYLES.FONT_SEMIBOLD,
            fontSize: 16,
        },
    },
    price: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        top: 14,
        right: 14,
        old: {
            padding: 4,
            paddingLeft: 6,
            paddingRight: 6,
            borderRadius: 6,
            fontFamily: STYLES.FONT_REGULAR,
            fontSize: 13,
            color: '#cccccc',
            backgroundColor: '#0000004d',
            textDecorationLine: 'line-through',
        },
        main: {
            padding: 4,
            paddingLeft: 6,
            paddingRight: 6,
            borderRadius: 6,
            marginLeft: 6,
            fontFamily: STYLES.FONT_SEMIBOLD,
            fontSize: 13,
            color: STYLES.PRIMARY_COLOR,
            backgroundColor: '#0000004d',
        },
    },
});

export default styles;
