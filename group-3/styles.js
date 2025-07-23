import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontFamily: 'Open Sans',
  },
  hiContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logo: {
    width: 50,
    height: 50,
  },
  loginContainer: {
    width: 300,
    backgroundColor: '#2176AE',
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
},
  
  loginbar: {
    width: 250,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#ffffffff',
  },
  StartButton: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    width: 100,
  },
signupText: {
    marginTop: 30,
},
SignUpButton: {
    padding: 5,
    alignItems: 'flex-start',
    borderRadius: 20,
    width: 100,
    zIndex: 10,
},
LogInButton: {
    padding: 5,
    alignItems: 'flex-start',
    borderRadius: 20,
    width: 100,
    zIndex: 10,
},
image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
});