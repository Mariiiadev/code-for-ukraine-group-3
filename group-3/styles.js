import {StyleSheet} from 'react-native';

 export const styles = StyleSheet.create({
  container: { // розсташування об'єктів на сторінці
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  scrollView: { 
    flex: 1,
    width: '100%'
  },
  titleText: { // стилі для заголовків "Довіряй і тд"
    padding: "7%",
    margin: "5%", 
    alignSelf:'center',
    fontSize: 36,
  },

  //topBar: { // Розсташування логотипу
    // flex: 1,
    // justifyContent: 'space-between',
    // flexDirection:'column',
    // padding: '4%',
    // marginTop: '4%',
    // marginLeft: '2%',

  // },
  mainView: { //розсташування основних об'єктів у полі
    flex: 3,
    margin: 50,
    justifyContent: "space-around"
  },
  backgroundPic: { // градієнт бекграунд
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    height:"105%",
    width: "100%",
  },
  logoImage:{
    width: "13%",
    height: "250%",
    alignSelf: 'flex-end',
  },
  paragraph: { // regular text
    
  },
  addPicture: {
    width: '50%',
    height: '40%',
    alignSelf: 'center',
  },
});