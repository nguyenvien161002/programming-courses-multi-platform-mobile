import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

function ButtonSubmit({ title, onPress, disabled }) {
    return (
        <TouchableOpacity style={styles.buttonSubmit} onPress={onPress} disabled={disabled} >
            <LinearGradient
                colors={['#2cccff', '#22dfbf']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    ...styles.buttonSubmit.linearGradient,
                    ...(disabled ? styles.buttonSubmit.disabled : {})
                }}
            >
                <Text style={styles.buttonSubmit.text}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export default ButtonSubmit;
