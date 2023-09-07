import { useCallback, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { publicStacks } from '~/stack';
import { STYLES } from '~/constants';
import store from '~/redux';

SplashScreen.preventAutoHideAsync();

function App() {
    const Stack = createNativeStackNavigator();

    const loadFontsAsync = async () => {
        await Font.loadAsync({
            'Montserrat-Regular': require('~/assets/fonts/Montserrat/Montserrat-Regular.ttf'),
            'Montserrat-Medium': require('~/assets/fonts/Montserrat/Montserrat-Medium.ttf'),
            'Montserrat-SemiBold': require('~/assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
            'Roboto-Regular': require('~/assets/fonts/Roboto/Roboto-Regular.ttf'),
        });
    };

    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Promise.all([loadFontsAsync()]);
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <Provider store={store}>
            <View style={{ flex: 1, fontFamily: 'Montserrat-Regular' }} onLayout={onLayoutRootView}>
                <StatusBar barStyle={'dark-content'} backgroundColor={STYLES.WHITE_COLOR} />
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
                        {publicStacks.map((stack, index) => (
                            <Stack.Screen
                                key={index}
                                name={stack.name}
                                component={stack.component}
                                options={stack.options}
                            />
                        ))}
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </Provider>
    );
}

export default App;
