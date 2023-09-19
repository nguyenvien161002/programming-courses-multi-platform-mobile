import { useEffect, useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { STYLES } from '~/constants';
import styles from './stylesTabBarButton';

function TabBarButton({ label, iconComponent, iconName, iconSize, onPress, accessibilityState }) {
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);

    const focused = accessibilityState.selected;
    const Icon = iconComponent;

    useEffect(() => {
        if (focused) {
            viewRef.current.animate({ 0: { scale: 0.5, translateY: 8 }, 1: { scale: 1, translateY: -14 } });
            circleRef.current.animate({
                0: { scale: 0 },
                0.2: { scale: 0.2 },
                0.4: { scale: 0.4 },
                0.6: { scale: 0.6 },
                0.8: { scale: 0.8 },
                1: { scale: 1.2 },
            });
            textRef.current.transitionTo({ scale: 1 });
        } else {
            viewRef.current.animate({ 0: { scale: 1.2, translateY: -14 }, 1: { scale: 1, translateY: 8 } });
            circleRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
            textRef.current.transitionTo({ scale: 0 });
        }
    }, [focused]);

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
            <Animatable.View ref={viewRef} duration={300} style={styles.wrapper}>
                <View style={styles.btn}>
                    <Animatable.View ref={circleRef} style={styles.circle} />
                    <Icon name={iconName} size={iconSize} color={focused ? STYLES.WHITE_COLOR : STYLES.PRIMARY_COLOR} />
                </View>
                <Animatable.Text ref={textRef} style={styles.text}>{label}</Animatable.Text>
            </Animatable.View>
        </TouchableOpacity>
    );
}

export default TabBarButton;
