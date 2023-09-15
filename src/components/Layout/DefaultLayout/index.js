import { SafeAreaView } from 'react-native-safe-area-context';

import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import styles from './stylesDefaultLayout';

function DefaultLayout() {
    return (
        <SafeAreaView style={styles.container}>
            <TopBar />
            <BottomBar />
        </SafeAreaView>
    );
}

export default DefaultLayout;
