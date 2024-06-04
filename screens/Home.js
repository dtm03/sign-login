import {StatusBar} from 'expo-status-bar';
import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import styles from "../styles/style";

export default function Home({navigation}) {
    return (
        <View style={styles.homeContainer}>
            <StatusBar style="auto"/>
            <Text>Logged in successfully!</Text>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('Login')}>
                <Text>Log out</Text>
            </TouchableOpacity>
        </View>
    );
}