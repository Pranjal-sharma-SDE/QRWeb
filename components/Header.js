import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthProvider';

function Header() {
  const { handleSignOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Scan</Text>
      <Button title="Sign Out" onPress={handleSignOut} color="#787BFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#007BFF',
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
    elevation: 2, // Add elevation for a slight shadow
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Adjusted text color for better visibility
  },
});

export default Header;
