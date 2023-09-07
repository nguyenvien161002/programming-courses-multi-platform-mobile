import AuthScreen from '~/screens/auth';
import Home from '~/screens/home';

const publicStacks = [
    { name: 'Home', component: Home },
    { name: 'Login', component: AuthScreen },
];

const privateStacks = [];

export { publicStacks, privateStacks };
