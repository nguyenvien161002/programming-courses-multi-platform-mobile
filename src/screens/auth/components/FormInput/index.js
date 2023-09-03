import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';

import { getSignInWithEmail } from '~/redux/auth';
import styles from './styles';

function FormInput({ insideLeft, insideRight, handleSendCode, handleCallNPhoneCountry, ...props }) {
    const [isFocused, setIsFocused] = useState(false);
    const signInWithEmail = useSelector(getSignInWithEmail);

    return (
        <View style={[styles.wrapper, isFocused && styles.focused]}>
            {insideLeft && !signInWithEmail && (
                <TouchableOpacity onPress={handleCallNPhoneCountry}>
                    <View style={styles.insideLeft}>
                        <Text style={styles.insideLeft.text}>VN +84</Text>
                        <EvilIcons name="chevron-down" style={styles.insideLeft.icon} size={28} />
                    </View>
                </TouchableOpacity>
            )}
            {insideLeft && !signInWithEmail && <View style={styles.separate} />}
            <TextInput
                style={styles.input}
                {...props}
                onFocus={() => {
                    setIsFocused(true);
                }}
                onBlur={() => {
                    setIsFocused(false);
                }}
            />
            {insideRight && !signInWithEmail && (
                <TouchableOpacity disabled={true} onPress={handleSendCode}>
                    <View style={styles.insideRight}>
                        <Text style={styles.insideRight.text}>Send code</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default FormInput;
