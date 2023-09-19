import { Dimensions, StyleSheet } from 'react-native';
import { HOME } from '~/constants';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width - HOME.PADDING * 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        height: 4,
        borderRadius: 4,
        marginRight: 8
    },
});

export default styles;
