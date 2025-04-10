import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none', // Hide the bottom tab bar
        },
      }}>
      <Tabs.Screen name="publicity" options={{ headerShown: false }} />
      <Tabs.Screen name="events" options={{ headerShown: false }} />
      <Tabs.Screen name="timetables" options={{ headerShown: false }} />
    </Tabs>
  );
}