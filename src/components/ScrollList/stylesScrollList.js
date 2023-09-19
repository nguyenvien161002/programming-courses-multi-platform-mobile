import { StyleSheet } from 'react-native';
import { HOME, STYLES } from '~/constants';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginBottom: HOME.MARGIN_BOTTOM_SECTION,
    },
    subHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        number: {
            fontFamily: STYLES.FONT_SEMIBOLD,
            fontSize: 14,
            color: '#777777',
        },
        text: {
            fontFamily: STYLES.FONT_REGULAR,
            fontSize: 14,
            color: '#777777',
            marginLeft: 6,
        },
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    headingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        text: {
            fontFamily: STYLES.FONT_EXTRABOLD,
            fontSize: 18,
            color: STYLES.BLACK_COLOR,
        },
        isNew: {
            fontFamily: STYLES.FONT_SEMIBOLD,
            fontSize: 12,
            paddingLeft: 6,
            paddingRight: 6,
            paddingTop: 4,
            paddingBottom: 4,
            borderRadius: 6,
            marginLeft: 6,
            color: STYLES.WHITE_COLOR,
            backgroundColor: STYLES.LIGHT_GREEN_COLOR,
        },
    },
    headingRight: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 38,
        paddingLeft: 16,
        borderRadius: 8,
        text: {
            fontFamily: STYLES.FONT_REGULAR,
            fontSize: 14,
            color: STYLES.BLACK_COLOR,
        },
    },
    wrapperCourses: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
