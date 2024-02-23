// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { useSegments, useRouter } from "expo-router";
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

function useProtectedRoute(user) {
    const segments = useSegments();
    const router = useRouter();
  
    useEffect(() => {
      // Check if the RootLayout has fully mounted before performing navigation
      if (segments[0] !== undefined) {
        const inAuthGroup = segments[0] === "(auth)";
  
        if (!user && !inAuthGroup) {
          router.replace("/Login");
        } else if (user && inAuthGroup) {
          router.replace("/QrScan");
        }
      }
    }, [user, segments]);
  }

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully!');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useProtectedRoute(user);

  const value = {
    user,
    handleSignOut, // Add handleSignOut function to the context
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
