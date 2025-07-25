import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'center'
  },
//в'юшка
titletext: {
    textalign: 'left',
    fontSize: 36,
  },
//слоган
text: {
    fontFamily: "open-sans",
    fontSize: 24,
    margin: 21,

  },
//текст під слоганом
Image: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontFamily: 'Open Sans',
    flexDirection: 'column',
  },
//в'юшка
titletext: {
    textalign: 'left',
    fontSize: 36,
  },
    titleText: { // стилі для заголовків "Довіряй і тд"
    padding: "7%",
    margin: "5%", 
    alignSelf:'center',
    fontSize: 36,
  },
//слоган
text: {
    fontFamily: "open-sans",
    fontSize: 24,
    margin: 21,
  },

// login sign up pages
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

//addZbir page
  AddZbircontainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontFamily: 'Open Sans',
    flexDirection: 'column',
    overflow: 'hidden'

  },
  hiText: {
  fontSize: 24, 
  fontWeight: '5dv00'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
Image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
//рзташування фону
Button: {
    backgroundColor: "#f4f4f4",
    height: 64,
    width:361,
    marginBottom: 54,
    shadowColor: 'black',
    borderRadius: 10,
  },
//кнопки
Buttontext: {
    fontSize: 24,
    alignSelf: "center",
    margin: 15,
},
//текст на кнопках
shadowProp: {
    elevation: 15,
    shadowColor: '#141414',
},
//тінь
   scrollView: { 
    flex: 1,
    width: '100%',
    marginTop: 100,
    marginBottom: 60,
    borderRadius: 30, 
    overflow: 'hidden',
  },
  titleText: { // стилі для заголовків "Довіряй і тд"
    alignSelf:'center',
    fontSize: 36,
  },
  backgroundPic: { // градієнт бекграунд
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    height:"105%",
    width: "100%",
  },
  paragraph: { // regular text
    padding: 0,
  },
  addImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    borderBottomColor: 'grey',
  },
  AddZbirTitle: {
    paddingTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    paddingBottom: 1,
  },
  ImagePicker: {
    marginBottom: 10,
  },
  TextInputsContainer: {
    marginHorizontal: 40,    
  },
  textInput: {
    width: 300,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#ffffffff',
  },

  // drop down styles
  dropdownContainer: {
    flex: 1,
    padding: 0,
    marginTop: 30,
    marginBottom: 40,
  },
  dropdown: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 20,
    paddingBottom: 20,
    borderRadius: 15,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'flex-start',
        },
  DescriptionTextInput: {
    height: 100,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#ffffffff',
    paddingVertical: 10,
    textAlign: 'left',
    alignItems: "stretch",
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  addZbirButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 60,
    marginTop: 10
  },
  addZbirButton: {
    backgroundColor: '#2176AE',
    borderRadius: 20,
    height: 50,
    minWidth: 150,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
// Medical Help styles
medContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 110,
  },
  scrollViewMedicalContent: {
    width: 370,
    height: '70',
  },
  medInfoContainer: {
    padding: 20,
    backgroundColor: '#efeeeeff',
    borderRadius: 20,
    margin: 25,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    shadowColor: '#141414',
    elevation: 15,
  },
  medImage: {
    width: '40%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10, 
  },
  medInfoTextContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  medInfoText: {
    flex: 1,
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    margin: 5,
    padding: 1,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
});
