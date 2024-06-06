const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
    color: "#c4c3cb",
  },
  loginContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 25,
    height: 50,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  homeContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logInLinkContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  logInText: {
    fontSize: 16,
    color: "#c4c3cb",
  },
  logInLink: {
    color: "#3897f1",
    fontSize: 16,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  propertyContainer: {
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#c4c3cb",
    backgroundColor: "#fafafa",
    paddingHorizontal: 14,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    color: "#c4c3cb",
  },
  eyeIcon: {
    color: "#c4c3cb",
  },
  input: {
    flex: 1,
  },
  alertText: {
    color: 'red',
    fontSize: 12,
    paddingLeft: 25,
  }
});
export default styles;
