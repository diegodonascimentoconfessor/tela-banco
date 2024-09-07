
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#005AA7', 
        },
        headerTintColor: '#FFFFFF', 
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Seja Bem-vindo', headerShown: false }} />
      <Stack.Screen name="about" options={{ title: 'Login' }} />
    </Stack>
  );
}
