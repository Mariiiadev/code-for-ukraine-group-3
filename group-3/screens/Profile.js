// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ImageBackground, Alert } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { Ionicons, FontAwesome } from '@expo/vector-icons';

// const { width } = Dimensions.get('window');

// export default function ProfileScreen() {
//   return (
//     <ImageBackground 
//       source={require('../assets/background.png')} 
//       style={styles.container}
//       resizeMode="cover"
//     >
//       <StatusBar style="light" />
      
//       <View style={styles.topSection}>
//         <View style={styles.avatar} />
//       </View>

//       <View style={styles.infoSection}>
//         <Text style={styles.nameText}>Ім'я та прізвище</Text>

//         <View style={styles.statsContainer}>
//           <View style={styles.statItem}>
//             <FontAwesome name="handshake-o" size={20} color="black" />
//             <Text style={styles.statNumber}>7</Text>
//             <Text style={styles.statLabel}>Завершено зборів</Text>
//           </View>

//           <View style={styles.statItem}>
//             <Text style={{ fontSize: 20, color: 'black' }}>₴</Text>

//             <Text style={styles.statNumber}>7 568</Text>
//             <Text style={styles.statLabel}>Гривень заданочено</Text>
//           </View>
//         </View>

//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Мої збори</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Звіт зборів</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingBottom: 80,
//   },
//   topSection: {
//     height: 200,
//     justifyContent: 'flex-start',
//     paddingTop: 40,
//     paddingHorizontal: 20,
//   },
//   avatar: {
//     alignSelf: 'center',
//     marginTop: 70,
//     width: 180,
//     height: 180,
//     borderRadius: 100,
//     backgroundColor: 'rgba(137, 137, 137, 0.3)',
//     // borderWidth: 3,
//     // borderColor: 'rgba(137, 137, 137, 0.3)',
//   },
//   infoSection: {
//     alignItems: 'center',
//     marginTop: 120,
//     flex: 1,
//   },
//   nameText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 50,
//     color: 'black',
//     fontFamily: 'OpenSans_600SemiBold', // Використовуємо завантажений шрифт
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '80%',
//     marginBottom: 30,
//   },
//   statItem: {
//     alignItems: 'center',
//   },
//   statNumber: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginTop: 5,
//     color: 'black',
//     fontFamily: 'OpenSans_700Bold', // Використовуємо завантажений шрифт
//   },
//   statLabel: {
//     fontSize: 14,
//     color: 'black',
//     fontFamily: 'OpenSans_400Regular', // Використовуємо завантажений шрифт
//   },
//   button: {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     borderRadius: 10,
//     paddingVertical: 12,
//     paddingHorizontal: 60,
//     marginVertical: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333',
//     fontFamily: 'OpenSans_600SemiBold', // Використовуємо завантажений шрифт
//   },
// });


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ImageBackground, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
  const handleMyFundraisings = () => {
    Alert.alert(
      "Мої збори",
      "Тут буде відображено список всіх ваших зборів",
      [
        { text: "ОК", style: "default" }
      ]
    );
  };

  const handleFundraisingReport = () => {
    Alert.alert(
      "Звіт зборів",
      "Тут буде відображено детальний звіт по всіх зборах",
      [
        { text: "ОК", style: "default" }
      ]
    );
  };

  return (
    <ImageBackground 
      source={require('../assets/background.png')} 
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar style="light" />
      
      <View style={styles.topSection}>
        <View style={styles.avatar} />
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.nameText}>Ім'я та прізвище</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <FontAwesome name="handshake-o" size={23} color="black" />
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>Завершено зборів</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={{ fontSize: 20, color: 'black' }}>₴</Text>

            <Text style={styles.statNumber}>7 568</Text>
            <Text style={styles.statLabel}>Гривень заданочено</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleMyFundraisings}>
          <Text style={styles.buttonText}>Мої збори</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleFundraisingReport}>
          <Text style={styles.buttonText}>Звіт зборів</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
  },
  topSection: {
    height: 200,
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 70,
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: 'rgba(137, 137, 137, 0.3)',
    // borderWidth: 3,
    // borderColor: 'rgba(137, 137, 137, 0.3)',
  },
  infoSection: {
    alignItems: 'center',
    marginTop: 120,
    flex: 1,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: 'black',
    fontFamily: 'OpenSans_600SemiBold', // Використовуємо завантажений шрифт
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 5,
    color: 'black',
    fontFamily: 'OpenSans_700Bold', // Використовуємо завантажений шрифт
  },
  statLabel: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'OpenSans_400Regular', // Використовуємо завантажений шрифт
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 60,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    fontFamily: 'OpenSans_600SemiBold', // Використовуємо завантажений шрифт
  },
});