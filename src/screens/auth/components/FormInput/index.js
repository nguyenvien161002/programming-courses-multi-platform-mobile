import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';

import { authSelectors } from '~/redux/auth';
import styles from './styles';

function FormInput({ visibility, insideLeft, insideRight, disabledInsideRight, isInValid, icon, onBlur, ...props }) {
    const [isFocus, setIsFocus] = useState(false);
    const { getSignInWithEmail } = authSelectors;
    const signInWithEmail = useSelector(getSignInWithEmail);

    const handleBlur = () => {
        setIsFocus(false);
        return onBlur();
    };

    const handleFocus = () => {
        setIsFocus(true);
    };

    return (
        <View style={[!visibility && styles.visibility, styles.wrapper, isFocus && styles.focused, isInValid && styles.isInValid]}>
            {insideLeft && !signInWithEmail && (
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.insideLeft}>
                        <Text style={styles.insideLeft.text}>VN +84</Text>
                        <EvilIcons name="chevron-down" style={styles.insideLeft.icon} size={28} />
                    </View>
                </TouchableOpacity>
            )}
            {insideLeft && !signInWithEmail && <View style={styles.separate} />}
            <TextInput style={styles.input} onBlur={handleBlur} onFocus={handleFocus} {...props} />
            {insideRight && !signInWithEmail && (
                <TouchableOpacity disabled={disabledInsideRight} onPress={() => {}}>
                    <View style={[styles.insideRight, disabledInsideRight ? styles.disableInsideRight : {}]}>
                        <Text
                            style={{
                                ...styles.insideRight.text,
                                ...(disabledInsideRight ? styles.disableInsideRight.text : {}),
                            }}
                        >
                            Send code
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
            {icon && <View style={styles.wrapperIcon}>{icon}</View>}
        </View>
    );
}

export default FormInput;
