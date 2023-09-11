import { Button, ScrollView, TextInput, View } from 'react-native';
import React from 'react';

import styles from './styles';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.wrapper}>
                    <Button title="Login" onPress={() => navigation.navigate('Login')} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;
