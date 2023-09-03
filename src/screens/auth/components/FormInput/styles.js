import { StyleSheet } from 'react-native';

import { STYLES } from '~/constants';

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        width: '100%',
        height: 44,
        borderWidth: 1,
        borderColor: '#dce0e3',
        backgroundColor: '#fff',
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 10,
    },
    focused: {
        borderColor: 'rgba(22, 24, 35, .4)',
        caretColor: STYLES.PRIMARY_COLOR,
    },
    insideLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 16,
        paddingEnd: 4,
        text: {
            fontFamily: 'Montserrat-Regular',
            fontSize: 14,
        },
        icon: {
            padding: 0,
            marginBottom: 6,
        },
    },
    separate: {
        height: '70%',
        backgroundColor: 'rgba(22, 24, 35, .2)',
        width: 0.5,
    },
    insideRight: {
        height: '100%',
        right: 0,
        paddingStart: 20,
        paddingEnd: 20,
        borderRadius: 40,
        alignItems: 'center',
        backgroundColor: '#ccc',
        justifyContent: 'center',
        text: {
            fontFamily: 'Montserrat-Medium',
            fontSize: 14,
            color: '#757575',
        },
    },
    input: {
        flex: 1,
        width: '100%',
        height: '100%',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        paddingStart: 20,
        paddingEnd: 20,
        overflow: 'hidden',
    },
});

export default styles;
