import * as Yup from 'yup';

const schemasSignIn = {
    schemasSignInWithNPhone: Yup.object().shape({
        phone: Yup.string()
            .matches(/^\d+$/, 'The phone number must be a string of numbers !')
            .min(10, 'Phone number must have at least 10 digits !')
            .max(12, 'Phone number should not exceed 12 digits !')
            .required('Phone number is required !'),
        phone_code: Yup.string()
            .matches(/^\d{6}$/, 'Phone code must be exactly 6 digits')
            .required('Confirmation code is required !'),
    }),
    schemasSignInWithEmail: Yup.object().shape({
        email: Yup.string().email('Invalid email !').required('Email is required !'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required !'),
    })
}

export default schemasSignIn;