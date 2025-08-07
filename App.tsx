import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import TackleBoxesScreen from './src/screens/TackleBoxesScreen';
import PoleSetupsScreen from './src/screens/PoleSetupsScreen';
import MasterInventoryScreen from './src/screens/MasterInventoryScreen';
import WishlistScreen from './src/screens/WishlistScreen';
import FishingLogsScreen from './src/screens/FishingLogsScreen';

// Create navigation stack
const Stack = createNativeStackNavigator();

// Create QueryClient for data fetching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#0369a1',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            >
              <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ title: "Angler's Arsenal" }}
              />
              <Stack.Screen 
                name="TackleBoxes" 
                component={TackleBoxesScreen} 
                options={{ title: 'Tackle Boxes' }}
              />
              <Stack.Screen 
                name="PoleSetups" 
                component={PoleSetupsScreen} 
                options={{ title: 'Pole Setups' }}
              />
              <Stack.Screen 
                name="MasterInventory" 
                component={MasterInventoryScreen} 
                options={{ title: 'Master Inventory' }}
              />
              <Stack.Screen 
                name="Wishlist" 
                component={WishlistScreen} 
                options={{ title: 'Wishlist' }}
              />
              <Stack.Screen 
                name="FishingLogs" 
                component={FishingLogsScreen} 
                options={{ title: 'Fishing Logs' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style="light" />
        </PaperProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}