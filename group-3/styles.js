import { StyleSheet } from "react-native";
import { Button } from "react-native-web";


export const styles = StyleSheet.create({
  container: {
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
    margin: "15",
},
//текст на кнопках
shadowProp: {
    elevation: 15,
    shadowColor: '#141414',
},
//тінь
});