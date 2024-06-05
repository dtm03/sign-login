const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
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
  logInContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 10,
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
    paddingLeft: 14,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    color: "#c4c3cb",
  },
});
export default styles;
