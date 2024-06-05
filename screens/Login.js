import React from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import styles from "../styles/style";
import {LockClosedIcon, UserIcon} from "react-native-heroicons/outline";

export default function LoginScreen({navigation}) {
    const onLoginPress = () => {
        console.log("Login button pressed");
        navigation.navigate('Home');
    };

    return (
        <KeyboardAvoidingView style={styles.containerView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginContainer}>
                        <Text style={styles.logoText}>Quoted</Text>
                        <View style={styles.propertyContainer}>
                            <UserIcon style={styles.icon}/>
                            <TextInput
                                placeholder="Username"
                                placeholderTextColor="#c4c3cb"
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.propertyContainer}>
                            <LockClosedIcon style={styles.icon}/>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="#c4c3cb"
                                secureTextEntry={true}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={() => onLoginPress()}
                            title="Login"
                        >
                            <Text style={styles.loginButtonText}>Log in</Text>
                        </TouchableOpacity>
                        <View style={styles.logInContainer}>
                            <Text style={styles.logInText}>Don't have an account yet? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={[styles.logInLink, {textDecorationLine: 'underline'}]}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
