import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthProvider';
import Header from '../../components/Header';
import { StatusBar } from 'expo-status-bar';

export default function QrScan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const router = useRouter();
  const { handleSignOut } = useAuth();

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      } catch (error) {
        console.error('Error requesting camera permission:', error);
      }
    };

    requestCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    router.push({ pathname: '/(home)/WebPage', params: { url: data } });
  };

  const renderCamera = () => {
    if (!scanned) {
      return (
        <View style={styles.cameraContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.camera}
          />
        </View>
      );
    }
    return null;
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={{ uri: 'https://res.cloudinary.com/dqhyudo4x/image/upload/v1708624541/WhatsApp_Image_2024-02-22_at_23.24.45_236f73c0_ug0tm2.jpg' }}
      style={styles.backgroundImage}
    >
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Welcome to the Barcode Scanner App!</Text>
        <Text style={styles.paragraph}>Scan a barcode to start your job.</Text>
        {renderCamera()}
        <TouchableOpacity
          style={scanned ? styles.scanAgainButton : styles.scanButton}
          onPress={() => setScanned(false)}
        //   disabled={scanned}
        >
          <Text style={styles.buttonText}>{scanned ? 'Scan Again' : 'Scan QR to Start your job'}</Text>
        </TouchableOpacity>
        {scanned && <Text style={styles.feedbackText}>Barcode scanned successfully!</Text>}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#ffffff',
  },
  cameraContainer: {
    width: '90%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 72,
    marginBottom: 40,
  },
  camera: {
    flex: 1,
  },
  scanButton: {
    backgroundColor: '#3498db', // Blue color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  scanAgainButton: {
    backgroundColor: '#27ae60', // Green color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedbackText: {
    color: 'green',
    fontSize: 16,
    marginTop: 10,
  },
  permissionText: {
    color: 'white',
    fontSize: 16,
  },
});
