import React, { useState, useRef } from 'react';
import { Text, TextInput, Button, View, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import { auth } from '../../firebaseConfig';
import { signInWithPhoneNumber } from 'firebase/auth';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { useAuth } from '../../context/AuthProvider';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust background color and opacity as needed
  },
  button: {
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  }
});

export default function Page() {
  const { user, handleSignOut } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const recaptchaVerifier = useRef(null);

  const handleSendCode = async () => {
    try {
      setLoading(true);
      const provider = signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier.current);
      const verificationId = await provider;
      setVerificationId(verificationId);
      setVerificationSent(true);
      setError(null);
    } catch (error) {
      setError(`Error sending verification code: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (verificationId) {
      try {
        setLoading(true);
        const userCredential = await verificationId.confirm(verificationCode);
        console.log('User credential:', userCredential);
        setError(null);
      } catch (error) {
        setError(`Error verifying code: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <ImageBackground source={{uri:'https://res.cloudinary.com/dqhyudo4x/image/upload/v1690698399/Portfolio/plane.8a8895e2_arytdt.webp'}} style={styles.background}>
      <View style={styles.container}>
        {user ? (
          // Render logged-in state
          <>
            <Text>User is already logged in!</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
            <Link href="/(home)/QrScan">
              <Button title="QrScan" />
            </Link>
           
          </>
        ) : (
          // Render authentication form
          <>
            <Text style={styles.title}> Login Using Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
            <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} />

            {!verificationSent ? (
              // Render send code button
              <Button
                style={styles.button}
                title="Send Code"
                onPress={handleSendCode}
                disabled={!phoneNumber}
              />
            ) : (
              // Render verification code input and verify button
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Verification Code"
                  keyboardType="number-pad"
                  value={verificationCode}
                  onChangeText={(text) => setVerificationCode(text)}
                />
                <Button
                  style={styles.button}
                  title="Verify Code"
                  onPress={handleVerifyCode}
                  disabled={!verificationCode}
                />
              </>
            )}

            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {error && <Text style={styles.errorText}>{error}</Text>}
          </>
        )}
      </View>
    </ImageBackground>
  );
}
