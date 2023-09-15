import { DefaultLayout } from '~/components/Layout';
import AuthScreen from '~/screens/auth';

const publicStacks = [
    { name: 'DefaultLayout', component: DefaultLayout },
    { name: 'Login', component: AuthScreen },
];

const privateStacks = [];

export { publicStacks, privateStacks };
