import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getSignInWithEmail, getContentFormAuth } from '~/redux/auth';
import { authSlice } from '~/redux/auth';
import ButtonSubmit from '../ButtonSubmit';
import FormInput from '../FormInput';
import styles from './styles';

function FormSignIn() {
    const dispatch = useDispatch();
    const signInWithEmail = useSelector(getSignInWithEmail);
    const contentFormAuth = useSelector(getContentFormAuth);

    const handleRightLabel = () => {
        dispatch(authSlice.actions.handleSignInWithEmail(!signInWithEmail));
        dispatch(
            !signInWithEmail
                ? authSlice.actions.handleSetContentFormAuth({
                      value: ['', ''],
                      keyboardType: ['email-address', 'visible-password'],
                      name: ['email', 'password'],
                      placeholder: ['Email address', 'Enter the password'],
                      labelGroup: ['Email', 'With phone number'],
                  })
                : authSlice.actions.handleResetContentFormAuth(),
        );
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.groupLabel}>
                <Text style={styles.groupLabel.text}>{contentFormAuth.labelGroup[0]}</Text>
                <TouchableOpacity onPress={handleRightLabel}>
                    <Text style={styles.groupLabel.text}>{contentFormAuth.labelGroup[1]}</Text>
                </TouchableOpacity>
            </View>
            <FormInput
                insideLeft={"true"}
                // value={contentFormAuth.value[0]}
                name={contentFormAuth.name[0]}
                placeholder={contentFormAuth.placeholder[0]}
                keyboardType={contentFormAuth.keyboardType[0]}
            />
            <FormInput
                insideRight={"true"}
                // value={contentFormAuth.value[1]}
                name={contentFormAuth.name[1]}
                placeholder={contentFormAuth.placeholder[1]}
                keyboardType={contentFormAuth.keyboardType[1]}
            />
            <ButtonSubmit title={'Sign in'} />
        </View>
    );
}

export default FormSignIn;
