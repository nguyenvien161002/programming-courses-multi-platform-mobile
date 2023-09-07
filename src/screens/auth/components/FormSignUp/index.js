import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getSignInWithEmail, getContentFormAuth } from '~/redux/auth';
import { authSlice } from '~/redux/auth';
import ButtonSubmit from '../ButtonSubmit';
import FormInput from '../FormInput';
import styles from './styles';
import FormSignIn from '../FormSignIn';

function FormSignUp() {
    const dispatch = useDispatch();
    const signInWithEmail = useSelector(getSignInWithEmail);
    const contentFormAuth = useSelector(getContentFormAuth);

    return (
        <View style={styles.wrapper}>
            <View style={styles.groupLabel}>
                <Text style={styles.groupLabel.text}>Your name?</Text>
            </View>
            <FormInput
                // value={contentFormAuth.value[0]}
                name={"display_name"}
                placeholder={"Your full name"}
                keyboardType={"default"}
                visibility={true}
            />
            <FormSignIn />
        </View>
    );
}

export default FormSignUp;
