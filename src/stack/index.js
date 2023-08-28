import LoginScreen from '~/screens/LoginScreen';
import RegisterScreen from '~/screens/RegisterScreen';

const publicStacks = [
    { name: 'Login', component: LoginScreen, options: { headerShown: false } },
    { name: 'Register', component: RegisterScreen },
];

const privateStacks = [];

export { publicStacks, privateStacks };
