import { Dimensions, StyleSheet } from 'react-native';
import { HOME } from '~/constants';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        marginBottom: HOME.MARGIN_BOTTOM_SECTION,
    },
    flatList: {
        maxHeight: 220,
        marginBottom: 12,
    },
});

export default styles;
