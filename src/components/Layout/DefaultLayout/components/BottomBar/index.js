import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { publicTabs } from '~/tabs';
import { STYLES } from '~/constants';
import TabBarIcon from '../TabBarButton';
import styles from './stylesBottomBar';

const Tab = createBottomTabNavigator();

function BottomBar() {
   
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: styles.tabBarStyle,
                tabBarActiveTintColor: STYLES.PRIMARY_COLOR,
            }}
        >
            {publicTabs.map((tab, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={tab.name}
                        component={tab.component}
                        options={{
                            tabBarButton: (props) => (
                                <TabBarIcon
                                    label={tab.name}
                                    iconComponent={tab.iconComponent}
                                    iconName={tab.iconName}
                                    iconSize={tab.iconSize}
                                    {...props}
                                />
                            ),
                        }}
                    />
                );
            })}
        </Tab.Navigator>
    );
}

export default BottomBar;
