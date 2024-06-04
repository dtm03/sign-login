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

export default function LoginScreen({navigation}) {
    const onLoginPress = () => {
        console.log("Login button pressed");
        navigation.navigate('Home');
    };

    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.logoText}>Quoted</Text>
                        <TextInput
                            placeholder="E-Mail"
                            placeholderTextColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={() => onLoginPress()}
                            title="Login"
                        >
                            <Text style={styles.LoginButtonText}>Sign up</Text>
                        </TouchableOpacity>
                        <View style={styles.LogInContainer}>
                            <Text style={styles.LogInText}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.LogInLink}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
