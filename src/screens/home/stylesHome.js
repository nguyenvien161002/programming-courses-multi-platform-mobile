import { Dimensions, StyleSheet } from 'react-native';
import { HOME } from '~/constants';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        padding: HOME.PADDING,
        paddingTop: 8,
        paddingBottom: 50,
    },
});

export default styles;
