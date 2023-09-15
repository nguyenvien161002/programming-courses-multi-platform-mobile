import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Blog from '~/screens/blog';
import Home from '~/screens/home';
import Learn from '~/screens/learn';
import Menu from '~/screens/menu';
import Path from '~/screens/path';

const TABS = [
    { name: 'Path', component: Path, iconComponent: FontAwesome5, iconName: "road", iconSize: 18 },
    { name: 'Learn', component: Learn, iconComponent: FontAwesome5, iconName: "book-open", iconSize: 18 },
    { name: 'Home', component: Home, iconComponent: Ionicons, iconName: "home", iconSize: 20 },
    { name: 'Blog', component: Blog, iconComponent: Ionicons, iconName: "ios-newspaper", iconSize: 18 },
    { name: 'Menu', component: Menu, iconComponent: Entypo, iconName: "menu", iconSize: 22 },
];

export default TABS;
