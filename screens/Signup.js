import React, {useState, useRef} from "react";
import {
    Keyboard, KeyboardAvoidingView, StatusBar, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View
} from "react-native";
import {
    EnvelopeIcon, LockClosedIcon, UserIcon, EyeSlashIcon, EyeIcon
} from "react-native-heroicons/outline";
import validator from 'email-validator';
import zxcvbn from 'zxcvbn';
import styles from "../styles/style";

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailAlert, setEmailAlert] = useState('');
    const [usernameAlert, setUsernameAlert] = useState('');
    const [passwordAlert, setPasswordAlert] = useState('');
    const [secureEntry, setSecureEntry] = useState(true);
    const [showEye, setShowEye] = useState(false);
    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const onSignupPress = () => {
        if (validateEmail(email) && validateUsername(username) && validatePassword(password)) {
            setEmail("");
            setUsername("");
            setPassword("");
            navigation.navigate('Home');
        }
    };

    function validateEmail(email) {
        if (email.length === 0) {
            setEmailAlert("");
            return false;
        } else if (validator.validate(email)) {
            setEmailAlert("");
            return true;
        } else {
            setEmailAlert("Please enter a valid email address");
            return false;
        }
    }

    function validateUsername(username) {
        if (username.length === 0) {
            setUsernameAlert("");
            return false;
        } else if (username.length >= 5) {
            setUsernameAlert("");
            return true;
        } else {
            setUsernameAlert("Username must be at least 5 characters");
            return false;
        }
    }

    function validatePassword(password) {
        if (password.length === 0) {
            setPasswordAlert("");
            return false;
        } else if (zxcvbn(password).score >= 3) {
            setPasswordAlert("");
            return true;
        } else {
            setPasswordAlert("Password is too weak");
            return false;
        }
    }

    function focusPassword() {
        setShowEye(true);
        passwordRef.current?.focus();
    }

    return (<KeyboardAvoidingView style={styles.containerView}>
        <StatusBar style="light"/>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginContainer}>
                <Text style={styles.logoText}>Quoted</Text>
                <Text style={styles.alertText}>{emailAlert}</Text>
                <TouchableOpacity onPress={() => emailRef.current?.focus()}>
                    <View style={styles.propertyContainer}>
                        <EnvelopeIcon style={styles.icon}/>
                        <TextInput
                            ref={emailRef}
                            placeholder="E-Mail"
                            placeholderTextColor="#c4c3cb"
                            value={email}
                            onChangeText={(email) => {
                                setEmail(email);
                                validateEmail(email);
                            }}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onBlur={() => validateEmail(email)}
                            maxLength={30}
                        />
                    </View>
                </TouchableOpacity>
                <Text style={styles.alertText}>{usernameAlert}</Text>
                <TouchableOpacity onPress={() => usernameRef.current?.focus()}>
                    <View style={styles.propertyContainer}>
                        <UserIcon style={styles.icon}/>
                        <TextInput
                            ref={usernameRef}
                            placeholder="Username"
                            placeholderTextColor="#c4c3cb"
                            value={username}
                            onChangeText={(username) => {
                                setUsername(username);
                                validateUsername(username);
                            }}
                            autoCapitalize="none"
                            autoCorrect={false}
                            maxLength={15}
                        />
                    </View>
                </TouchableOpacity>
                <Text style={styles.alertText}>{passwordAlert}</Text>
                <TouchableOpacity onPress={() => focusPassword()}>
                    <View style={styles.propertyContainer}>
                        <LockClosedIcon style={styles.icon}/>
                        <TextInput
                            ref={passwordRef}
                            style={{flex: 1}}
                            placeholder="Password"
                            placeholderTextColor="#c4c3cb"
                            value={password}
                            onChangeText={(password) => {
                                setPassword(password);
                                validatePassword(password);
                            }}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={secureEntry}
                            onBlur={() => setShowEye(false)}
                            onPressOut={() => setShowEye(true)}
                            maxLength={20}
                        />
                        <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
                            {showEye && (secureEntry ? <EyeIcon style={styles.eyeIcon}/> :
                                <EyeSlashIcon style={styles.eyeIcon}/>)}
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => onSignupPress()}
                    title="Login"
                >
                    <Text style={styles.loginButtonText}>Sign up</Text>
                </TouchableOpacity>
                <View style={styles.logInLinkContainer}>
                    <Text style={styles.logInText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={[styles.logInLink, {textDecorationLine: 'underline'}]}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>);
}
