import {StatusBar} from 'expo-status-bar';
import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import styles from "../styles/style";

export default function Home({navigation}) {
    return (
        <View style={styles.homeContainer}>
            <StatusBar style="auto"/>
            <Text style={styles.logInText}>Logged in successfully!</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginButtonText}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
}