import { Animated, FlatList, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import SlideItem from '../SlideItem';
import SlickDot from '../../../../components/SlickDot';
import styles from './stylesSlideShow';
import images from '~/assets/images';

function SlideShow() {
    const flatListRef = useRef();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideItems = [
        {
            id: 0,
            heading: 'V3D8 on Facebook',
            desc: 'V3D8 is mentioned everywhere, where there are job opportunities for IT careers and there are people who love V3D8 programming will be there.',
            link: {
                title: 'Visit Facebook',
                href: 'https://www.facebook.com/f8vnofficial',
            },
            imgSrc: images.banners.facebook,
            background: ['rgb(0, 126, 254)', 'rgb(6, 195, 254)'],
        },
        {
            id: 1,
            heading: 'V3D8 on Youtube',
            desc: 'V3D8 is mentioned everywhere, where there are job opportunities for IT careers and there are people who love V3D8 programming will be there...',
            link: {
                title: 'Visit channel',
                href: 'https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw',
            },
            imgSrc: images.banners.youtube,
            background: ['rgb(254, 33, 94)', 'rgb(255, 148, 2)'],
        },

        {
            id: 2,
            heading: 'HTML CSS Pro Course',
            desc: 'This is the most complete and detailed course you can find on the Internet!',
            link: {
                title: 'Learn more',
                href: 'https://fullstack.edu.vn/landing/htmlcss',
            },
            imgSrc: images.banners.htmlCssPro,
            background: ['rgb(104, 40, 250)', 'rgb(255, 186, 164)'],
        },
        {
            id: 3,
            heading: 'Learn ReactJS for Free!',
            desc: 'ReactJS course from basic to advanced. The result of this course is that you can do most common projects with ReactJS.',
            link: {
                title: 'Sign up now',
                href: 'https://fullstack.edu.vn/courses/reactjs?ref=banner',
            },
            imgSrc: images.banners.reactjs,
            background: ['rgb(40, 119, 250)', 'rgb(103, 23, 205)'],
        },
        {
            id: 4,
            heading: 'Student Achievements',
            desc: 'To achieve good results in everything, we need to define a clear goal for that. Learning to program is no exception.',
            link: {
                title: 'View results',
                href: 'https://fullstack.edu.vn/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8.html',
            },
            imgSrc: images.banners.stuAchi,
            background: ['rgb(118, 18, 255)', 'rgb(5, 178, 255)'],
        },
    ];

    const handleOnScroll = (event) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            },
        )(event);
        const index = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
        setCurrentIndex(index);
    };

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    const scrollToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % slideItems.length;
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
            <FlatList
                ref={flatListRef}
                style={styles.flatList}
                data={slideItems}
                horizontal={true}
                pagingEnabled={true}
                renderItem={({ item }) => <SlideItem item={item} />}
                snapToAlignment={'center'}
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                viewabilityConfig={viewabilityConfig}
            />
            <SlickDot data={slideItems} scrollX={scrollX} />
        </View>
    );
}

export default SlideShow;
