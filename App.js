import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import { Companies } from './src/screens/Companies';
import { store } from './src/redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ListCompanies } from './src/screens/ListCompanies';

const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Companies" component={Companies} />
          <Stack.Screen name="ListCompanies" component={ListCompanies} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}