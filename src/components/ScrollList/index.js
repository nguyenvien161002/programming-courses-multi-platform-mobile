import { Animated, FlatList, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import CommonItem from '../CommonItem';
import SlickDot from '../SlickDot';
import styles from './stylesScrollList';

function ScrollList({ data, isNew, title, countStudents }) {
    const flatListRef = useRef();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOnScroll = (event) => {
        Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })(event);
        setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width));
    };

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    const scrollToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % data.length;
        flatListRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
        });
        setCurrentIndex(nextIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            scrollToNextSlide();
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]);

    return (
        <View style={styles.wrapper}>
            {countStudents && (
                <View style={styles.subHeading}>
                    <Text style={styles.subHeading.number}>{countStudents}</Text>
                    <Text style={styles.subHeading.text}>others have learned</Text>
                </View>
            )}
            <View style={styles.heading}>
                <View style={styles.headingLeft}>
                    {title && <Text style={styles.headingLeft.text}>{title}</Text>}
                    {isNew && <Text style={styles.headingLeft.isNew}>New</Text>}
                </View>
                <TouchableOpacity style={styles.headingRight}>
                    <Text style={styles.headingRight.text}>See all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.wrapperCourses}>
                <FlatList
                    ref={flatListRef}
                    style={styles.flatList}
                    data={data}
                    horizontal={true}
                    pagingEnabled={true}
                    renderItem={({ item }) => <CommonItem item={item} />}
                    snapToAlignment={'center'}
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleOnScroll}
                    viewabilityConfig={viewabilityConfig}
                />
                <SlickDot data={data} scrollX={scrollX} />
            </View>
        </View>
    );
}

export default ScrollList;
