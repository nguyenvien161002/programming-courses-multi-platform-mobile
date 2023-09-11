import images from '~/assets/images';

const AUTH = {
    btns: [
        {
            _id: 1,
            icon: images.social.personal,
            title: 'Use email/phone number',
        },
        {
            _id: 2,
            icon: images.social.google,
            title: 'Continue with Google',
        },
        {
            _id: 3,
            icon: images.social.facebook,
            title: 'Continue with Facebook',
        },
        {
            _id: 4,
            icon: images.social.github,
            title: 'Continue with Github',
        },
    ],
    contentScreenSignIn: {
        unique: 1,
        titleAuth: 'Sign in to V3D8',
        dontHaveAcc: {
            title: `Don't have an account yet?`,
            titleLink: 'Sign up',
        },
    },
    contentScreenSignUp: {
        unique: 2,
        titleAuth: 'Sign up for V3D8',
        dontHaveAcc: {
            title: `You already have an account?`,
            titleLink: 'Sign in',
        },
    },
    contentFormAuthEmail: {
        value: ['', '', '', ''],
        keyboardType: ['default', 'email-address', 'default', 'default'],
        name: ['display_name', 'email', 'password', 'email_code'],
        maxLength: [100, 100, 50, 6],
        placeholder: ['Your full name', 'Email address', 'Enter the password', 'Confirmation code'],
        labelGroup: ['Your name?', ['Email', 'With phone number'], '', ''],
    },
    contentFormAuthNPhone: {
        value: ['', '', '', ''],
        keyboardType: ['default', 'number-pad', 'number-pad', 'default'],
        name: ['display_name', 'phone', 'phone_code', 'email_code'],
        maxLength: [100, 12, 6, 6],
        placeholder: ['Your full name', 'Phone number', 'Confirmation code', 'Confirmation code'],
        labelGroup: ['Your name?', ['Phone number', 'With email'], '', ''],
    }
};

export default AUTH;
