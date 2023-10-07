import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

// navigation
import { NavigationContainer } from '@react-navigation/native';

// navigators
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icons to tab navigator
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// screens
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import TabScreenOne from './screens/TabScreenOne';
import TabScreenTwo from './screens/TabScreenTwo';
import TabScreenThree from './screens/TabScreenThree';

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Second Screen" component={SecondScreen} />
    </Stack.Navigator>
  );
};

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Tab One':
              iconName = 'home';
              break;
            case 'Tab Two':
              iconName = 'star-sharp';
              break;
            case 'Tab Three':
              iconName = 'eye-sharp';
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Tab One"
        component={TabScreenOne}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tab Two"
        component={TabScreenTwo}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tab Three"
        component={TabScreenThree}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home Stack" component={HomeStack} />
        <Drawer.Screen name="Tab Screen" component={TabScreens} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
