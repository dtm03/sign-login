import React, {useState} from "react";
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView, StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {EnvelopeIcon, LockClosedIcon, UserIcon, LockOpenIcon} from "react-native-heroicons/outline";
import validator from 'email-validator';
import zxcvbn from 'zxcvbn';
import styles from "../styles/style";

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secureEntry, setSecureEntry] = useState(true);

    const onSignupPress = () => {
        console.log("Login button pressed");
        if (!validator.validate(email) || zxcvbn(password).score < 3 || username.length < 5) {
            Alert.alert('Invalid', 'Try again!');
        } else {
            navigation.navigate('Home');
        }
    };

    return (
        <KeyboardAvoidingView style={styles.containerView}>
            <StatusBar style="light"/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginContainer}>

                    <Text style={styles.logoText}>Quoted</Text>
                    <View style={styles.propertyContainer}>
                        <EnvelopeIcon style={styles.icon}/>
                        <TextInput
                            placeholder="E-Mail"
                            placeholderTextColor="#c4c3cb"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.propertyContainer}>
                        <UserIcon style={styles.icon}/>
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor="#c4c3cb"
                            value={username}
                            onChangeText={setUsername}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.propertyContainer}>
                        <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
                            {secureEntry ? <LockClosedIcon style={styles.icon} /> : <LockOpenIcon style={styles.icon} />}
                        </TouchableOpacity>

                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#c4c3cb"
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={secureEntry}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => onSignupPress()}
                        title="Login"
                    >
                        <Text style={styles.loginButtonText}>Sign up</Text>
                    </TouchableOpacity>
                    <View style={styles.logInContainer}>
                        <Text style={styles.logInText}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={[styles.logInLink, {textDecorationLine: 'underline'}]}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
