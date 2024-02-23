import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthProvider";
import { StatusBar } from 'expo-status-bar';


export default function RootLayout() {
    return (
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }} >
            <StatusBar style="auto" />
                <Stack.Screen name="(auth)" options={{ headerShown: false,     }} />
                <Stack.Screen name="(home)" options={{ headerShown: false,    } }/>
                </Stack>
        </AuthProvider>
    );
}