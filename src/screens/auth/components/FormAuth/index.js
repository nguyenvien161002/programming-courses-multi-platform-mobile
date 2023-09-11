import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';

import { authSelectors } from '~/redux/auth';
import { schemasSignUp, schemasSignIn } from '~/schemas';
import { authSlice } from '~/redux/auth';
import { AUTH } from '~/constants';
import ButtonSubmit from '../ButtonSubmit';
import FormInput from '../FormInput';
import styles from './styles';

function FormAuth() {
    const dispatch = useDispatch();
    const [secureTextEntry, setSecureTextEntry] = useState(false);
    
    const { getSignInWithEmail, getContentFormAuth, getContentScreen } = authSelectors;
    const { value, keyboardType, maxLength, name, placeholder, labelGroup } = useSelector(getContentFormAuth);
    const contentScreen = useSelector(getContentScreen);
    const signInWithEmail = useSelector(getSignInWithEmail);

    const { schemasSignUpWithNPhone, schemasSignUpWithEmail } = schemasSignUp;
    const { schemasSignInWithNPhone, schemasSignInWithEmail } = schemasSignIn;

    const validationSchema =
        contentScreen.unique === 1
            ? signInWithEmail
                ? schemasSignInWithEmail
                : schemasSignInWithNPhone
            : signInWithEmail
            ? schemasSignUpWithEmail
            : schemasSignUpWithNPhone;

    const handleRightLabel = (resetForm) => {
        dispatch(authSlice.actions.handleSignInWithEmail(!signInWithEmail));
        dispatch(
            !signInWithEmail
                ? authSlice.actions.handleSetContentFormAuth(AUTH.contentFormAuthEmail)
                : authSlice.actions.handleResetContentFormAuth(),
        );
        resetForm();
    };

    const handleToggleShowPassword = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    useEffect(() => {
        if (keyboardType[2] === 'number-pad') {
            setSecureTextEntry(false);
        } else {
            setSecureTextEntry(true);
        }
    }, [keyboardType[2]]);

    return (
        <Formik
            initialValues={{
                [name[0]]: '',
                [name[1]]: '',
                [name[2]]: '',
                [name[3]]: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                values = {
                    ...(contentScreen.unique !== 1 ? { [name[0]]: values[name[0]] } : {}),
                    [name[1]]: values[name[1]],
                    [name[2]]: values[name[2]],
                    ...(contentScreen.unique !== 1 ? (signInWithEmail ? { [name[3]]: values[name[3]] } : {}) : {}),
                };
                console.log('SubmitForm: ' + JSON.stringify(values, null, 2));
            }}
        >
            {({ values, errors, touched, isValid, dirty, resetForm, handleSubmit, handleChange, setFieldError, setFieldTouched }) => (
                <View style={styles.wrapper}>
                    {contentScreen.unique !== 1 && (
                        <View style={styles.groupLabel}>
                            <Text style={styles.groupLabel.text}>{labelGroup[0]}</Text>
                        </View>
                    )}
                    {contentScreen.unique !== 1 && (
                        <FormInput
                            value={values[name[0]] || value[0]}
                            name={name[0]}
                            maxLength={maxLength[0]}
                            placeholder={placeholder[0]}
                            keyboardType={keyboardType[0]}
                            onBlur={() => {
                                setFieldTouched(name[0], true);
                            }}
                            onChangeText={handleChange(name[0])}
                            visibility={contentScreen.unique !== 1}
                            isInValid={!!touched[name[0]] ? errors[name[0]] !== undefined : false}
                        />
                    )}
                    {errors[name[0]] && touched[name[0]] && <Text style={styles.msgError}>{errors[name[0]]}</Text>}
                    {/*---------------------------------------------------------------------------------------------*/}
                    <View style={styles.groupLabel}>
                        <Text style={styles.groupLabel.text}>{labelGroup[1][0]}</Text>
                        <TouchableOpacity onPress={() => handleRightLabel(resetForm)}>
                            <Text style={styles.groupLabel.text}>{labelGroup[1][1]}</Text>
                        </TouchableOpacity>
                    </View>
                    <FormInput
                        value={values[name[1]] || value[1]}
                        name={name[1]}
                        maxLength={maxLength[1]}
                        placeholder={placeholder[1]}
                        keyboardType={keyboardType[1]}
                        onBlur={() => {
                            setFieldTouched(name[1], true);
                        }}
                        onChangeText={(text) => {
                            handleChange(name[1])(text);
                            if (touched[name[1]]) {
                                validationSchema
                                    .validateAt(name[1], text)
                                    .then(() => {})
                                    .catch((error) => {
                                        setFieldError(name[1], error.message);
                                    });
                            }
                        }}
                        visibility={true}
                        insideLeft={true}
                        isInValid={touched[name[1]] ? errors[name[1]] !== undefined : false}
                    />
                    {errors[name[1]] && touched[name[1]] && <Text style={styles.msgError}>{errors[name[1]]}</Text>}
                    {/*---------------------------------------------------------------------------------------------*/}
                    <FormInput
                        value={values[name[2]] || value[2]}
                        name={name[2]}
                        maxLength={maxLength[2]}
                        placeholder={placeholder[2]}
                        keyboardType={keyboardType[2]}
                        secureTextEntry={secureTextEntry}
                        onBlur={() => {
                            setFieldTouched(name[2], true);
                        }}
                        onChangeText={handleChange(name[2])}
                        visibility={true}
                        insideRight={true}
                        isInValid={touched[name[2]] ? errors[name[2]] !== undefined : false}
                        disabledInsideRight={!!values[name[1]] ? errors[name[1]] : true}
                        icon={
                            !!values[name[2]] && signInWithEmail && (
                                <TouchableOpacity onPress={handleToggleShowPassword}>
                                    <View style={styles.togglePassword}>
                                        <Ionicons name={secureTextEntry ? 'eye' : 'eye-off'} style={styles.togglePassword.icon} size={24} />
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    />
                    {errors[name[2]] && touched[name[2]] && <Text style={styles.msgError}>{errors[name[2]]}</Text>}
                    {/*---------------------------------------------------------------------------------------------*/}
                    {contentScreen.unique !== 1 && (
                        <FormInput
                            value={values[name[3]] || value[3]}
                            name={name[3]}
                            maxLength={maxLength[3]}
                            placeholder={placeholder[3]}
                            keyboardType={keyboardType[3]}
                            onBlur={() => {
                                setFieldTouched(name[3], true);
                            }}
                            onChangeText={handleChange(name[3])}
                            visibility={contentScreen.unique !== 1 && signInWithEmail}
                            isInValid={touched[name[3]] ? errors[name[3]] !== undefined : false}
                        />
                    )}
                    {errors[name[3]] && touched[name[3]] && <Text style={styles.msgError}>{errors[name[3]]}</Text>}
                    <ButtonSubmit
                        onPress={handleSubmit}
                        title={contentScreen.unique === 1 ? 'Sign in' : 'Sign up'}
                        disabled={!isValid || !dirty}
                    />
                </View>
            )}
        </Formik>
    );
}

export default FormAuth;
