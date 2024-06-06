import React, {useState, useRef} from "react";
import {
    Alert, Keyboard, KeyboardAvoidingView, StatusBar, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View
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
        console.log("Login button pressed");
        if (validateEmail(email) && validateUsername(username) && validatePassword(password)) {
            navigation.navigate('Home');
        }
    };

    function validateEmail(email) {
        if (!validator.validate(email) && email.length > 0) {
            setEmailAlert("Please enter a valid email address");
            return false;
        }
        setEmailAlert("");
        return true;
    }


    function validateUsername(username) {
        if (username.length < 5 && username.length > 0) {
            setUsernameAlert("Username must be at least 5 characters long");
            return false;
        }
        setUsernameAlert("")
        return true;
    }

    function validatePassword(password) {
        if (zxcvbn(password).score < 3 && password.length > 0) {
            setPasswordAlert("Password is too weak");
            return false;
        }
        setPasswordAlert("")
        return true;
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
                            onChangeText={setEmail}
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
                            onChangeText={setUsername}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onBlur={() => validateUsername(username)}
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
                            onChangeText={setPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={secureEntry}
                            onBlur={() => validatePassword(password) && setShowEye(false)}
                            maxLength={20}
                            onPressOut={() => setShowEye(true)}
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
