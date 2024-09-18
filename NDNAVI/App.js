import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';  
import DetailsScreen from './screens/DetailsScreen';  
import CustomNavigationBar from './components/CustomNavigationBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      screenOptions={({ route, options }) => ({
            header: (props) => <CustomNavigationBar route={route} options={options} {...props} />,  
          })}
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
