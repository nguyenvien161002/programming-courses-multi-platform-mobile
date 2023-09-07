import { StyleSheet } from 'react-native';
import { STYLES } from '~/constants';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white'
    },
    groupLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        text: {
            fontFamily: 'Montserrat-Medium',
            fontSize: 14,
            padding: 8,
            paddingLeft: 4,
            paddingRight: 4,
        },
    },
    
});

export default styles;
