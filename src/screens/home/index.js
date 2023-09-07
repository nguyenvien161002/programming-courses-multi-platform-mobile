import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white', padding: 40}}>
            <View style={{flex: 1}}>
                <Button title='Login' onPress={() => (navigation.navigate('Login'))} />
                <TextInput placeholder='1' style={styles.input} />
                <TextInput placeholder='2' style={styles.input} />
                <TextInput placeholder='3' style={styles.input} />
                <TextInput placeholder='4' style={styles.input} />
                <TextInput placeholder='5' style={styles.input} />
                <TextInput placeholder='6' style={styles.input} />
                <TextInput placeholder='7' style={styles.input} />
                <TextInput placeholder='8' style={styles.input} />
                <TextInput placeholder='9' style={styles.input} />
                <TextInput placeholder='10' style={{...styles.input, marginBottom: 100}} />
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    input: {
        height: 44,
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 20,
        paddingLeft: 20,
        borderColor: 'black',
        paddingRight: 20,
        borderWidth: 1,
    }
});
