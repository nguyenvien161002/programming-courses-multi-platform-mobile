import { StyleSheet } from 'react-native';
import { STYLES } from '~/constants';

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: STYLES.WHITE_COLOR,
        position: 'absolute',
        right: 8,
        left: 8,
        bottom: 8,
        borderRadius: 8,
        elevation: 0,
        borderWidth: 1,
        borderColor: '#eeeeee',
    },
});

export default styles;