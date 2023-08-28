import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { publicStacks } from '~/stack';

SplashScreen.preventAutoHideAsync();

function App() {
    const Stack = createNativeStackNavigator();

    const loadFontsAsync = async () => {
        await Font.loadAsync({
            'Montserrat-Regular': require('~/assets/fonts/Montserrat/Montserrat-Regular.ttf'),
            'Montserrat-Medium': require('~/assets/fonts/Montserrat/Montserrat-Medium.ttf'),
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
        <View style={{ flex: 1,  fontFamily: 'Montserrat-Regular', }} onLayout={onLayoutRootView}>
            <NavigationContainer>
                <Stack.Navigator>
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
    );
}

export default App;
