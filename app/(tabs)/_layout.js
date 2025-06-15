import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Theme } from '../../styles/Theme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Theme[colorScheme ?? 'light'].tint,
        headerTitleStyle: { fontSize: 18 }
      }}>
      <Tabs.Screen 
        name='contacts' 
        options={{ tabBarLabel: 'Contacts', title: 'Contacts', tabBarIcon: ({ color, size }) => ( <Ionicons name='menu' size={size} color={color} />) }} 
      />
      <Tabs.Screen 
        name='favorites' 
        options={{ tabBarLabel: 'Favorites', title: 'Favorites', tabBarIcon: ({ color, size }) => ( <Ionicons name='star' size={size} color={color} />)  }} 
      />
      <Tabs.Screen 
        name='profile' 
        options={{ tabBarLabel: 'Profile', title: 'Profile', tabBarIcon: ({ color, size }) => ( <Ionicons name='person' size={size} color={color} />) }} 
      />
    </Tabs>
  );
}