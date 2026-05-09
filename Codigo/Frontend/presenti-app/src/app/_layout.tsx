import { appColors } from '../styles/appColors';
import { Stack } from 'expo-router';

export default function Layout() {
  const backgroundColor = appColors.gray[950];

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
