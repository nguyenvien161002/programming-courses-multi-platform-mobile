import { StyleSheet } from 'react-native';
import { STYLES } from '~/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: STYLES.WHITE_COLOR,
        backgroundColor: STYLES.WHITE_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: STYLES.PRIMARY_COLOR,
        borderRadius: 40,
    },
    text: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 10,
        textAlign: 'center',
        color: STYLES.PRIMARY_COLOR,
    },
});

export default styles;
