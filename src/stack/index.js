import AuthScreen from '~/screens/auth';

const publicStacks = [
    { name: 'Login', component: AuthScreen, options: { headerShown: false } },
];

const privateStacks = [];

export { publicStacks, privateStacks };
