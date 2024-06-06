import React, {useRef, useState} from "react";
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
import {EyeIcon, EyeSlashIcon, LockClosedIcon, UserIcon} from "react-native-heroicons/outline";

export default function LoginScreen({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [usernameAlert, setUsernameAlert] = useState('');
    const [passwordAlert, setPasswordAlert] = useState('');
    const [showEye, setShowEye] = useState(false);
    const [secureEntry, setSecureEntry] = useState(true);

    const onLoginPress = () => {
        console.log("Login button pressed");
        navigation.navigate('Home');
    };

    function validateUsername(username) {
        if (true) {
            setUsernameAlert("");
            return true;
        }
        setUsernameAlert("There is no such username. Please create an account.");
        return false;
    }

    function validatePassword(password) {
        if (true) {
            setPasswordAlert("");
            return true
        } else {
            setPasswordAlert("Password does not match username");
            return false;
        }
    }

    function focusPassword() {
        setShowEye(true);
        passwordRef.current?.focus();
    }

    return (
        <KeyboardAvoidingView style={styles.containerView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginContainer}>
                        <Text style={styles.logoText}>Quoted</Text>
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
                            onPress={() => onLoginPress()}
                            title="Login"
                        >
                            <Text style={styles.loginButtonText}>Log in</Text>
                        </TouchableOpacity>
                        <View style={styles.logInLinkContainer}>
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
