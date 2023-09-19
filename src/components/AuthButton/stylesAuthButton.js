import { StyleSheet } from 'react-native';
import { STYLES } from '~/constants';

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 52,
        borderWidth: 1,
        borderColor: '#dce0e3',
        backgroundColor: '#fff',
        borderRadius: 44,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 14
    },
    icon: {
        marginLeft: 20,
    },
    title: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        paddingEnd: 20,
        fontSize: 14,
        fontFamily: STYLES.FONT_REGULAR
    }
});

export default styles;
