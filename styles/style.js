const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center"
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 50,
    fontSize: 14,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 16,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 25,
    height: 50,
    marginTop: 10,
    width: 350,
    alignItems: "center",
    justifyContent: "center"
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogInContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  LogInText: {
    fontSize: 16,
  },
  LogInLink: {
    color: "#3897f1",
    fontSize: 16,
  },
  LoginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
export default styles;
