import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ImageBackground, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
  const [avatarUri, setAvatarUri] = useState(null);

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

  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Помилка', 'Необхідний дозвіл для доступу до галереї');
      return false;
    }
    return true;
  };

  const processImage = async (uri) => {
    try {
      const manipResult = await ImageManipulator.manipulateAsync(
        uri,
        [
          { resize: { width: 400, height: 400 } }, // Resize to manageable size
        ],
        { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
      );
      return manipResult.uri;
    } catch (error) {
      console.error('Error processing image:', error);
      return uri; // Return original if processing fails
    }
  };

  const pickImageFromGallery = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Square aspect ratio
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        const processedUri = await processImage(result.assets[0].uri);
        setAvatarUri(processedUri);
        
        // Here you would typically upload to your server
        // await uploadImageToServer(processedUri);
      }
    } catch (error) {
      Alert.alert('Помилка', 'Не вдалося завантажити зображення');
      console.error('Error picking image:', error);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Помилка', 'Необхідний дозвіл для доступу до камери');
      return;
    }

    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        const processedUri = await processImage(result.assets[0].uri);
        setAvatarUri(processedUri);
        
        // Here you would typically upload to your server
        // await uploadImageToServer(processedUri);
      }
    } catch (error) {
      Alert.alert('Помилка', 'Не вдалося зробити фото');
      console.error('Error taking photo:', error);
    }
  };

  const showImageOptions = () => {
    Alert.alert(
      "Змінити фото профілю",
      "Оберіть спосіб додавання фото",
      [
        { text: "Камера", onPress: takePhoto },
        { text: "Галерея", onPress: pickImageFromGallery },
        { text: "Скасувати", style: "cancel" }
      ]
    );
  };

  // Placeholder function for server upload
  const uploadImageToServer = async (imageUri) => {
    try {
      const formData = new FormData();
      formData.append('avatar', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'avatar.jpg',
      });

      // Replace with your actual server endpoint
      const response = await fetch('YOUR_UPLOAD_ENDPOINT', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          // Add authentication headers if needed
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Upload successful:', result);
        // Handle successful upload
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Помилка', 'Не вдалося завантажити зображення на сервер');
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/background.png')} 
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar style="light" />
      
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.avatarContainer} onPress={showImageOptions}>
          {avatarUri ? (
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          ) : (
            <View style={styles.avatar}>
              <Ionicons name="camera" size={40} color="rgba(255, 255, 255, 0.7)" />
              <Text style={styles.avatarText}>Додати фото</Text>
            </View>
          )}
          <View style={styles.editIconContainer}>
            <Ionicons name="pencil" size={16} color="white" />
          </View>
        </TouchableOpacity>
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
  avatarContainer: {
    alignSelf: 'center',
    marginTop: 70,
    position: 'relative',
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: 'rgba(137, 137, 137, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: 'OpenSans_600SemiBold',
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
    fontFamily: 'OpenSans_700Bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'OpenSans_400Regular',
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
    fontFamily: 'OpenSans_600SemiBold',
  },
});